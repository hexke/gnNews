import { useState } from 'react'
import IArticle from '../../interfaces/ArticleInterface';
import styled from 'styled-components';
import CtaLink from '../CtaLink/CtaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate } from '../../utils/time';
import { useAppSelector } from '../../App';
import Button from '../Button/Button';
import Modal from '../../modals/modal';
import { mq } from '../../lib/styles.config';
import { useTranslation } from 'react-i18next';

const StyledArticle = styled.div`
border-radius: 10px;
padding: 20px;
display: grid;
gap: 20px;
grid-auto-rows: max-content;
grid-template-columns: 1fr;
box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);

& button {
    margin-top: 20px;
}
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

${mq['small']}{
    font-size: 16px;
}
`;

const StyledInfo = styled.div`
font-size: 14px;
color: grey;
`;

const StyledDescription = styled.div`
margin: 10px 0;  
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
    const [isArticeModalOpen, setIsArticeModalOpen] = useState<boolean>(false);
    const { t } = useTranslation('common');

    return (
        <StyledArticle>
            {showAsGrid && <StyledImage>
                {!article.urlToImage && <FontAwesomeIcon icon="image" />}
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            </StyledImage>}
            <div>
                <StyledTitle grid={showAsGrid} className={showAsGrid ? "tile" : ""}>{article.title}</StyledTitle>
                <StyledInfo>{article.author} | {formatDate(article.publishedAt)}</StyledInfo>
                {!showAsGrid && <StyledDescription>{article.description}</StyledDescription>}
                <Button onClick={() => { setIsArticeModalOpen(true) }}>
                    {t('read_more')} <FontAwesomeIcon icon="arrow-up-right-from-square" />
                </Button>
            </div>
            <Modal isOpen={isArticeModalOpen} onClose={() => { setIsArticeModalOpen(false) }}>
                <StyledTitle grid={false}>{article.title}</StyledTitle>
                <StyledInfo>{article.author} | {formatDate(article.publishedAt)}</StyledInfo>
                {article.description && <StyledDescription>{article.description}</StyledDescription>}
                <StyledCtaLink to={article.url} target='_blank' rel='noopener noreferrer'>{t('to_source')} <FontAwesomeIcon icon="arrow-up-right-from-square" /></StyledCtaLink>
            </Modal>
        </StyledArticle>
    );
}

export default Article;
