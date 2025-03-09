import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SkillItem } from './SkillItem';

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
    }
  ];
  return (
    <section className='flex flex-col items-center h-screen pt-24'>
      <h2 className='text-2xl font-semibold mb-3'>Skills</h2>
      <div className='flex gap-5 flex-wrap justify-center'>
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