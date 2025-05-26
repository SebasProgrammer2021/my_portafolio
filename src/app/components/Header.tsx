'use client'
import React, { useEffect, useState } from 'react';
import Drawer from './Drawer';
import Navbar from './Navbar';
import { CiMenuKebab } from "react-icons/ci";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};


export const Header = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<"dark" | "light">("light"); // Default value

  useEffect(() => {
    if (typeof window !== 'undefined') { // Crucial check for browser environment
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
    <header className='flex justify-between items-center pt-10 fixed top-0 w-full' id='Header'>
      <a className="text-black text-3xl font-semibold dark:text-white lg:w-fit lg:text-nowrap" style={{ color: darkMode === "dark" ? "white" : "black" }} href='#home'>My portfolio</a>
      <div className='hidden lg:flex w-full lg:justify-around items-center'>
        <Navbar />
        <button className='text-black dark:text-white lg:flex lg:justify-self-end' onClick={changeThemeColor}>
          {darkMode === "dark" ? <RiMoonLine size={30} /> : <RiSunLine size={30} />}
        </button>
      </div>
      <div className='flex items-center gap-5 justify-end pr-8 '>
        <button className='text-black dark:text-white lg:hidden' onClick={changeThemeColor}>
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

