"use client"

import React, { useEffect, useRef } from 'react'
import mePicture from '../../../public/me.webp';
import Image from "next/image";
import styles from './styles/home.module.css';
import { useTypingTextAnimation } from '../hooks/useTypingTextAnimation';

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
    <section className="welcome flex flex-col items-center h-full pt-3 pb-32">
      <div className='messageContainer flex gap-5 mt-28 h-10'>
        <p className="myRole mt-2 text-lg"></p>
        <div className={`text-2xl font-semibold uppercase text-center`} ref={wordRef}></div>
      </div>
      <h1 className="myName mt-8 text-xl font-bold text-center">Hi! , I'm Sebastián Valencia</h1>
      <Image
        className="w-auto h-auto rounded-full object-cover aspect-square mt-16"
        src={mePicture}
        alt="profile image"
        width={100}
        height={100}
        priority
      />
    </section>
  )
}
