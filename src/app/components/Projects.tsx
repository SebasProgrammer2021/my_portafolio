import React from 'react'
import { ProjectItem } from './ProjectItem'
import { projectData } from '../constants/projectsData'
import { IProjectItem } from '../types'

export const Projects = () => {
  return (
    <section className='flex flex-col items-center  pt-24 md:pt-36' id='projects'>
      <h2 className='text-2xl lg:text-4xl font-semibold mb-3 lg:mb-16 text-black dark:text-white'>Projects</h2>
      <div className='flex flex-col gap-8 pb-20 lg:grid lg:grid-cols-3'>
        {projectData.map((project: IProjectItem) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
