
import React, { useState, useEffect } from 'react'
import { getCountryNews } from '../utils/countries';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/ArticleInterface/ArticleInterface';
import CtaLink from '../components/CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
    const { countrySlug } = useParams();
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        const getNews = async () => {
            if (!countrySlug) return;

            const response = await fetch(getCountryNews(countrySlug));

            const body = await response.json();

            setArticles(body.articles);
        }

        getNews();
    }, [countrySlug]);

    return (
        <div>
            {
                articles.map(article =>
                    <div key={article.url}>
                        <p>{article.title}</p>
                        <p>{article.author} {article.publishedAt}</p>
                        <p>{article.content}</p>
                        <CtaLink to={article.url}>czytaj więcej <FontAwesomeIcon icon="arrow-right" /></CtaLink>
                    </div>
                )
            }
        </div>
    )
}

export default HomePage;

