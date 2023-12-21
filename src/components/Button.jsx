import React from 'react'

export const Button = (props) => {
    return (
        <div className='flex py-1 px-2.5 bg-[#4B6BFB] text-white rounded-md max-w-24 justify-center'>
            {props.title}
        </div>
    )
}
