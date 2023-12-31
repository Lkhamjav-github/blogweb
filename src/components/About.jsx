import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './Button'
export const About = () => {
    const [articles, setArticles] = useState([])
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    function nextClick() {
        setIndex(index + 1);
    }
    function backClick() {
        setIndex(index - 1);
    }

    let article = articles[index];
    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='flex justify-between  w-3/4 lg:w-[1216px] flex-col'>
                {/* {articles.map((article) => {
                    return ( */}
                <div className='border rounded-xl p-4 flex  justify-between flex-col'>
                    <img className='relative' src={articles.cover_image ? articles.cover_image : ("./anai.png")} alt="" />
                    <div className='bg-white absolute ml-3 mt-[335px] rounded-xl p-10'>
                        <Button title="Technology" />
                        <h1 className='text-4xl font-semibold w-[598px] pt-4 pb-6'>{articles.title ? articles.title : ("Grid system for better Design User Interface")}</h1>
                        <p className='font-normal text-[#97989F]'>{articles.readable_publish_date ? articles.readable_publish_date : ("August 20, 2022")}</p>
                    </div>
                </div>
                {/*     )
                 })} */}
                <div className='flex justify-end pt-3 gap-2'>
                    <button onClick={backClick}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="#696A75" />
                            <path d="M23.5 27L16 19.5L23.5 12" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button onClick={nextClick}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="#696A75" />
                            <path d="M16 12L23.5 19.5L16 27" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
