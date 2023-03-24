
import { countries } from 'country-code-lookup'
import CtaLink from '../CtaLink/CtaLink';
import styled from 'styled-components';
import { getCountryFlag } from '../../utils/countries';
import Filter from '../Filter/Filter';
import { useCallback, useState } from 'react';
import useFilter from '../../hooks/useFilter';

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

interface ICountry {
    continent: string;
    region: string;
    country: string;
    capital: string;
    fips: string;
    iso2: string;
    iso3: string;
    isoNo: string;
    internet: string;
}

export const Sidenav = () => {
    const [countriesList, setCountriesList] = useState<string[]>(() => {
        const initialState: string[] = countries.map((countryObj: ICountry) => countryObj.country);
        return initialState;
    });

    const [filteredItems, filter] = useFilter<string>(countriesList);

    const onPhraseSearch = useCallback((phrase: string) => {
        filter((country) => country.toLowerCase().includes(phrase));
    }, [filter]);

    return (
        <nav>
            <Filter onInput={onPhraseSearch} />
            {
                filteredItems.map(country =>
                    <StyledCtaLink key={country} to={`/country/${country}`}>
                        <img src={getCountryFlag(country)} alt={country} />{country}
                    </StyledCtaLink>
                )
            }
        </nav>
    )
}

export default Sidenav;
