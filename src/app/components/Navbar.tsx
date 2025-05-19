import React from 'react'
import { navigation } from '../constants/navbar'
import Link from 'next/link'

interface INavbarProps {
  setOpen?: (open: boolean) => void;
}

const Navbar = ({ setOpen }: INavbarProps) => {
  return (
    <nav className="navbar lg:mb-20 lg:bg-white lg:w-full rounded-3xl">
      <ul className="navbarList flex flex-col gap-5 lg:gap-0 text-black items-center text-xl lg:flex-row lg:w-full lg:justify-center">
        {navigation.map((item) => (
          <li key={item.name} id="itemEnlace" className="navbarListItem flex items-center lg:hover:bg-gray-400">
            <Link href={item.href} className="navbarListItemLink lg:p-3" onClick={() => setOpen && setOpen(false)}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <select id="languageSelector">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select> */}
    </nav>
  )
}

export default Navbar;
