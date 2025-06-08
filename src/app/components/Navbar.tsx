'use client';

import React from 'react'
import { navigation } from '../constants/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface INavbarProps {
  setOpen?: (open: boolean) => void;
}

const Navbar = ({ setOpen }: INavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="navbar dark:bg-neutral-900 lg:w-fit rounded-3xl">
      <ul className="navbarList flex flex-col gap-5 lg:gap-0 text-black items-center text-xl lg:flex-row lg:w-full lg:justify-center">
        {pathname.includes("contact") ? (
          <li key={"Home"} id="Home" className="navbarListItem flex items-center hover:bg-gray-300 dark:hover:text-black hover:rounded-3xl text-black dark:text-white font-semibold">
            <Link href={"/"} className="navbarListItemLink lg:p-3 " onClick={() => setOpen && setOpen(false)}>Home</Link>
          </li>
        ) : (
          navigation.map((item) => (
            <li key={item.name} id={item.name} className="navbarListItem flex items-center hover:bg-gray-300 dark:hover:text-black hover:rounded-3xl text-black dark:text-white font-semibold">
              <Link href={item.href} className="navbarListItemLink lg:p-3 " onClick={() => setOpen && setOpen(false)}>{item.name}</Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  )
}

export default Navbar;
