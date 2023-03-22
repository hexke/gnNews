
import React, { useState, useEffect } from 'react'
import { getNewsFrom } from '../lib/constants';
import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import IArticle from '../interfaces/ArticleInterface/ArticleInterface';
import CtaLink from '../components/CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
    const { countrySlug } = useParams();
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        console.log("useEffect: ", countrySlug);

        const getNews = async () => {
            if (!countrySlug) return;

            const response = await fetch(getNewsFrom(countrySlug));

            const body = await response.json();

            setArticles(body.articles);

            console.log(articles);
        }

        getNews();
    }, [countrySlug]);

    return (
        <Container>
            {
                articles.map(article =>
                    <div>
                        <p>{article.title}</p>
                        <p>{article.author} { article.publishedAt}</p>
                        <p>{article.content}</p>
                        <CtaLink to={article.url}>czytaj więcej <FontAwesomeIcon icon="arrow-right"/></CtaLink>
                    </div>
                )
            }
        </Container>
    )
}

export default HomePage;

