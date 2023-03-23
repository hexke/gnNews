import React from 'react'
import IArticle from '../../interfaces/ArticleInterface/ArticleInterface';
import styled from 'styled-components';
import CtaLink from '../CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate } from '../../utils/time';
import { useAppSelector } from '../../App';

const StyledArticle = styled.div<{ grid: boolean }>`
border-radius: 10px;
padding: 20px;
display: grid;
gap: 20px;
grid-auto-rows: max-content;
grid-template-columns: ${props => props.grid ? "1fr" : "200px 1fr"};
box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
`;

const StyledImage = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

& svg {
    color: lightgrey;
    height: 70px;
}
`;

const StyledTitle = styled.p<{ grid: boolean }>`
font-size: ${props => props.grid ? "16px" : "20px"};
font-weight: 600;
margin-bottom: 5px;

&.tile {
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
}
`;

const StyledInfo = styled.div`
font-size: 14px;
color: grey;
`;

const StyledCtaLink = styled(CtaLink)`
font-weight: 500;
margin-top: 20px;
display: inline-block;

& svg {
    transition: all .2s ease-in-out;
}

&:hover svg {
    transform: translateX(3px);
}
`;

const Article = ({ article }: { article: IArticle }) => {
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);

    return (
        <StyledArticle grid={showAsGrid}>
            <StyledImage>
                {!article.urlToImage && <FontAwesomeIcon icon="image" />}
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            </StyledImage>
            <div>
                <StyledTitle grid={showAsGrid} className={showAsGrid ? "tile" : ""}>{article.title}</StyledTitle>
                <StyledInfo>{article.author} | {formatDate(article.publishedAt)}</StyledInfo>
                <StyledCtaLink to={article.url} target='_blank' rel='noopener noreferrer'>czytaj więcej <FontAwesomeIcon icon="arrow-up-right-from-square" /></StyledCtaLink>
            </div>
        </StyledArticle>
    );
}

export default Article;
