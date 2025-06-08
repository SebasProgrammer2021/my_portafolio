"use client"

import React, { useEffect, useRef } from 'react'
import mePicture from '../../../public/me.webp';
import Image from "next/image";
import { useTypingTextAnimation } from '../hooks/useTypingTextAnimation';
import Link from 'next/link';
import { SiLinkedin } from 'react-icons/si';

export const Welcome = () => {
  const wordRef = useRef<HTMLDivElement>(null);
  const words = [
    'React Frontend developer',
    'System and computing engineer',
    'VTEX frontend developer',
    'Frontend Mentor'
  ];
  const speed = 40;
  const skipDelay = 15;
  const part = useTypingTextAnimation(words, speed, skipDelay);

  useEffect(() => {
    if (wordRef.current) {
      wordRef.current.textContent = part;
    }
  }, [part]);

  return (
    <section className="welcome flex flex-col lg:flex-row items-center lg:justify-center h-full pt-3 lg:pt-32 pb-32 lg:w-full lg:gap-10">
      <div className='flex flex-col lg:gap-8 lg:justify-between lg:w-3/6 lg:flex-col-reverse'>
        <Link href='https://www.linkedin.com/in/sebasti%C3%A1n-londo%C3%B1o-valencia/' target='_blank' className='hidden lg:flex mt-20 border border-black dark:border-white p-5 rounded-2xl
         w-fit text-black text-xl dark:text-white gap-4 items-center'
        >
          <span className='dark:text-white'>
            Contact with me
          </span>
          <SiLinkedin size={25} className='text-black dark:text-white' />
        </Link>
        <div className='messageContainer flex gap-5 mt-28 h-10 lg:mt-5'>
          <div className={`text-2xl lg:text-4xl font-semibold uppercase text-center lg:text-left md:w-full dark:text-white`} ref={wordRef}></div>
        </div>
        <h1 className="myName mt-8 text-xl lg:text-5xl font-bold text-center lg:text-left dark:text-white">
          Hi! , I'm Sebastián Valencia
        </h1>
      </div>
      <Image
        className="w-1/2 h-auto rounded-full object-cover aspect-square mt-16 lg:mt-0 lg:rounded-xl lg:h-full lg:w-1/4"
        src={mePicture}
        alt="profile image"
        width={100}
        height={100}
        priority
      />
    </section>
  )
}
