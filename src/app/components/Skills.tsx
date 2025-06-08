import React from 'react'
import { SkillItem } from './SkillItem';
import { skillsData } from '../constants/skillsIcons';

export const Skills = () => {
  
  return (
    <section className='flex flex-col items-center h-screen md:h-auto md:pb-50 pt-24 md:pt-36' id='skills'>
      <h2 className='text-2xl lg:text-4xl font-semibold mb-3 dark:text-white'>Skills</h2>
      <div className='grid grid-cols-3 gap-5 justify-items-center md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-7'>
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