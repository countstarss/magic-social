'use client'

import Logo from '@/components/Logo';
import React, { useState } from 'react'
import { WandSparkles,CreditCard,Book } from "lucide-react"
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {}

const menulist = [
  {
    name:'Magic Tools',
    icon:WandSparkles,
    path:"/dashboard"
  },
  {
    name:'Output History',
    icon:Book,
    path:"/dashboard/history"
  },
  {
    name:'Upgrade',
    icon:CreditCard,
    path:"/dashboard/upgrade"
  },
]

const SideBar = (props: Props) => {
  const [selectedTab,setSelectedTab] = useState("Magic Tools")
  const handleOnClick = (name:string) => {
    setSelectedTab(name)
  }

  return (
    <div className='z-50 p-3 bg-slate-200 h-[94vh] flex flex-col rounded-3xl my-7 ml-4 shadow-inner hover:translate-x-[1px] hover:-translate-y-[1px] duration-300'>
      {/* //MARK: Logo
       */}
      <div className='flex flex-col items-center'>
        <div className='scale-75 '>
          <Logo />
        </div>
      </div>

      <div className=''>
        {menulist.map((menuItem) => (
          <Link href={menuItem.path} key={menuItem.name} onClick={() => handleOnClick(menuItem.name)}>
            <div className={
              // FIXME: 这里有一个更优雅的解决方案，那就是使用usePath，用path来赋予样式，而不是使用 name
              cn('flex p-2 py-3 my-4 flex-row gap-2 mb-1 bg-white hover:bg-slate-900 rounded-lg hover:text-white transition-colors  duration-300 ease-in-out',{
                  "bg-slate-900 text-white shadow-md" : menuItem.name === selectedTab,
                  "bg-white text-black": menuItem.name !== selectedTab
              })
          }>
              <menuItem.icon className='w-6 h-6'></menuItem.icon>
              <h1 className='text-lg'>{menuItem.name}</h1>
            </div>
          </Link>
        )
        )}
      </div>
    </div>
  )
}

export default SideBar;