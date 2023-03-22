
import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
max-width: 1200px;
margin: auto;

`;

type ContainerProps = {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;
