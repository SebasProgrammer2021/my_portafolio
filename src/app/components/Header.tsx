'use client'
import React, { useState } from 'react';
import Drawer from './Drawer';
import { CiMenuKebab } from "react-icons/ci";


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='flex justify-between items-center mt-12' id='home'>
      <a className="welcomeTitle text-3xl font-semibold pl-4" href='#home'>My portfolio</a>
      <button className='p-4' onClick={() => setOpen(!open)}>
        <CiMenuKebab size={30} />
      </button>
      <Drawer open={open} setOpen={setOpen} />
    </header>
  )
}
