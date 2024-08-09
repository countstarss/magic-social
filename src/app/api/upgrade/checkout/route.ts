import { config } from './../../../../middleware';
import { Stripe } from 'stripe'
import { db } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{
  apiVersion:"2024-06-20"
})

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if(!userId) {
      return new NextResponse('No Authorized',{ status:401 })
    }

    const line_items : Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
          price: '{{RECURRING_PRICE_ID}}',
          quantity: 1,
          price_data:{
            currency:'USD',
            product_data:{
              name:"10,000 AI TOKENS",
              description: "All $10 worth of credit"
            }
          }
        },
      ]

    let purchaes = await db.purchase.create({
      data:{
        userId: userId,
        credit: 1000
      }
    });

    // 找到购买过服务的 stripe 用户
    let stripeCustomer = await db.stripeCustomer.findUnique({
      where :{
        userId: userId
      },
      select:{
        stripeCustomerId:true
      }
    })

    if(!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user?.emailAddresses[0].emailAddress,
      });

      let  stripeCustomer = await db.stripeCustomer.create({
        data:{
          userId:userId,
          stripeCustomerId:customer.id,
        }
      })
    }

    const session = await stripe.checkout.sessions.create({
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      mode: "payment",
      customer_email: user?.emailAddresses[0].emailAddress,
      line_items,
      metadata: {
        userId:userId,
      },
    })

    return NextResponse.json({ url:session.url })

  } catch (error) {
    return new NextResponse('Internal Error',{ status: 500 })
  }
}