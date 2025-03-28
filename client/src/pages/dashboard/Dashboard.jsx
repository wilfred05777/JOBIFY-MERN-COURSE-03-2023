import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../../components'

const Dashboard = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />  
          </div>  
        </div>
      </main>
      {/* <h2>Dashboard</h2> */}
    </Wrapper>
  )
}

export default Dashboard
