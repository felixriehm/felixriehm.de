import React, { Component } from 'react';
import styled from 'styled-components';
import Atom_PersonSubTitle from '../../Atom/Atom_PersonSubTitle.js';
import german from '../../../Content/German/Person/About.json';
import english from '../../../Content/English/Person/About.json';
import japanese from '../../../Content/Japanese/Person/About.json';

const NormalText = styled.div`
    font-family: 'gill', sans-serif;
    font-size: 5.4vw;
    @media (min-width: 576px) {
        font-size: 2.7vw; }
    @media (min-width: 992px) {
        font-size: 1.8vw; }
    @media (min-width: 1440px) {
        font-size: 1.3vw; }
`;

function Molecules_About(props) {
    let data = props.checkLanguage(german,english,japanese);

    return (
      <React.Fragment>
        <Atom_PersonSubTitle title = {data.Title}/>
        <NormalText>
          <p>{data.TextOne}</p>
          <p>{data.TextTwo}</p>
        </NormalText>
      </React.Fragment>
    );
}

export default Molecules_About;
