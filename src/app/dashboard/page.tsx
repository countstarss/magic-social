'use client'
import React, { useState } from 'react'
import Search from './_components/Search';
import Template from './_components/Template';

type Props = {}
// MARK:Dashboard

const Dashboard = (props: Props) => {

  const [searchInput,setSearchInput] = useState('');
  const [selectedCategory,setSelectedCategory] = useState("All");

  return (
    // MARK: BG RIGHT
    <div className='bg-slate-100 h-screen'>
      <Search onSearchInput={setSearchInput} onSelecteCategory={setSelectedCategory}/>
      <Template searchInput={searchInput as string} selectedCategory={selectedCategory as string}/>
    </div>
  )
}

export default Dashboard;