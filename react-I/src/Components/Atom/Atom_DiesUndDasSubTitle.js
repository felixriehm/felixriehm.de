import React, { Component } from 'react';
import styled from 'styled-components';

const HeroImage = styled.img`
    border-radius: 25%;
    margin: 0 auto;
    width: 40%;
`;

const ActTitle = styled.div`
    vertical-align: middle;
    font-family: domine, serif;
    font-size: 10vw;
    font-weight: bold;
    padding-top: 20px;
    display: inline-block;
    color: black;
    /* Fallback: assume this color ON TOP of image */
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    background-position: center;
    @media (min-width: 576px) {
        font-size: 5vw; }
    @media (min-width: 992px) {
        font-size: 3.3vw; }
    @media (min-width: 1440px) {
        font-size: 2.5vw; }
`;

function Atom_DiesUndDasSubTitle(props) {
  return (
    <React.Fragment>
      <div><HeroImage src={props.heroImage}/></div>
        <ActTitle style={{backgroundImage: "url("+ props.textImage + ")"}}>
        {props.titel}
        </ActTitle>
    </React.Fragment>
  );
}

export default Atom_DiesUndDasSubTitle;
