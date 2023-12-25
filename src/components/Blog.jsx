import React, { useEffect, useState } from 'react'
import { Api } from './Api'
import { Wbutton } from './Wbutton'
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
                <h1>All Blog Post</h1>
                <div className='grid grid-cols-3 gap-5'>
                    {articles.map((article) => {
                        return (
                            <div>
                                <img src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
                                <div className='flex py-1 px-2.5 text-[#4B6BFB] bg-[#4B6BFB0D] rounded-md max-w-24 justify-center'>
                                    {/* {props.title} */}
                                    Technology
                                </div>
                                {/* asjhdkjas */}
                                <h2></h2>
                                <div>
                                    <div className='propicture'></div>
                                    <p className='name'></p>
                                    <p className='onsar'></p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <button>load more</button>
            </div>
        </div>
    )
}
