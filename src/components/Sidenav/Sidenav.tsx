
import { countries } from 'country-code-lookup'
import CtaLink from '../CtaLink/CtaLink';
import styled from 'styled-components';
import { getCountryFlag, getCountryISO } from '../../utils/countries';
import Filter from '../Filter/Filter';
import { useCallback, useState } from 'react';
import useFilter from '../../hooks/useFilter';
import { mq } from '../../lib/styles.config';

const StyledCountryContainer = styled.div`
${mq['medium']}{
    overflow: scroll;
    
    & div {
        display: flex;
        gap: 20px;
        width: max-content;
    }
}  
`;

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

${mq['medium']}{
    width: max-content;

    & img {
        margin-right: 5px;
    }
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
        filter((country) => country.toLowerCase().includes(phrase.toLocaleLowerCase()));
    }, [filter]);

    return (
        <nav style={{ overflow: "hidden" }}>
            <Filter onInput={onPhraseSearch} />
            <StyledCountryContainer>
                <div>
                    {
                        filteredItems.map(country =>
                            <StyledCtaLink key={country} to={`/country/${getCountryISO(country)}`}>
                                <img src={getCountryFlag(country)} alt={country} />{country}
                            </StyledCtaLink>
                        )
                    }
                </div>
            </StyledCountryContainer>
        </nav>
    )
}

export default Sidenav;
