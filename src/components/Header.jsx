import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import { Bagana } from './Bagana'
import { useContext } from 'react'
import { SearchContextValue } from '../../context/SearchContext'
export const Header = () => {

    const { searchValue, setSearchValue } = useContext(SearchContextValue)

    return (

        <div className='bg-white flex justify-center items-center py-5 lg:py-8'>
            <div className='flex justify-between items-center w-3/4 lg:w-[1216px]'>
                <a href="/"><img src="./Logo.svg" alt="logo" /></a>
                <div className='lg:flex lg:gap-10 hidden'>
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className='relative hidden lg:flex justify-center items-center border-[2px] border-[#D6D8DB] rounded-xl py-2 px-4'>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full ' type="text" placeholder='search' />
                    <Search />
                </div>
                <div className='flex lg:hidden'>
                    <Bagana />
                </div>
            </div>
        </div>
    )
}
