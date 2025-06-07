'use client'

import React, { useEffect, useState } from 'react';
import Drawer from './Drawer';
import Navbar from './Navbar';
import { CiMenuKebab } from "react-icons/ci";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import Link from 'next/link';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode === "dark") {
      htmlElement?.classList.add("dark");
    } else {
      htmlElement?.classList.remove("dark");
    }
  }, [darkMode]);

  const changeThemeColor = () => {
    setDarkMode(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <header className='flex justify-between lg:justify-around items-center pt-10 fixed top-0 z-[1] w-full' id='Header'>
      <Link className="text-black text-3xl font-semibold dark:text-white lg:w-fit lg:text-nowrap"
        style={{ color: darkMode === "dark" ? "white" : "black" }} href='/'>
        My portfolio
      </Link>
      <div className='flex items-center gap-5 justify-self-end lg:justify-evenly lg:w-full pr-8 md:pr-20'>
        <div className='hidden lg:flex lg:w-fit lg:justify-self-center'>
          <Navbar />
        </div>
        <button className='text-black dark:text-white cursor-pointer' onClick={changeThemeColor}>
          {darkMode === "dark" ? <RiMoonLine size={30} /> : <RiSunLine size={30} />}
        </button>
        <button className='flex lg:hidden text-black dark:text-white' onClick={() => setOpen(!open)}>
          <CiMenuKebab size={30} className='text-black dark:text-white' />
        </button>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </header>
  )
}

