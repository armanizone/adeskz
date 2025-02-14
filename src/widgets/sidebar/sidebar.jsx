import React from 'react'

import { MdDashboard } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { TbBuildingFactory } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";

import { RiCheckboxBlankFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router';
import clsx from 'clsx';

const array = [
  {
    path: '/dashboard',
    name: 'Рабочий стол',
    icon: <MdDashboard size={20} />
  },
  {
    path: '/transactions',
    name: 'Транзакции',
    icon: <TbArrowsRightLeft size={20} />
  },
  {
    path: '/projects',
    name: 'Проекты',
    icon: <TbBuildingFactory size={20} />
  },
  {
    path: '/partners',
    name: 'Партнеры',
    icon: <IoPeople size={20} />
  },
]

export const Sidebar = () => {

  const {pathname} = useLocation()

  return (
    <div className='h-full bg-slate-900 fixed left-0 top-0 w-64'>
      <div className="flex flex-col">

        <div className='flex gap-2 items-center px-4 mt-4'>
          <RiCheckboxBlankFill color='green' size={35}/>
          <div className=''>
            <p className='text-white font-semibold'>Waka flocka</p>
            <p className='text-xs text-slate-300'>Adesk.kz</p>
          </div>
        </div>

        <div className='flex flex-col mt-6'>          
          {array.map((item, index) => ( 
            <div key={index} className={clsx("px-4 py-3 rounded-md hover:bg-slate-700 hover:text-white cursor-pointer group", {
              'bg-slate-800 text-white': pathname === item.path
            })}>
              <Link
                to={item.path}
                className={clsx("text-slate-300 group-hover:text-white", {
                  'text-white': pathname === item.path
                })}
              >
                <div className='flex gap-3 items-center'>
                  {item.icon} 
                  <span className='text-sm font-bold'>
                    {item.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
