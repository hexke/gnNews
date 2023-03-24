
import { useCallback } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color } from '../../lib/styles.config';
import CtaLink from '../CtaLink/CtaLink';
import { useAppDispatch, useAppSelector } from '../../App';
import { displayActions } from '../../store/store';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const Header = () => {
    const dispatch = useAppDispatch();
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);

    const toggleArticlesDisplay = useCallback(() => {
        dispatch(displayActions.toggle());
    }, [dispatch]);

    return (
        <StyledHeader>
            <Container>
                <StyledHomeLink to="/country/Poland">gnNews</StyledHomeLink>
                <Button onClick={toggleArticlesDisplay}>
                    toggle display:
                    {!showAsGrid && <FontAwesomeIcon icon="list"/>}
                    {showAsGrid && <FontAwesomeIcon icon="grip"/>}
                </Button>
            </Container>
        </StyledHeader>
    )
}

export default Header;
