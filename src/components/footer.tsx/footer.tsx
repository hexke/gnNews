
import React, { useCallback, useEffect, useState } from 'react'
import Container from '../contaner/container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';
import useInterval from '../../hooks/useInterval';

const StyledFooter = styled.div`
background-color: ${color.blue};  
`;

const Footer = () => {
    const [time, setTime] = useState<string | null>(new Date().toLocaleTimeString());

    useInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime)
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