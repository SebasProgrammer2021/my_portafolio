import Link from 'next/link';
import React from 'react'
import { contactData } from './data';

const ContactPage = () => {
  return (
    <div className='p-6 flex flex-col gap-10 mt-2'>
      {contactData.map((contact) => (
        <Link key={contact.name} href={contact.link}>
          <div className='flex flex-col gap-6 items-center border rounded-xl border-white p-6'>
            <picture>
              {contact.icon}
            </picture>
            <span className='text-xl text-center font-bold'>
              {contact.username}
            </span>
            <span className='text-lg text-center'>
              {contact.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ContactPage;
