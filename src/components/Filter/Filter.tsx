import styled from "styled-components";
import { color } from "../../lib/styles.config";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const FilterDiv = styled.div`
margin-bottom: 15px;

& label {
    display: block;
    margin-bottom: 3px;
}

& input {
    width: 100%;
    font-size: 15px;
    padding: 5px 10px;
    outline: none;

    &:focus,
    &:active {
        border: 2px solid ${color.darkblue};
    }
}
`;

const Filter = ({ onInput }: { onInput: (phrase: string) => void }) => {
    const { t } = useTranslation('common');

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInput(e.currentTarget.value);
    };

    return (
        <FilterDiv>
            <label htmlFor="searchCountry">{t('search_country')}:</label>
            <input onInput={onInputChange} type="text" id="searchCountry" data-testid="search-country"/>
        </FilterDiv>
    )
}

export default Filter;
