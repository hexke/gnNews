
import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import styled from 'styled-components';
import Container from '../Container/Container';

const StyledGrid = styled.div`
gap: 20px;
display: grid;
padding: 30px 0 70px 0;
grid-template-columns: 1fr 3fr;
`;

export const RootLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <StyledGrid>
                    <Sidenav />
                    <Outlet />
                </StyledGrid>
            </Container>
            <Footer />
        </>
    )
}

export default RootLayout;
