import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <div className='flex flex-col items-center text-center pt-[25vh] scale-125'>
        <SignIn />
      </div>
    </div>
  )
}

export default page