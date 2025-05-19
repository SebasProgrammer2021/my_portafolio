import React from 'react'
import Image from 'next/image';
import projectStyles from './styles/projectItem.module.css';
import { IProjectItem } from '../types';

export const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <div className={`${projectStyles.projectItem} rounded-xl p-5 bg-[#191b1f] hover:bg-black hover:border hover:border-gray-700 grid gap-3 place-items-center`}>
      <div className='relative group'>
        <Image className='w-40 h-50 rounded-xl object-cover object-center' src={project.image} alt="project image" width={100} height={100} />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
          <a href={project.websiteLink} target='_blank' className="text-white text-lg font-semibold border border-white px-4 py-2 rounded-4xl hover:cursor-pointer">
            Ver sitio web
          </a>
        </div>
      </div>
      <section className={`${projectStyles.projectInfo} p-4 bg-[#25272a] rounded-lg`}>
        <h4 className="projectInfoTitle text-lg font-semibold w-auto">{project.title}</h4>
        <p className="description mt-4">
          {project.description}
        </p>
        <div className='mt-2'>
          <span className='font-semibold'>Tipo: </span>
          <span>{project.type}</span>
        </div>
        <div className="technologiesContainer">
          <span className='font-semibold'>Tecnologias: </span>
          <div className='flex gap-2 items-center'>
            {project.technologies.map((technology) => (
              <React.Fragment key={technology.name}>
                {React.createElement(technology.icon, { size: 30, color: technology.color })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

