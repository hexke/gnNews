
import { useState, useEffect } from 'react'
import { getCountryNews } from '../utils/countries';
import { useParams } from 'react-router-dom';
import IArticle from '../interfaces/ArticleInterface/ArticleInterface';
import Article from '../components/Article/Article';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../App';
import { countActions } from '../store/store';
import { mq } from '../lib/styles.config';
import { useTranslation } from 'react-i18next';

const StyledGrid = styled.div<{ grid: boolean }>`
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

const StyledParagraph = styled.div`
grid-column: 1 / -1;
font-weight: 700;
text-align: center;
font-size: 18px;
`;

export const HomePage = () => {
    const { countryISO } = useParams();
    const dispatch = useAppDispatch();
    const { t } = useTranslation('common');
    const [articles, setArticles] = useState<IArticle[]>([]);
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);


    useEffect(() => {
        const getNews = async () => {
            if (!countryISO) return;

            const response = await fetch(getCountryNews(countryISO));

            const body = await response.json();

            setArticles(body.articles);
            dispatch(countActions.set(body.totalResults));
        }

        getNews();
    }, [countryISO]);

    return (
        <StyledGrid grid={showAsGrid}>
            {
                articles.length !== 0 && articles.map(article => <Article key={article.url} article={article} />)
            }
            {
                articles.length === 0 && <StyledParagraph>{t("no_articles")}</StyledParagraph>
            }
        </StyledGrid>
    )
}

export default HomePage;

