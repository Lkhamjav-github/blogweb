import React from 'react'
import { Api } from './Api'
export const Blog = () => {
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between items-center w-3/4 lg:w-[1216px]'>
                <h1>All Blog Post</h1>
                <div>
                    <div className='img'></div>
                    <button></button>
                    <h2></h2>
                    <div>
                        <div className='propicture'></div>
                        <p className='name'></p>
                        <p className='onsar'></p>
                    </div>
                </div>
                <button>load more</button>
            </div>
        </div>
    )
}
