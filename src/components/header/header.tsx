
import React, { useCallback } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';
import CtaLink from '../CtaLink/CtaLink';
import { useAppDispatch } from '../../App';
import { displayActions } from '../../store/store';

const StyledHeader = styled.div`
padding: 10px 0;
border-bottom: 2px solid ${color.darkblue};
`;

const StyledHomeLink = styled(CtaLink)`
font-size: 32px;
font-weight: 700 !important;
background-color: ${color.darkblue};
padding: 5px 20px;
color: white;
border-radius: 3px;

&:hover {
    text-decoration: none;
    background-color: ${color.blue};
}
`;

const StyledLink = styled(CtaLink)`
font-weight: 500;
color: ${color.darkblue};

&:hover {
    color: ${color.blue};
}
`;

export const Header = () => {
    const dispatch = useAppDispatch();

    const toggleArticlesDisplay = useCallback(() => {
        dispatch(displayActions.toggle());
    }, []);

    return (
        <StyledHeader>
            <Container>
                <StyledHomeLink to="/country/Poland">gnNews</StyledHomeLink>
                <button onClick={toggleArticlesDisplay}>toggle display</button>
            </Container>
        </StyledHeader>
    )
}

export default Header;
