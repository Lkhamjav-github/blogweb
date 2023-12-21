import React from 'react'
import { Button } from './Button'
export const About = () => {
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between items-center w-3/4 lg:w-[1216px]'>
                <div className=''>
                    <div className='bg-white'>
                        <Button title="technology" />
                        <h1>Grid system for better Design User Interface</h1>
                        <p className='font-normal text-[#97989F]'>August 20, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
