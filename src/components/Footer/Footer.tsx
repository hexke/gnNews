
import { useState } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';
import useInterval from '../../hooks/useInterval';
import { getCurrentTime } from '../../utils/time';
import { useAppSelector } from '../../App';

const StyledFooter = styled.div`
background-color: ${color.blue};
color: #E2E2E2;
padding: 30px 0 70px 0;
`;

const StyledFlexContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Footer = () => {
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
                        aktualna godzina: <b>{time}</b>
                    </span>
                    <span>
                        ilość artykułów: <b>{articlesCount}</b>
                    </span>
                </StyledFlexContainer>
            </Container>
        </StyledFooter>
    )
}

export default Footer;