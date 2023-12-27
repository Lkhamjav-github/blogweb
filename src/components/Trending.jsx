import React, { useEffect, useState } from 'react'

export const Trending = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div className='bg-white flex justify-center items-center py-25'>
            <div className='flex justify-between  w-3/4 lg:w-[1216px] flex-col'>
                <h1 className='text-2xl font-bold py-12'>Trending</h1>
                <div className='flex gap-6'>
                    <div className='flex justify-center'>
                        <img className='relative' src="./Rect.png" alt="" />
                        <div className='w-[230px] absolute pt-[172px]'>
                            <div className='flex py-1 px-2.5 bg-[#4B6BFB] text-white rounded-md max-w-24 justify-center'>
                                Technology
                            </div>
                            <h2 className='font-semibold text-lg text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='relative' src="./Rect.png" alt="" />
                        <div className='w-[230px] absolute pt-[172px]'>
                            <div className='flex py-1 px-2.5 bg-[#4B6BFB] text-white rounded-md max-w-24 justify-center'>
                                Technology
                            </div>
                            <h2 className='font-semibold text-lg text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='relative' src="./Rect.png" alt="" />
                        <div className='w-[230px] absolute pt-[172px]'>
                            <div className='flex py-1 px-2.5 bg-[#4B6BFB] text-white rounded-md max-w-24 justify-center'>
                                Technology
                            </div>
                            <h2 className='font-semibold text-lg text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img className='relative' src="./Rect.png" alt="" />
                        <div className='w-[230px] absolute pt-[172px]'>
                            <div className='flex py-1 px-2.5 bg-[#4B6BFB] text-white rounded-md max-w-24 justify-center'>
                                Technology
                            </div>
                            <h2 className='font-semibold text-lg text-white'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                    </div>

                    {/* {articles.map((article) => {
                        <div>
                            <img src="" alt="" />
                        </div>
                    })} */}
                </div>
            </div>
        </div>
    )
}
