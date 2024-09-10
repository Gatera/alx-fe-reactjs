import React from 'react'

function Recipe({recipe: {title, summary, image}}) {
  return (
    <div className='w-full bg-white shadow-sm rounded-lg text-left hover:shadow-lg duration-300'>
        <div className='w-full'>
            <div style={{backgroundImage: `url(${image})`}} className='w-full h-40 rounded-t-lg bg-no-repeat bg-center bg-cover'></div>
        </div>
        <div className='p-5'>
            <h3 className='text-lg'>{title}</h3>
            <p className='text-sm text-gray-600 mt-2'>{summary}</p>
        </div>
    </div>
  )
}

export default Recipe