
import { countries as countriesLookup } from 'country-code-lookup'
import CtaLink from '../CtaLink/CtaLink';
import styled from 'styled-components';
import { getCountryFlag, getCountryISO } from '../../utils/countries';
import Filter from '../Filter/Filter';
import { useCallback, useState } from 'react';
import useFilter from '../../hooks/useFilter';
import { mq } from '../../lib/styles.config';
import { useTranslation } from 'react-i18next';
import countries from "i18n-iso-countries";

const StyledNav = styled.nav`
overflow: hidden;  
`;

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

export const Sidenav = () => {
    const { t, i18n } = useTranslation();
    const [countriesList, setCountriesList] = useState<string[]>(() => {
        const initialState: string[] = countriesLookup.map((countryObj: ICountry) => countryObj.country);
        return initialState;
    });

    const [filteredItems, filter] = useFilter<string>(countriesList);

    const onPhraseSearch = useCallback((phrase: string) => {
        filter((country) => country.toLowerCase().includes(phrase.toLocaleLowerCase()));
    }, [filter]);

    return (
        <StyledNav>
            <Filter onInput={onPhraseSearch} />
            <StyledCountryContainer>
                <div>
                    {
                        filteredItems.map(country =>
                            <StyledCtaLink key={country} to={`/country/${getCountryISO(country)}`}>
                                <img src={getCountryFlag(country)} alt={country} />
                                {t(countries.getName(getCountryISO(country), i18n.language, { select: "official" }))}
                            </StyledCtaLink>
                        )
                    }
                </div>
            </StyledCountryContainer>
        </StyledNav>
    )
}

export default Sidenav;
