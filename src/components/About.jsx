import React from 'react'
import { Button } from './Button'
export const About = () => {
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between  w-3/4 lg:w-[1216px]'>
                <img className='relative' src="./anai.png" alt="" />
                <div className='bg-white absolute ml-3 mt-[335px] rounded-xl p-10'>
                    <Button title="Technology" />
                    <h1 className='text-4xl font-semibold w-[598px] pt-4 pb-6'>Grid system for better Design User Interface</h1>
                    <p className='font-normal text-[#97989F]'>August 20, 2022</p>
                </div>
            </div>
        </div>
    )
}
