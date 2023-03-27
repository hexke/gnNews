
import { FC, HTMLAttributes } from 'react'
import { color } from '../../lib/styles.config';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${color.darkblue};
color: white;
padding: 5px 12px;
border: none;
border-radius: 3px;
cursor: pointer;

&:hover {
    background-color: ${color.blue};
}
`;

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> { };

const Button: FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default Button;
