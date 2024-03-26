import React from 'react'
import { Button } from './Button'

export const Contact = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center  w-[624px] flex-col'>
                <h1 className='font-semibold text-4xl pb-5'>Contact Us</h1>
                <p className='text-base font-normal text-[#696A75] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className='flex gap-[50px]'>
                    <div className='p-4 border rounded-xl w-[294px]'>
                        <h2 className='font-semibold text-2xl'>Address</h2>
                        <p className='text-lg font-normal text-[#696A75]'>Ulaanbaatar Mongolia SBD 1 gurvan gol 304</p>
                    </div>
                    <div className='p-4 border rounded-xl w-[294px]'>
                        <h2 className='font-semibold text-2xl'>Contact</h2>
                        <p className='text-lg font-normal text-[#696A75]'>313-332-8662
                            info@email.com</p>
                            //asdfasdfas
                    //a/dfasdfasdfsdf
                    </div>
                </div>
                <div className='pt-[49px]'>
                    <h3 className='font-semibold text-lg pb-6'>Leave a Message</h3>
                    <div className='flex gap-7'>
                        <input className='p-3 rounded-xl border ' type="text" placeholder='Your Name' />
                        <input className='p-3 rounded-xl border ' type="text" placeholder='Your Email' />
                    </div>
                    <div className='flex flex-col'>
                        <input className='p-3 rounded-xl border my-5 ' type="text" placeholder='Subject' />
                        <input className='px-3 pt-3 py-24 rounded-xl border ' type="text" placeholder='Write a message' />
                    </div>
                    <div className='flex py-1 mt-7 px-2.5 bg-[#4B6BFB] text-white rounded-md w-[140px] justify-center'>
                        Send a Message
                    </div>
                </div>
            </div>
        </div>
    )
}
