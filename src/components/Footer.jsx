import React from 'react'
import { Twitter } from './Twitter'
import { Facebook } from './Facebook'
import { Ig } from './Ig'
import { Linked } from './Linked'
import { Logo } from './Logo'
export const Footer = () => {
    return (
        <div className='bg-[#E8E8EA] flex justify-center items-center'>
            <div className='w-3/4 lg:w-[1216px] flex justify-center  flex-col'>
                <div className='flex pb-[25px] gap-5 pt-16' >
                    <div className='w-[289px]'>
                        <h3 className='font-semibold text-lg'>About</h3>
                        <p className='font-normal text-base text-[#696A75] pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <h4 className='pb-1 font-normal text-base'><b>Email :</b> info@jstemplate.net</h4>
                        <h4 className='font-normal text-base'><b>Phone :</b> +976 88997766</h4>
                    </div>
                    <div className='flex flex-col w-[521px] items-center'>
                        <a className='font-normal text-base text-[#696A75]' href="/">Home</a>
                        <a className='font-normal text-base text-[#696A75]' href="blog">Blog</a>
                        <a className='font-normal text-base text-[#696A75]' href="contact">Contact</a>
                    </div>
                    <div className='flex gap-[26.67px] flex-wrap'>
                        <Facebook />
                        <Twitter />
                        <Ig />
                        <Linked />
                    </div>
                </div>
                <hr />
                <div className='flex pb-16 items-center justify-between'>
                    <a href="/"><img className='py-8' src="./Logo.svg" alt="Logo" /></a>
                    <div className='flex gap-8'>
                        <h6 className='border-r-2 '>Terms of Use</h6>
                        <h6 className='border-r-2'>Privacy policy</h6>
                        <h6>Cookie policy</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
