'use client'
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

export interface CategoryProps {
  categoryName:string;
  value:string;
}


type Props = {
  items:CategoryProps[],
  onSelecteCategory:React.Dispatch<React.SetStateAction<string>>
}

const Category = ({ items,onSelecteCategory }: Props) => {
  const [selectedCategory,setSelectedCategory] = useState("All")
  const handleOnClick = (categoryName:string) => {
    setSelectedCategory(categoryName)
  }
  return (
    <div className='flex gap-2'>
      {
        items.map((item,index) => (
          <div
            key={`${item.categoryName}-${index}`}
            className={
              cn('flex gap-2 items-center p-2 px-3 border rounded w-2/3 lg:w-1/3 bg-slate-100 cursor-pointer transition-colors duration-500',{
                "bg-slate-900 text-white": item.categoryName === selectedCategory,
                "bg-white text-black": item.categoryName !== selectedCategory,
              })
            }
            onClick={() => {
              onSelecteCategory(item.categoryName);
              handleOnClick(item.categoryName);
            }}
          >
          <p>{item.categoryName}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Category;

