import React from 'react'
import { MdCloudDownload } from "react-icons/md";
import Link from 'next/link'

export const Aboutme = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="aboutMeTitle mb-3 text-xl font-semibold">About me</h2>
      <div className="aboutMeContenteContainer">
        <div className="aboutMeProfileImageContainer">

        </div>
        <p className="aboutMeProfileDescription">
          <span className="aboutMeProfileDescription__quote">
            "You don't have to be great to start, but you have to start to be
            great" - Zig Ziglar
          </span>
          <span className="aboutMe_mainDescription">
            Inspired by this quote, I completed my degree in Systems Engineering
            at the University of Quindio. To strengthen my academic training, I
            also obtained a Technician in Software Development from SENA. I am
            proficient in React⚛️ and other front-end technologies such as HTML
            5, CSS 3, JavaScript, TypeScript, and Tailwind CSS. I also have
            experience with MySql, Docker, Next JS, Postman, Linux, Git, Github,
            Gitlab, Scrum, Kanban, task management tools, teamwork, excellent
            communication skills, and a strong focus on results.
          </span>
          <Link className="getCvLink mt-6 flex gap-3 justify-self-center items-center rounded-full border border-white p-3" href="https://www.canva.com/design/DAFHqHRsvnc/2UxPP4G5oDsF1qzJt3L_MA/edit?utm_content=DAFHqHRsvnc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
            <MdCloudDownload />
            Download cv
          </Link>
        </p>
      </div>
    </section>
  )
}
