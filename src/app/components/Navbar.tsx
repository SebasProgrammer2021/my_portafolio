import React, { useEffect, useState } from 'react'
import { navigation } from '../constants/navbar'
import Link from 'next/link'
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

interface INavbarProps {
  setOpen?: (open: boolean) => void;
}

const Navbar = ({ setOpen }: INavbarProps) => {
  // const [darkMode, setDarkMode] = useState(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     return "dark";
  //   }

  //   return "light";
  // });

  // useEffect(() => {
  //   if (darkMode === "dark") {
  //     document.querySelector("html")?.classList.add("dark");
  //   } else {
  //     document.querySelector("html")?.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // const changeThemeColor = () => {
  //   setDarkMode(prevTheme => prevTheme === "dark" ? "light" : "dark");
  // }

  return (
    <nav className="navbar lg:mb-20 lg:bg-white lg:w-full rounded-3xl">
      <ul className="navbarList flex flex-col gap-5 lg:gap-0 text-black items-center text-xl lg:flex-row lg:w-full lg:justify-center">
        {navigation.map((item) => (
          <li key={item.name} id="itemEnlace" className="navbarListItem flex items-center lg:hover:bg-gray-400 dark:text-white">
            <Link href={item.href} className="navbarListItemLink lg:p-3" onClick={() => setOpen && setOpen(false)}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <button className='p-4' onClick={changeThemeColor}>
        {darkMode === "dark" ? <RiMoonLine size={30} /> : <RiSunLine size={30} />}
      </button> */}
      {/* <select id="languageSelector">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select> */}
    </nav>
  )
}

export default Navbar;
