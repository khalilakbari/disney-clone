import React from 'react'


function HeaderItem({ name, Icon}) {
  return (
    <div className='text-white flex items-center gap-1.5 lg:gap-3 
    text-sm lg:text-xl font-semibold cursor-pointer hover:underline
     underline-offset-8 mb-2'>
        <Icon />
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem