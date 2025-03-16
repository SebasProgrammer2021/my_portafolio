import React from 'react'
import Image from 'next/image';

export const ProjectItem = () => {
  return (
    <div className={`rounded-xl p-5 bg-[#191b1f] hover:bg-black hover:border hover:border-gray-700 grid gap-3 place-items-center`}>
      <Image className='w-40 h-50 rounded-xl object-cover object-center' src="/ptll_ppal_app_mhwebp.webp" alt="project image" width={100} height={100} />
      <section className="projectInfo p-4 bg-[#25272a] hover:bg-black rounded-lg">
        <h4 className="projectInfoTitle text-lg font-semibold w-auto">App Mario Hernandez</h4>
        <p className="description mt-4">
          Esta es una aplicación híbrida que utiliza una base desarrollada con React Native. Embebe un sitio completo construido en VTEX, junto con componentes personalizados en React.js, facilitando la compra de una variedad de productos de la marca.
        </p>
        <div className='mt-2'>
          <span className='font-semibold'>Tipo: </span>
          <span>Ecommerce</span>
        </div>
        <div className="technologiesContainer">
          <span className='font-semibold'>Tecnologias: </span>
          <div className='flex gap-2'>
         

          </div>
        </div>
      </section>
    </div>
  )
}

