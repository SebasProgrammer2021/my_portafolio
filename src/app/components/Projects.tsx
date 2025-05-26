import React from 'react'
import { ProjectItem } from './ProjectItem'
import { projectData } from '../constants/projectsData'
import { IProjectItem } from '../types'

export const Projects = () => {
  return (
    <section className='flex flex-col items-center h-screen pt-24 lg:pt-14' id='projects'>
      <h2 className='text-2xl font-semibold mb-3 lg:text-4xl lg:mb-16 dark:text-white'>Projects</h2>
      <div className='flex flex-col gap-8 pb-20 lg:grid lg:grid-cols-3'>
        {projectData.map((project: IProjectItem) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
