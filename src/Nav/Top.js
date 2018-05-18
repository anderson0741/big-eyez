import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const StyledLink = styled(Link) `
    @media (max-width: 787px){
        color: red;
        font-size: 20px;
        text-decoration: none;
        :hover {
            border-radius: 5px;
            background-color: #555;
            color: white;
        }
    }
`;
const But = styled.button`
    @media (max-width: 787px){
        background-color: white;
        border-radius: 100%;
        display: flex;
        justify-content: flex-end;
        align-content: flex-end;
    }
    @media (min-width: 786px){
        display: none
    }
`;

function Top() {
    return (
        <div>
            <But>
                <StyledLink smooth="true" className='links' to="/#top">^</StyledLink>
            </But>
        </div>
    )
}

export default Top
