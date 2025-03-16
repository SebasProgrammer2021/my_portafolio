import React from 'react'
import { SkillItem } from './SkillItem';
import { skillsData } from '../constants/skillsIcons';

export const Skills = () => {

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