
import { useState, useEffect } from 'react'
import { getCountryNews } from '../utils/countries';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/ArticleInterface/ArticleInterface';
import Article from '../components/Article/Article';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../App';
import { countActions } from '../store/store';
import { mq } from '../lib/styles.config';

const StyledGrid = styled.div<{grid: boolean}>`
gap: 20px;
display: grid;
height: max-content;
grid-template-columns: ${props => props.grid ? "repeat(3, 1fr)" : "1fr"};

${mq['small']}{
    grid-template-columns: ${props => props.grid ? "repeat(2, 1fr)" : "1fr"};
}

${mq['xsmall']}{
    grid-template-columns: 1fr;
}
`;

export const HomePage = () => {
    const { countrySlug } = useParams();
    const dispatch = useAppDispatch();
    const [articles, setArticles] = useState<IArticle[]>([]);
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);


    useEffect(() => {
        const getNews = async () => {
            if (!countrySlug) return;

            const response = await fetch(getCountryNews(countrySlug));

            const body = await response.json();

            setArticles(body.articles);
            dispatch(countActions.set(body.totalResults));
        }

        getNews();
    }, [countrySlug]);

    return (
        <StyledGrid grid={showAsGrid}>
            {
                articles.map(article => <Article key={article.url} article={article} />)
            }
        </StyledGrid>
    )
}

export default HomePage;

