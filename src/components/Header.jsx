import React, { useEffect } from 'react'
import { Search } from './Search'
import { Bagana } from './Bagana'
export const Header = () => {
    return (
        <div className='bg-white flex justify-center items-center py-5 lg:py-8'>
            <div className='flex justify-between items-center w-3/4 lg:w-[1216px]'>
                <a href="/"><img src="./Logo.svg" alt="logo" /></a>
                <div className='lg:flex lg:gap-10 hidden'>
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className='relative hidden lg:flex justify-center items-center'>
                    <input className='w-full ' type="text" placeholder='search' />
                    <Search />
                </div>
                <div className='flex lg:hidden'>
                    <Bagana />
                </div>
            </div>
        </div>
    )
}
