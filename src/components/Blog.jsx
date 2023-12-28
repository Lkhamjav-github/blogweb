import React, { useEffect, useState } from 'react'
import { Api } from './Api'
import { Wbutton } from './Wbutton'
import Link from 'next/link'
import { Bloginner } from './Bloginner'

const postsPerPage = 3;
const arrayForHoldingPosts = [];
export const Blog = () => {

    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between  w-3/4 lg:w-[1216px] flex-col'>
                <h1 className='text-2xl font-bold py-12'>All Blog Post</h1>
                <div className='flex justify-between pb-8'>
                    <div className='flex gap-5'>
                        <a className='text-[#495057] text-xs font-bold' href="">All</a>
                        <a className='text-[#495057] text-xs font-bold' href="">Design</a>
                        <a className='text-[#495057] text-xs font-bold' href="">Travel</a>
                        <a className='text-[#495057] text-xs font-bold' href="">Fasion</a>
                        <a className='text-[#495057] text-xs font-bold' href="">Technology</a>
                        <a className='text-[#495057] text-xs font-bold' href="">Branding</a>
                    </div>
                    <a className='text-[#495057] text-xs font-bold' href="">View All</a>
                </div>
                <Bloginner />
            </div>
        </div>
    )
}
