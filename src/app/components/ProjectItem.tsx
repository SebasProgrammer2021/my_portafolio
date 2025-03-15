import React from 'react'
import proojectStyles from './styles/projectItem.module.css';
import Image from 'next/image';

export const ProjectItem = () => {
  return (
    <div className={`rounded-xl p-5 bg-[#191b1f] grid gap-3 place-items-center`}>
      <Image className='w-40 h-40 rounded-xl object-cover object-center' src="/ptll_ppal_app_mhwebp.webp" alt="project image" width={100} height={100} />
      <section className="projectInfo p-4 bg-[#25272a]">
        <h4 className="projectInfoTitle size-5 font-semibold w-auto">App Mario Hernandez</h4>
        <p className="description">
          
        </p>
      </section>
    </div>
  )
}
