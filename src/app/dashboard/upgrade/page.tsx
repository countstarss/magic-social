'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios, { Axios } from 'axios';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { upgradePlans } from '@/lib/contentTemplate';
import { UserButton } from '@clerk/nextjs';

type Props = {}

const Upgrade = (props: Props) => {
  const router = useRouter();

  const handleOnClick = async () => {    
    const response = await axios.post("/api/upgrade/checkout")
    console.log('response',response);
    router.push(response.data.url);
  }

  return (
    <>
      {/* <div className='mt-5 py-6 px-4 bg-slate-200 rounded-xl'>
        <h2 className='font-semibold text-xl'>Upgrade</h2>
      </div> */}

      <div className='mx-5 p-2'>

        <div className='flex flex-row md:flex-row gap-2 mt-5 py-6 px-4 bg-slate-200 rounded-xl  justify-between min-w-[400px] '>
          <div className='flex gap-2 items-center  w-4/5 lg:w-2/3 '>
            <div className='flex gap-2 items-center p-[6px] border rounded-full bg-slate-100'>
              <h2 className='font-semibold text-lg px-4'>Upgrade</h2>
            </div>
          </div>

          <div className='flex gap-2 items-center p-2 scale-150'>
            <UserButton />
          </div>
        </div>
        <div className='w-full h-[80vh] p-2 px-6 my-6 py-6 mt-8 bg-slate-200 justify-around flex flex-col gap-8 rounded-xl overflow-scroll
                      lg:grid lg:grid-cols-3
                      md:grid md:grid-cols-2 
                      '>
          {
            upgradePlans.map((plan) => (
              <Card className="h-[320px]" key={`${plan.name}-${Date().toString()}`}>
                <CardHeader>
                  <CardTitle className='w-[300px] ml-2'>{plan.name}</CardTitle>
                  <CardDescription className='ml-2'>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid grid-rows-3 items-center gap-4">
                      <p className="flex flex-row space-y-1.5 gap-2 whitespace-nowrap"
                      >
                        <Check></Check>{plan.func1}
                      </p>
                      <p className="flex flex-row space-y-1.5 gap-2 whitespace-nowrap">
                        <Check></Check>{plan.func2}
                      </p>
                      <p className="flex flex-row space-y-1.5 gap-2 whitespace-nowrap">
                        <Check></Check>{plan.func3}
                      </p>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="w-full p-5 ">
                  <Button
                    onClick={handleOnClick}
                    className='p-5'
                  >Purchaes</Button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
    </>
  )
}
// FIXME: HERE
export default Upgrade;
