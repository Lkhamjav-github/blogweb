import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Blog } from './Blog'
import { useContext } from 'react'
import { SearchContextValue } from '../../context/SearchContext'

export const Bloginner = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    // const { searchValue, setSearchValue } = useContext(SearchContextValue)
    // const searchArticles = articles.filter((article) => article.title.toLowerCase().includes(searchValue.toLowerCase()))
    return (
        <>

        </>
    )
}
