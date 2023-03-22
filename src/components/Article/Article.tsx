import React from 'react'
import IArticle from '../../interfaces/ArticleInterface/ArticleInterface';
import styled from 'styled-components';
import CtaLink from '../CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate } from '../../utils/time';

const StyledArticle = styled.div`
border-radius: 10px;
padding: 20px;
display: grid;
gap: 20px;
grid-template-columns: 200px 1fr;
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

const StyledTitle = styled.p`
font-size: 20px;
font-weight: 600;
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
    return (
        <StyledArticle style={{ margin: "20px 0" }}>
            <StyledImage>
                {!article.urlToImage && <FontAwesomeIcon icon="image" />}
                {article.urlToImage && <img src={article.urlToImage} />}
            </StyledImage>
            <div>
                <StyledTitle>{article.title}</StyledTitle>
                <p>{article.author} | {formatDate(article.publishedAt)}</p>
                <StyledCtaLink to={article.url} target='_blank' rel='noopener noreferrer'>czytaj więcej <FontAwesomeIcon icon="arrow-up-right-from-square" /></StyledCtaLink>
            </div>
        </StyledArticle>
    );
}

export default Article;
