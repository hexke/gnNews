
import { useEffect } from 'react'
import { getCountryNewsUrl } from '../utils/countries';
import { useLoaderData } from 'react-router-dom';
import IArticle from '../interfaces/ArticleInterface';
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

export const NewsPage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('common');
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);
    const [articles, articlesTotal] = useLoaderData() as [IArticle[], number];

    useEffect(() => {
        dispatch(countActions.set(articlesTotal));
    });

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

export const newsLoader = async ({ params }: { params: any }) => {
    const response = await fetch(getCountryNewsUrl(params.countryISO));

    const body = await response.json();

    return [body.articles, body.totalResults];
};

export default NewsPage;
