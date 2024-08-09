import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{
  apiVersion:"2024-06-20"
})

export async function POST(req:Request) {
  //FIXME:
  const { userId } = auth();
  let body = await req.text();

  const signature = headers().get("stripe-signature")
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      // NOTE: 通过CLI获取 WEBHOOK)SECRET_KEY [Stripe CLI](https://docs.stripe.com/stripe-cli)
      // NOTE: 本地监听Stripe 事件 [Listen Event](https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local)
      // NOTE: 获取webhook_signing_secret 

      process.env.STRIPE_WEBHOOK_SIGNING_SECRET as string
    );
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return new NextResponse('Internal Error',{ status: 400 })
  }

  // NOTE: WEB_HOOK监听端口，根据`事件的类型`进行处理
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      if(!userId) {
        return new NextResponse('Invalid Session',{ status:400 })
      }

      //NOTE: 通过useId寻找user，如果没有找到，那么创建一个user，新用户有10000credit，然后又买了10000,一共是10000 + 10000 = 20000
      //NOTE: 如果找到，那么更新user信息，然后又买了10000,一共是findUserByUserId.totalCredit + 10000
      try {
        const findUserByUserId = await db.user.findUnique({
          where:{
            userId:userId
          }
        });

        if(!findUserByUserId){
          await db.user.create({
            data:{
              userId:userId,
              totalCredit:10000 + 10000
            }
          })
        } else {
          await db.user.update({
            where:{
              userId:userId
            },
            data:{
              totalCredit:findUserByUserId.totalCredit + 10000,
            }
          })
        }
      } catch (error) {
        return new NextResponse('Invalid Event',{ status:2000 })
      }
    //NOTE: 如果使用switch，每个分支结束之后 break
    break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}