import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <>
      <div className='flex flex-col px-3 py-4'>
        <div className='flex flex-col items-center'>
        <svg id="logo-40" width="60" height="35"  fill="none" xmlns="http://www.w3.org/2000/svg" className='items-center'>
          <path d="M0 16C0 7.16344 7.16344 0 16 0H37C45.8366 0 53 7.16344 53 16V32H16C7.16344 32 0 24.8366 0 16Z" fill="#4845D2" className="ccustom items-center">
          </path> 
          <rect x="6" y="6" width="41" height="20" rx="10" fill="#A5B4FC" className="ccompli2"></rect> 
          <circle cx="16" cy="16" r="5" fill="#000000"></circle>
          <circle cx="14" cy="14" r="1" fill="#ffffff"></circle>
          <circle cx="38" cy="16" r="5" fill="#000000"></circle>
          <circle cx="36" cy="14" r="1" fill="#ffffff"></circle> 
        </svg>
        </div>
        <h1 className="text-xl font-bold text-black">Insight Lab</h1>
      </div>
    </>
  )
}

export default Logo;