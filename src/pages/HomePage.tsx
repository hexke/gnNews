
import React, { useState, useEffect } from 'react'
import { getCountryNews } from '../utils/countries';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/ArticleInterface/ArticleInterface';
import CtaLink from '../components/CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Article from '../components/Article/Article';

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
                articles.map(article => <Article article={article} />)
            }
        </div>
    )
}

export default HomePage;

