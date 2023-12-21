import React from 'react'

export const Api = () => {
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div>
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
