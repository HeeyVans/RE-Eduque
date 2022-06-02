import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './Newsitem'
import './newsitem.css'

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=%22meio%20ambiente%22&apiKey=97458584d3144b8e9075676399a241f5');
            console.log(response);
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])
    return (
        <div className='container-news'>
            {articles.map(article => {
                return (
                    <NewsItem 
                        title = {article.title}
                        description = {article.description}
                        url = {article.url}
                        urlToImage = {article.urlToImage}
                    />
                );
            })}
        </div>
    );
}

export default NewsList;