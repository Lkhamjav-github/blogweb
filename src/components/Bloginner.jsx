import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Blog } from './Blog'
export const Bloginner = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {articles.map((article) => {
                    return (
                        <Link href={`/${article.id}`}>
                            <div className='border rounded-xl p-4 flex  justify-between flex-col'>
                                <img className='rounded-xl h-60 w-[360px] mb-4' src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
                                <p className="flex flex-wrap">
                                    {article.tag_list.map((tag) => {
                                        return (
                                            <label className="text-sm mr-1 mb-1 rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] px-2.5 py-1">
                                                {tag}
                                            </label>
                                        );
                                    })}
                                </p>
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
        </>
    )
}

// import React, { useState, useEffect, useRef } from "react"
// import Posts from "./Posts"
// import posts from "./postsArray"
// const Bloginner = () => {
//     const [postsToShow, setPostsToShow] = useState([])
//     const postsPerPage = 3
//     let arrayForHoldingPosts = []
//     const ref = useRef(postsPerPage)
//     const loopWithSlice = (start, end) => {
//         const slicedPosts = posts.slice(start, end)
//         arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
//         setPostsToShow(arrayForHoldingPosts)
//     }
//     useEffect(() => {
//         loopWithSlice(0, postsPerPage)
//     }, [])
//     const handleShowMorePosts = () => {
//         loopWithSlice(ref.current, ref.current + postsPerPage)
//         ref.current += postsPerPage
//     }
//     return (
//         <div>
//             <Posts postsToRender={postsToShow} />
//             <button onClick={handleShowMorePosts}>Load more</button>
//         </div>
//     )
// }
// export default Bloginner