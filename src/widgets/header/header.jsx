import React from 'react'
import { useLocation } from 'react-router'

import { FaRegBell } from "react-icons/fa";
import { Avatar } from '@mantine/core';


export const Header = () => {

  const {pathname} = useLocation()

  return (
    <div className='fixed top-0 h-16 bg-white shadow w-[calc(100%-256px)] z-10'>
      
      <div className="flex justify-between px-6 items-center h-full">
        
        <div className='font-semibold'>
          Waka Flocka
        </div>

        <div className='flex gap-4 items-center'> 

          <span className='font-semibold'>
            1 010 000 ₸
          </span>

          <FaRegBell size={20}/>
          <Avatar variant='filled' className='ml-4'/>
        </div>
      </div>

    </div>
  )
}
