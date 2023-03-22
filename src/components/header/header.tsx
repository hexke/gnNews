

import React from 'react'
import Container from '../contaner/container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';

const StyledHeader = styled.div`
background-color: ${color.blue};
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                This is header
            </Container>
        </StyledHeader>
    )
}

export default Header;
