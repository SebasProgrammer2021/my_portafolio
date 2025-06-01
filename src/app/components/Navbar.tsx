import React from 'react'
import { navigation } from '../constants/navbar'
import Link from 'next/link'

interface INavbarProps {
  setOpen?: (open: boolean) => void;
}

const Navbar = ({ setOpen }: INavbarProps) => {
  return (
    <nav className="navbar dark:bg-neutral-900 lg:w-fit rounded-3xl">
      <ul className="navbarList flex flex-col gap-5 lg:gap-0 text-black items-center text-xl lg:flex-row lg:w-full lg:justify-center">
        {navigation.map((item) => (
          <li key={item.name} id="itemEnlace" className="navbarListItem flex items-center lg:hover:bg-gray-300 hover:rounded-3xl text-black dark:text-white font-semibold">
            <Link href={item.href} className="navbarListItemLink lg:p-3 " onClick={() => setOpen && setOpen(false)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
