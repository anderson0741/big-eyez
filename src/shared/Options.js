import React from 'react'
import styled from 'styled-components';
import Mary from '../images/Mary.jpg';

import './Options.css'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    color: white;
    text-shadow: black 3px 3px 3px;
    background: rgba(205, 160, 40, 0.5);
    height: 100vh;
    width: 100%;

    @media (max-width: 420px){
        height: 900px;
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
const Form = styled.form`
    display: grid;
    grid-row-gap: 4px;
    border: none;
    width: 350px;
`;
const Cont = styled.h1`
    font-size: 3vw;
`;
const But = styled.button`
    margin-top: 5px;
    width: 60px;
`;
const StyledInput = styled.input`
    height: 28px;
    width: 100%;
`;
const SubHead = styled.h4`
    align-self: center;
    margin: auto;
    width: 60%;
`;
const TextBox = styled.textarea`
    height: 100px;
    width: 100%;
`;

function Options() {
    return (
        <Wrapper id="options">
            <Content>
                <div>
                    {/* <Cont>Contact</Cont> */}
                    <SubHead></SubHead>
                    <div className="optionsMenu">
                        <div className="ltitle">
                            <h1>Lashes</h1>
                        </div>
                        <div className="lashes">
                            <div className="spa">
                                <h3>Lash Tint</h3>
                                <h3>$15.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Eyebrow Tint</h3>
                                <h3>$15.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Classic</h3>
                                <h3>$45.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Volume</h3>
                                <h3>$65.00</h3>
                            </div>
                        </div>
                        <div className="atitle">
                            <h1>Advanced Treatments</h1>
                        </div>
                        <div className="adv">
                            <div className="spa">
                                <h3>Beta Green Tea Chemical Peel</h3>
                                <h3>$85.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Salicylic Chemical Peel</h3>
                                <h3>$85.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Tomato Basil Chemical Peel </h3>
                                <h3>$85.00</h3>
                            </div>
                            <div className="spa">
                                <h3>Vitamin A Peptide Chemical Peel </h3>
                                <h3>$85.00</h3>
                            </div>
                        </div>
                        <div className="wtitle">
                            <h1>Waxing</h1>
                        </div>
                        <div className="waxsp">
                            <div className="wax">
                                <div className="spa">
                                    <h3>Eyebrows </h3>
                                    <h3>$15.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Upper lip </h3>
                                    <h3>$15.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Chin </h3>
                                    <h3>$10.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Underarms </h3>
                                    <h3>$25.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Half Arm </h3>
                                    <h3>$20.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Full Arm</h3>
                                    <h3>$28.00</h3>
                                </div>
                            </div>
                            <div className="wax2">
                                <div className="spa">
                                    <h3>Half Leg</h3>
                                    <h3>$30.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Full Leg</h3>
                                    <h3>$40.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Back wax</h3>
                                    <h3>$25.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Bikini</h3>
                                    <h3>$40.00</h3>
                                </div>
                                <div className="spa">
                                    <h3>Brazillian</h3>
                                    <h3>$55.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Options
