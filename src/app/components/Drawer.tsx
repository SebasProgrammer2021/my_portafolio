import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { IoCloseOutline } from "react-icons/io5";
import Navbar from './Navbar';
import { navigation } from '../constants/navbar';
import Link from 'next/link';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void
}

export default function Drawer({ open, setOpen }: Props) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-70 max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div id='close-button-container' className="absolute top-0 -left-3 -ml-8 flex pt-4 duration-500 ease-in-out data-closed:opacity-0 ">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden "
                  >
                    <IoCloseOutline size={30} color='white' />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-neutral-900 py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-2xl font-bold text-gray-900 mt-6 dark:text-white">Menu</DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <ul className="navbarList flex flex-col gap-5 lg:gap-0 text-black items-center text-xl lg:flex-row lg:w-full lg:justify-center">
                    {navigation.map((item) => (
                      <li key={item.name} id="itemEnlace" className="navbarListItem flex items-center lg:hover:bg-gray-400 hover:rounded-3xl text-black dark:text-white">
                        <Link href={item.href} className="navbarListItemLink lg:p-3 " onClick={() => setOpen && setOpen(false)}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}