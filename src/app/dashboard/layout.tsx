import React from 'react'
import SideBar from './_components/SideBar'
import Search from './_components/Search'
import { AIUsage } from '../../components/ai-usage'

type Props = {
  children: React.ReactNode
}
/*
TODO: 决定了dashboard路由下的页面布局
MARK: dashboard页面布局
*/

const layout = ({ children }: Props) => {
  return (
    <>
      {/* //TODO: `h-fit`的作用是当高度产生变化，也能及时适应，填充背景颜色 */}
      <div className='bg-slate-700 h-fit'>
        {/* //MARK: SideBar动画
        */}
        <div 
          className='w-56 -translate-x-full lg:translate-x-0  fixed block transition-transform duration-500 ease-in-out'
          style={{
            translate: "translateX(-100px)",
          }}
        >
          <SideBar>
            <AIUsage />
          </SideBar>

        </div>
        {/* //TODO: 控制整个右半部分背景
        */}
        <div className='lg:ml-56 bg-slate-700 h-fit'>
          {children}
        </div>
      </div>
      {/* <div className='-z-50 w-full h-full fixed top-0 left-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'></div> */}
    </>
  )
}

export default layout