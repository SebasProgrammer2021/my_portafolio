import React from 'react'
import Image from 'next/image';
import projectStyles from './styles/projectItem.module.css';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { SiVtex } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const ProjectItem = () => {
  const projectData = {
    id: 1,
    image: "/ptll_ppal_app_mhwebp.webp",
    title: "App Mario Hernandez",
    description: "Esta es una aplicación híbrida que utiliza una base desarrollada con React Native. Embebe un sitio completo construido en VTEX, junto con componentes personalizados en React.js, facilitando la compra de una variedad de productos de la marca.",
    type: "Ecommerce",
    websiteLink: "https://play.google.com/store/apps/details?id=com.shopmh",
    technologies: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
      { name: "VTEX", icon: SiVtex, color: "#e31c58" },
      { name: "TypeScript", icon: BiLogoTypescript, color: "#007acc" },
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
    ],
  };

  return (
    <div className={`${projectStyles.projectItem} rounded-xl p-5 bg-[#191b1f] hover:bg-black hover:border hover:border-gray-700 grid gap-3 place-items-center`}>
      <div className='relative group'>
        <Image className='w-40 h-50 rounded-xl object-cover object-center' src={projectData.image} alt="project image" width={100} height={100} />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl">
          <a href={projectData.websiteLink} className="text-white text-lg font-semibold border border-white px-4 py-2 rounded-4xl hover:cursor-pointer">Ver sitio web</a>
        </div>
      </div>
      <section className={`${projectStyles.projectInfo} p-4 bg-[#25272a] rounded-lg`}>
        <h4 className="projectInfoTitle text-lg font-semibold w-auto">{projectData.title}</h4>
        <p className="description mt-4">
          {projectData.description}
        </p>
        <div className='mt-2'>
          <span className='font-semibold'>Tipo: </span>
          <span>{projectData.type}</span>
        </div>
        <div className="technologiesContainer">
          <span className='font-semibold'>Tecnologias: </span>
          <div className='flex gap-2 items-center'>
            {projectData.technologies.map((technology) => (
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

