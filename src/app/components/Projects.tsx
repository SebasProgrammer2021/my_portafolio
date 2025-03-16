import React from 'react'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <section className='flex flex-col items-center h-screen pt-24' id='projects'>
      <h2 className='text-2xl font-semibold mb-3'>Projects</h2>
      <ProjectItem />
    </section>
  )
}
