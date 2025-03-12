import React from 'react'


interface Props {
  icon: React.ReactNode,
  name: string
}


export const SkillItem = ({ icon, name }: Props) => {
  return (
    <div className='border rounded-sm px-3 py-2 w-auto shadow-white shadow-md flex flex-col items-center'>
      {icon}
      <h3 className='text-center font-semibold pt-1.5'>
        {name}
      </h3>
    </div>
  )
}
