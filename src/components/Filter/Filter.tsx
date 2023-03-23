import styled from "styled-components";
import { color } from "../../lib/styles.config";
import { ChangeEvent } from "react";

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

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInput(e.currentTarget.value);
        console.log(e.currentTarget.value);
    };

    return (
        <FilterDiv>
            <label htmlFor="searchCountry">Szukaj kraju:</label>
            <input onInput={onInputChange} type="text" id="searchCountry" />
        </FilterDiv>
    )
}

export default Filter;
