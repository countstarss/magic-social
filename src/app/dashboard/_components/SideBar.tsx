'use client'

import Logo from '@/components/Logo';
import React, { useState } from 'react'
import { WandSparkles,CreditCard,Book } from "lucide-react"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type Props = {
  children:React.ReactNode
}

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

const SideBar = ({ children }: Props) => {
  const path = usePathname();
  // const [selectedTab,setSelectedTab] = useState("Magic Tools")
  // const handleOnClick = (name:string) => {
  //   setSelectedTab(name)
  // }

  return (
    <div className='p-3 bg-slate-200 h-[94vh] flex flex-col rounded-lg my-7 ml-4 shadow-inner hover:translate-x-[1px] hover:-translate-y-[1px] duration-300'>
      {/* //MARK: Logo
       */}
      <div className='flex flex-col items-center'>
        <div className='scale-75 '>
          <Logo />
        </div>
      </div>

      <div className='flex flex-col justify-between h-[84vh]'>
        <div className=''>
          {menulist.map((menuItem) => (
            <Link 
              href={menuItem.path} 
              key={menuItem.name} 
              // onClick={() => handleOnClick(menuItem.name)}
            >
              <div className={
                // FIXME: 这里有一个更优雅的解决方案，那就是使用usePath，用path来赋予样式，而不是使用 name
                cn('flex p-2 py-3 my-4 flex-row gap-2 mb-1 bg-slate-100 hover:bg-slate-900 rounded-lg hover:text-white transition-colors  duration-300 ease-in-out',{
                    // "bg-slate-900 text-white shadow-md" : menuItem.name === selectedTab,
                    // "bg-slate-100 text-black": menuItem.name !== selectedTab
                    "bg-slate-900 text-white shadow-md" : menuItem.path === path,
                    "bg-white text-black": menuItem.path !== path
                })
            }>
                <menuItem.icon className='w-6 h-6'></menuItem.icon>
                <h1 className='text-lg'>{menuItem.name}</h1>
              </div>
            </Link>
          )
          )}
        </div>
        <div className='w-[full]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SideBar;