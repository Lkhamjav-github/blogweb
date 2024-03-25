import React, { useEffect, useState } from 'react'
import { Api } from './Api'
import { Wbutton } from './Wbutton'
import Link from 'next/link'
import { useContext } from 'react'
import { SearchContextValue } from '../../context/SearchContext'
import SearchProvider from '../../context/SearchContext'

export const Blog = () => {
    const [articles, setArticles] = useState([])
    const [index, setIndex] = useState(3);

    const { searchValue, setSearchValue } = useContext(SearchContextValue)
    //asdfas

    const fetchArticles = async () => {
        try {
            const response = await fetch(`https://dev.to/api/articles`);
            const data = await response.json();
            setArticles(prevArticles => [...prevArticles, ...data]);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
    useEffect(() => {
        fetchArticles();
    }, []);

    function nextClick() {
        const nextIndex = index + 3;
        if (nextIndex <= 30) {
            setIndex(nextIndex);
        } else {
            // Reset to 3 if reached the end of available data
            setIndex(3);
        }
    }

    const displayArticles = searchValue ? articles.filter(article => article.title.toLowerCase().includes(searchValue.toLowerCase())) : articles.slice(0, index);


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
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                    {displayArticles.map((article) => {
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
                    {displayArticles.length == 0 && <img className='flex items-center justify-center' src="./not.webp" alt="imageNotFound" />}

                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={nextClick} className='py-3 px-5 border rounded-xl mt-8 w-[123px] mb-20'>Load more</button>
                </div>
            </div>
        </div>
    )
}
