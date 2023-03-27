
import { useCallback, useState } from 'react'
import Container from '../Container/Container';
import styled from 'styled-components';
import { color, mq } from '../../lib/styles.config';
import CtaLink from '../CtaLink/CtaLink';
import { useAppDispatch, useAppSelector } from '../../App';
import { displayActions } from '../../store/store';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../modals/modal';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const StyledHeader = styled.div`
padding: 10px 0;
border-bottom: 2px solid ${color.darkblue};

& button {
    margin-left: 10px;
}
`;

const StyledHomeLink = styled(CtaLink)`
font-size: 32px;
font-weight: 700 !important;
background-color: ${color.darkblue};
padding: 5px 20px;
color: white;
border-radius: 3px;
margin-right: auto;

&:hover {
    text-decoration: none;
    background-color: ${color.blue};
}

${mq['xsmall']}{
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 20px;
}
`;

const StyledFlexContainer = styled.div`
display: flex;
align-items: center;

${mq['xsmall']}{
    flex-wrap: wrap;
    justify-content: flex-end;
}
`;

const StyledLanguageButton = styled.button`
background-color: transparent;
border: none;
font-weight: 800;
color: grey;
cursor: pointer;
`;

export const Header = () => {
    const { t } = useTranslation('common');
    const dispatch = useAppDispatch();
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState<boolean>(false);
    const showAsGrid = useAppSelector(state => state.display.showAsGrid);

    const toggleArticlesDisplay = useCallback(() => {
        dispatch(displayActions.toggle());
    }, [dispatch]);

    return (
        <StyledHeader>
            <Container>
                <StyledFlexContainer>
                    <StyledHomeLink to="/country/Poland">gnNews</StyledHomeLink>

                    <StyledLanguageButton onClick={() => { i18next.changeLanguage("en") }}>
                        en
                    </StyledLanguageButton>
                    <StyledLanguageButton onClick={() => { i18next.changeLanguage("pl") }}>
                        pl
                    </StyledLanguageButton>

                    <Button onClick={() => { setIsFeedbackModalOpen(true) }}>
                        {t('task')}
                    </Button>
                    <Modal isOpen={isFeedbackModalOpen} onClose={() => { setIsFeedbackModalOpen(false) }}>
                        header modal<br />
                    </Modal>

                    <Button onClick={toggleArticlesDisplay}>
                        {t('display')}:
                        {!showAsGrid && <FontAwesomeIcon icon="list" />}
                        {showAsGrid && <FontAwesomeIcon icon="grip" />}
                    </Button>
                </StyledFlexContainer>
            </Container>
        </StyledHeader>
    )
}

export default Header;
