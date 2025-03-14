"use client"

import React, { useEffect, useRef } from 'react'
import mePicture from '../../../public/me.webp';
import Image from "next/image";
import styles from './styles/aboutme.module.css';
import { useTypingTextAnimation } from '../hooks/useTypingTextAnimation';

export const Welcome = () => {
  const wordRef = useRef<HTMLDivElement>(null);
  const words = [
    'Frontend developer',
    'System and computing engineer',
    'VTEX frontend developer',
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
    <section className="welcome flex flex-col items-center h-screen pt-3">
      <Image
        className="w-60 h-90 rounded-xl"
        src={mePicture}
        alt="profile image"
        loading="lazy"
        width={100}
        height={100}
      />
      <h1 className="myName mt-10 text-xl font-bold text-center">Hi! , I'm Sebastián Valencia</h1>
      <div className='messageContainer flex gap-5'>
        <p className="myRole mt-2 text-lg"></p>
        <div className={styles.word} ref={wordRef}></div>
      </div>
    </section>
  )
}
