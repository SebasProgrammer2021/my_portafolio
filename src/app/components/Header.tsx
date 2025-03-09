'use client'
import React, { useState } from 'react';
import Drawer from './Drawer';
import { CiMenuKebab } from "react-icons/ci";


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='flex justify-end'>
      <button className='p-4' onClick={() => setOpen(!open)}>
        <CiMenuKebab />
      </button>
      <Drawer open={open} setOpen={setOpen} />
    </header>
  )
}
