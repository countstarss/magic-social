import { UserButton } from '@clerk/nextjs';
import { SearchIcon } from 'lucide-react';
import React from 'react'
import Category from './Category';

export const categories = [
  {
    categoryName:"All",
    value:"All"
  },
  {
    categoryName:"Media",
    value:"Media"
  },
  {
    categoryName:"Work",
    value:"Work"
  },
];

type Props = {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>,
  onSelecteCategory: React.Dispatch<React.SetStateAction<string>>,
}

const Search = ({ onSearchInput, onSelecteCategory } : Props) => {


  return (
    <>
      <div className='mx-5 p-2'>
      <div className='flex flex-row md:flex-row gap-2 mt-5 py-6 px-4 bg-slate-200 rounded-xl  justify-between min-w-[400px] '>
        <div className='flex gap-2 items-center  w-4/5 lg:w-2/3 '>
          <div className='flex gap-2 items-center p-2 border rounded-full bg-slate-100'>
            <SearchIcon />
            <input
              type="text"
              placeholder='search...'
              className='bg-transparent outline-none text-black w-full shadow-inner-2xl'
              // TODO: 同步输入的最新内容
              onChange={(e) => onSearchInput(e.target.value)}
            />
          </div>
          <Category items={categories} onSelecteCategory={onSelecteCategory}/>
        </div>

        <div className='flex gap-2 items-center p-2 scale-150'>
          <UserButton />
        </div>

      </div>

    </div>
    </>
  )
}

export default Search;