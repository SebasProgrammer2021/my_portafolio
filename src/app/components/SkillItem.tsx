import React from 'react'


interface Props {
  icon: React.ReactNode,
  name: string
}


export const SkillItem = ({ icon, name }: Props) => {
  return (
    <div className='border rounded-sm px-3 py-2 size-24 flex flex-col items-center dark:border-amber-100'>
      {icon}
      <h3 className='text-center font-semibold pt-1.5 dark:text-white'>
        {name}
      </h3>
    </div>
  )
}
