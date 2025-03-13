import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SkillItem } from './SkillItem';
import { SiGit } from "react-icons/si";
import { SiVtex } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiGitlab } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiFigma } from "react-icons/si";


export const Skills = () => {
  const skillsData = [
    {
      id: 1,
      icon: <SiReact size={50} color='#61DAFB' />,
      name: 'React'
    },
    {
      id: 2,
      icon: <FaHtml5 size={50} color='#E34F26' />,
      name: 'HTML'
    },
    {
      id: 3,
      icon: <DiCss3 size={50} color='#1572B6' />,
      name: 'CSS'
    },
    {
      id: 4,
      icon: <SiJavascript size={50} color='#F7DC6F' />,
      name: 'JavaScript'
    },
    {
      id: 5,
      icon: <SiTypescript size={50} color='#3178C6' />,
      name: 'TypeScript'
    },
    {
      id: 6,
      icon: <SiGit size={50} color='#E34F26' />,
      name: 'Git'
    },
    {
      id: 7,
      icon: <SiVtex size={50} color='#FFC107' />,
      name: 'Vtex'
    },
    {
      id: 8,
      icon: <SiTailwindcss size={50} color='#38B2AC' />,
      name: 'Tailwind'
    },
    {
      id: 9,
      icon: <SiGraphql size={50} color='#E10098' />,
      name: 'GraphQL'
    },
    {
      id: 10,
      icon: <SiGitlab size={50} color='#E24329' />,
      name: 'Gitlab'
    },
    {
      id: 11,
      icon: <SiGithub size={50} color='#181717' />,
      name: 'Github'
    },
    {
      id: 12,
      icon: <SiSass size={50} color='#C69' />,
      name: 'Sass'
    },
    {
      id: 13,
      icon: <SiFigma size={50} color='#F24E1E' />,
      name: 'Figma'
    },

  ];

  return (
    <section className='flex flex-col items-center h-screen pt-24' id='skills'>
      <h2 className='text-2xl font-semibold mb-3'>Skills</h2>
      <div className='grid grid-cols-3 gap-5 justify-items-center'>
        {
          skillsData.map((skill) => (
            <SkillItem
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
            />
          ))
        }
      </div>
    </section>
  )
}