import React, { useEffect, useState } from 'react'
import { Wbutton } from './Wbutton'
export const Api = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
        //dsfouygasodhfoagit a
    }, [])
    console.log("articles", articles);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {articles.map((article) => {
                return (
                    <div>
                        {article.title}
                        {article.description}
                    </div>
                )
            })}
        </div>
    )
}
