import React from 'react'
import mePicture from '../../../public/me.webp';
import Image from "next/image";

export const Welcome = () => {
  return (
    <section className="welcome flex flex-col items-center h-screen" id="welcome">
      <h2 className="welcomeTitle text-xl font-semibold mb-3.5">Hey welcome to my world</h2>
      <Image
        className="w-50 h-80"
        src={mePicture}
        alt="profile image"
        loading="lazy"
        width={100}
        height={100}
      />
      <h1 className="myName mt-10 text-xl font-bold">I am Sebastián Londoño Valencia</h1>
      <p className="myRole mt-2 text-lg">Software Frontend Developer</p>
    </section>
  )
}
