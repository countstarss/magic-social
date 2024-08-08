import { UserButton } from '@clerk/nextjs';
import { SearchIcon } from 'lucide-react';
import React from 'react'

type Props = {}

const Search = (props: Props) => {

  

  return (
    <div className='mx-5 p-2'>
      <div className='flex flex-row md:flex-row gap-2 mt-5 py-6 px-4 bg-slate-200 rounded-xl  justify-between min-w-[400px] '>
        <div className='flex gap-2 items-center p-2 border rounded-full w-2/3 lg:w-1/3 bg-white'>
          <SearchIcon />
          <input 
            type="text" 
            placeholder='search...'
            className='bg-transparent outline-none text-black w-full'
          />
        </div>

        <div className='flex gap-2 items-center p-2 scale-150'>
          <UserButton />
        </div>

      </div>

    </div>
  )
}

export default Search;