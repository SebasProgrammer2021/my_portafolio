'use client'
import React, { useState } from 'react';
import Drawer from './Drawer';
import { CiMenuKebab } from "react-icons/ci";
import Navbar from './Navbar';


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='flex justify-between items-center pt-10 lg:pt-0 lg:flex-col' id='home'>
      <div className='hidden lg:flex w-full'>
        <Navbar />
      </div>
      <a className="welcomeTitle text-3xl font-semibold pl-4 lg:hidden" href='#home'>My portfolio</a>
      <button className='p-4 fixed right-0 lg:hidden' onClick={() => setOpen(!open)}>
        <CiMenuKebab size={30} />
      </button>
      <Drawer open={open} setOpen={setOpen} />
    </header>
  )
}
