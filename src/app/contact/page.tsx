import Link from 'next/link';
import React from 'react'
import { contactData } from './data';

const ContactPage = () => {
  return (
    <div className='p-6 flex flex-col md:flex-row gap-10 mt-2 md:items-center md:justify-center h-screen'>
      {contactData.map((contact) => (
        <Link key={contact.name} href={contact.link}>
          <div className='flex flex-col gap-6 items-center border rounded-xl border-gray-400 p-6 md:py-24 md:max-w-64 md:max-h-96 lg:max-w-full'>
            <picture className='border border-gray-400 p-5 rounded-full text-black dark:text-white'>
              {contact.icon}
            </picture>
            <span className='text-xl text-center font-bold md:mt-5 md:px-4 text-black dark:text-white'>
              {contact.username}
            </span>
            <span className='text-lg text-center text-black dark:text-white'>
              {contact.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ContactPage;