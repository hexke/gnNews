
import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import styled from 'styled-components';
import Container from '../Container/Container';
import { mq } from '../../lib/styles.config';

const StyledLayout = styled.div`
display: grid;
grid-template-rows: max-content 1fr max-content;
min-height: 100vh;  
`;

const StyledGrid = styled.div`
gap: 20px;
display: grid;
height: 100%;
padding: 30px 0 70px 0;
grid-template-columns: 1fr 3fr;

${mq['medium']}{
    gap: 50px;
    padding: 10px 0 50px 0;
    grid-template-columns: 1fr;
}
`;

export const RootLayout = () => {
    return (
        <StyledLayout>
            <Header />
            <Container>
                <StyledGrid>
                    <Sidenav />
                    <Outlet />
                </StyledGrid>
            </Container>
            <Footer />
        </StyledLayout>
    )
}

export default RootLayout;
