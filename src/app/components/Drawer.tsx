import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import Link from 'next/link';
import { IoCloseOutline } from "react-icons/io5";

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
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-70 max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div id='close-button-container' className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <IoCloseOutline />
                    {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold text-gray-900 mt-6">Menu</DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <nav className="navbar">
                    <ul className="navbarList flex flex-col gap-5 text-black items-center">
                      <li id="itemEnlace" className="navbarListItem">
                        <Link href="#home" className="navbarListItemLink" id="home">Home</Link>
                      </li>
                      <li id="itemEnlace" className="navbarListItem">
                        <Link href="#aboutMe" className="navbarListItemLink" id="aboutMe">About me</Link>
                      </li>
                      <li id="itemEnlace" className="navbarListItem">
                        <Link href="#skills" className="navbarListItemLink" id="skills">Skills</Link>
                      </li>
                      <li id="itemEnlace" className="navbarListItem">
                        <Link href="#projects" className="navbarListItemLink" id="projects">Projects</Link>
                      </li>
                      <li id="itemEnlace" className="navbarListItem">
                        <Link href="contact" className="navbarListItemLink" id="contact">Contact</Link>
                      </li>
                    </ul>
                    {/* <select id="languageSelector">
                      <option value="es">Español</option>
                      <option value="en">English</option>
                    </select> */}
                  </nav>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}