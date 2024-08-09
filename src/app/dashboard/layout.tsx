'use client'
import React from 'react'
import SideBar from './_components/SideBar'
import Search from './_components/Search'

type Props = {
  children: React.ReactNode
}
/*
TODO: 决定了dashboard路由下的页面布局
MARK: dashboard页面布局
*/

const layout = ({ children }: Props) => {
  return (
    <div className='bg-white h-full'>
      {/* //MARK: SideBar动画
       */}
      <div 
        className='w-56 -translate-x-full lg:translate-x-0  fixed block transition-transform duration-500 ease-in-out'
        style={{
          translate: "translateX(-100px)",
        }}
      >
        <SideBar />

      </div>
      <div className='lg:ml-56 bg-white h-full'>
        {children}
      </div>
    </div>
  )
}

export default layout