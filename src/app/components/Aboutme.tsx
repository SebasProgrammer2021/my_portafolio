import React from 'react'
import { MdCloudDownload } from "react-icons/md";
import Link from 'next/link'

export const Aboutme = () => {
  return (
    <section className="aboutMe pt-20 md:pt-36 lg:pb-20 text-center" id="aboutMe">
      <h2 className="aboutMeTitle mb-3 text-2xl lg:text-4xl font-semibold dark:text-white">About me</h2>
      <div className="aboutMeContenteContainer">
        <div className="aboutMeProfileDescription text-lg">
          <span className="aboutMeProfileDescription__quote mb-8 block dark:text-white">
            &quot;You don&apos;t have to be great to start, but you have to start to be
            great&quot; - Zig Ziglar
          </span>
          <p className="md:text-xl dark:text-white">
            Inspired by this quote, I completed my degree in Systems Engineering
            at the University of Quindio. To strengthen my academic training, I
            also obtained a Technician in Software Development from SENA. I am
            proficient in React⚛️ and other front-end technologies such as HTML
            5, CSS 3, JavaScript, TypeScript, and Tailwind CSS. I also have
            experience with MySql, Docker, Next JS, Postman, Linux, Git, Github,
            Gitlab, Scrum, Kanban, task management tools, teamwork, excellent
            communication skills, and a strong focus on results.
          </p>
          <Link className="getCvLink mt-6 flex gap-3 justify-self-center items-center rounded-full border dark:border-white p-3 md:w-fit"
            href="https://app.enhancv.com/share/40a22736/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            target="_blank"
          >
            <span className='dark:text-white m-0 flex items-center gap-3'>
              <MdCloudDownload />
              Download cv
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
