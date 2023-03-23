
import { countries } from 'country-code-lookup'
import CtaLink from '../CtaLink/CtaLink';
import styled from 'styled-components';
import { getCountryFlag } from '../../utils/countries';

const StyledCtaLink = styled(CtaLink)`
width: 100%;
display: flex;
color: black;
align-items: center;

&:hover {
    background-color: rgba(0,0,0,0.1);
}

& img {
    margin-right: 10px;
}
`;

export const Sidenav = () => {

    return (
        <nav>
            {
                countries.map(countryObj =>
                    <StyledCtaLink key={countryObj.country} to={`/country/${countryObj.country}`}>
                        <img src={getCountryFlag(countryObj.iso2)} alt={countryObj.country} />{countryObj.country}
                    </StyledCtaLink>
                )
            }
        </nav>
    )
}

export default Sidenav;
