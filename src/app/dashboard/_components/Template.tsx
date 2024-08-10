'use client'
import React,{ useEffect,useState } from 'react'
import { contentTemplates } from '@/lib/contentTemplate'
import { categories } from './Search'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  searchInput:string,
  selectedCategory:string
}

const Template = ({ searchInput,selectedCategory }: Props) => {
  // TODO: 这里过滤最后呈现的数据
  const [templateList,setTemplateList] = useState(contentTemplates);


  /*
  TODO: 搜索框
  MARK: 搜索框
  */
  useEffect(() => {
    if(searchInput && searchInput.length > 2) {
      
      const filteredTemplates = contentTemplates.filter((item) => 
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  },[searchInput])

  /*
  TODO: 标签搜索
  MARK: 标签搜索
  */
  useEffect(() => {
    if(selectedCategory) {
      
      const filteredTemplates = contentTemplates.filter((item) => 
        item.category.toLowerCase().replace(/[, ]+/,"").includes(selectedCategory.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  },[selectedCategory])

  return (
    <div className={
      cn('grid lg:grid-cols-4 md:grid-cols-3  mx-7 p-2 px-6 my-6 py-6 bg-slate-200 rounded h-[80vh] gap-16 overflow-scroll shadow-inner-full',{
        "md:grid-rows-3" :contentTemplates.length < 9,
      })
    }>
      {templateList.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-slate-100 w-full rounded-lg h-[200px] py-6 px-4 text-center flex flex-col justify-center"
          >
            <template.icon className="h-12 w-12 mx-auto text-slate-950"></template.icon>
            <h2 className="font-semibold mt-5 text-slate-950">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Template;