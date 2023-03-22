
import React, { DetailedHTMLProps, HTMLAttributes, HTMLProps, ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;

&:hover {
    text-decoration: underline;
}
`;

type LinkProps = {
    to: string;
    children: ReactNode;
} & HTMLAttributes<HTMLAnchorElement>;

export const CtaLink = ({ to, children, ...props }: LinkProps) => {
    return (
        <StyledLink {...props} to={to}>
            {children}
        </StyledLink>
    )
}

export default CtaLink;