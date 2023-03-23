
import React, { useState } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';
import useInterval from '../../hooks/useInterval';
import { getCurrentTime } from '../../utils/time';

const StyledFooter = styled.div`
background-color: ${color.blue};  
`;

const Footer = () => {
    const [time, setTime] = useState<string | null>(new Date().toLocaleTimeString());

    useInterval(() => {
        setTime(getCurrentTime());
    }, 1000);

    return (
        <StyledFooter>
            <Container>
                aktualna godzina: {time}
            </Container>
        </StyledFooter>
    )
}

export default Footer;