import React from 'react'
import Search from './_components/Search';
import Template from './_components/Template';

type Props = {}
// MARK:Dashboard

const Dashboard = (props: Props) => {
  return (
    <div>
      <Search />
      <Template />
    </div>
  )
}

export default Dashboard;