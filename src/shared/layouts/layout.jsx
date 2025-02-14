import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = ({sidebarslot, headerSlot, footerSlot }) => {
  
  return (
    <div className='flex relative'>
      {sidebarslot}
      <div className='min-h-screen bg-slate-50 relative ml-64 w-full'>
        {headerSlot}
          <div className='w-[calc(100vw-256px)] z-50 mt-16 p-6'>
            <Outlet/>
          </div>
        {footerSlot}
      </div>
    </div>
  )
}
