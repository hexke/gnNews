import { useState } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color, mq } from '../../lib/styles.config';
import useInterval from '../../hooks/useInterval';
import { getCurrentTime } from '../../utils/time';
import { useAppSelector } from '../../App';
import { useTranslation } from 'react-i18next';

const StyledFooter = styled.div`
background-color: ${color.darkblue};
color: #E2E2E2;
padding: 30px 0 70px 0;

${mq['small']}{
    padding: 15px 0 30px 0;
}
`;

const StyledFlexContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

${mq['xsmall']}{
    flex-direction: column;

    & span {
        line-height: 1.5em;
    }
}
`;

const Footer = () => {
    const { t } = useTranslation('common');
    const articlesCount = useAppSelector(state => state.count.articlesCount);
    const [time, setTime] = useState<string | null>(new Date().toLocaleTimeString());

    useInterval(() => {
        setTime(getCurrentTime());
    }, 1000);

    return (
        <StyledFooter>
            <Container>
                <StyledFlexContainer>
                    <span>
                        {t('current_time')}: <b>{time}</b>
                    </span>
                    <span>
                        {t('articles_count')}: <b>{articlesCount}</b>
                    </span>
                </StyledFlexContainer>
            </Container>
        </StyledFooter>
    )
}

export default Footer;