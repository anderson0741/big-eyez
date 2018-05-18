import React from 'react'
import styled from 'styled-components';
import Mary from '../images/Mary.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import Top from '../Nav/Top';

const Aboutw = styled.section`
    background: rgba(105, 60, 46, 0.5);
`
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    color: white;
    text-shadow: black 3px 3px 3px;
    background: rgba(105, 60, 46, 0.5);
    height: 150vh;
    width: 100%;

    @media (max-width: 786px){
        height: 210vh;
        text-align: center;
    }
    
`;
const Main = styled.div`
    align-self: center;
    margin-top: 20vh;
    margin-bottom: 10vh;

    @media (max-width: 420px){
        height: 200px;
    }
`;
const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    
`;
const Content = styled.div`
    grid-area: c;
    align-self: center;
    margin-left: 20px;
`;

const SubHead = styled.h4`
    align-self: center;
    margin: auto;
    @media (max-width: 787px){
        height: 200px;
        width: 330px;
        font-size: 5vh;
    }
    @media (min-width: 786px){
        height: 200px;
        width: 800px;
        font-size: 5vh;
    }
`;

function About() {
    return (
        <Aboutw>
            <Wrapper id="about">
                <Main>
                    <h1>About Me</h1>
                    <p>I am an Esthetician.</p>
                    <Image src={Mary} alt="Pic of Mary" />
                </Main>
                <Content>
                    <div>
                        {/* <Cont>Contact</Cont> */}
                        <SubHead>Becoming an Esthetician has been such an amazing experience. I love that I can help people feel beautiful and confident especially since this amazing field has helped me feel that way. My expertise are lashes, waxing and microdermabrasion, I love all these treatments because the results are seen really quickly! I love seeing the joy in my clients eyes after each appointment and I want to continue bringing joy to those who seek it and I am excited to meet all different kinds of people along the way!</SubHead>
                    </div>
                </Content>
            </Wrapper>
            <Top />
        </Aboutw>
    )
}

export default About
