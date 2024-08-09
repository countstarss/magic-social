'use client'
import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import "react-quill/dist/quill.snow.css"

type Props = {
  value:string
}

const Editor = ({ value }: Props) => {
  const ReactQuill = useMemo(() => 
    dynamic(() => import('react-quill'), {ssr:false})
  ,[]);

  return (
    <ReactQuill className='h-[300px] pb-10 bg-slate-100 whitespace-pre-wrap' value={value}></ReactQuill>
  )
}

export default Editor;