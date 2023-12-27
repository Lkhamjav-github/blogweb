import React, { useEffect, useState } from 'react'
import { Api } from './Api'
import { Wbutton } from './Wbutton'
import Link from 'next/link'
export const Blog = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between  w-3/4 lg:w-[1216px] flex-col'>
                <h1 className='text-2xl font-bold py-12'>All Blog Post</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {articles.map((article) => {
                        return (
                            <Link href={`/${article.id}`}>
                                <div className='border rounded-xl p-4 flex  justify-between flex-col'>
                                    <img className='rounded-xl h-60 w-[360px] mb-4' src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
                                    <div className='flex py-1 px-2.5 text-[#4B6BFB] bg-[#4B6BFB0D] rounded-md max-w-24 justify-center '>
                                        {/* {props.title} */}
                                        Technology
                                    </div>
                                    <h2 className='pt-4 pb-5 text-2xl font-semibold'> {article.title}</h2>
                                    <div className='flex  items-center'>
                                        <img className='w-9 h-9 rounded-full ' src={article.user.profile_image ? article.user.profile_image : ("https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif")} alt="" />
                                        <p className='pl-3 pr-5 font-normal text-base text-[#97989F]'>{article.user.name}</p>
                                        <p className='font-normal text-base text-[#97989F]'>{article.readable_publish_date} 2022</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex justify-center items-center'>
                    <button className='py-3 px-5 border rounded-xl mt-8 w-[123px] mb-20'>Load more</button>
                </div>

            </div>
        </div>
    )
}
