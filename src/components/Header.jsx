import React, { useEffect } from 'react'

export const Header = () => {

    return (
        <div className='bg-white flex'>
            <div className='w-2/3 flex items-center justify-center'>
                <img src="./Logo.svg" alt="" />
                <div className=''>
                    <a href="index.js">Home</a>
                    <a href="blog.js">Blog</a>
                    <a href="contact.js">Contact</a>
                </div>
                <div>

                    <input type="search" />
                </div>
            </div>
        </div>
    )
}
