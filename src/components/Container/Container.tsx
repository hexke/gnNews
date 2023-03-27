
import React, { ReactNode } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
max-width: 1200px;
margin: auto;

@media ( max-width: 1230px){
    margin: auto 10px;
}
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
