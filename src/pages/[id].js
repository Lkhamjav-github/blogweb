import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
import { Api } from '@/components/Api'
import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Footer } from '@/components/Footer'

const Detail = () => {
    const router = useRouter();
    console.log('router', router.query.id);
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div>
            <Header />
            {articles.map((article) => {
                return (
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center itmes-center w-[800px] flex-col'>
                            <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                            <div className='flex  items-center'>
                                <img className='w-9 h-9 rounded-full ' src={article.user.profile_image ? article.user.profile_image : ("https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif")} alt="" />
                                <p className='pl-3 pr-5 font-normal text-base text-[#97989F]'>{article.user.name}</p>
                                <p className='font-normal text-base text-[#97989F]'>{article.readable_publish_date} 2022</p>
                            </div>
                            <img className='rounded-xl h-[462px] w-[800px] mb-4' src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
                            <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.

                                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                            <h2>Research Your Destination</h2>
                            <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.

                                Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                            <h2>Plan Your Itinerary</h2>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default Detail