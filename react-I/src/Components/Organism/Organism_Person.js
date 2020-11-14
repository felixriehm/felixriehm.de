import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Molecules/Person/Molecules_Header.js';
import About from '../Molecules/Person/Molecules_About.js';
import Facts from '../Molecules/Person/Molecules_Facts.js';

const BottomImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-top: 70px;
    margin-bottom: 40%;
    @media (min-width: 992px) {
        margin-bottom: 20%; }
`;

function Organism_Person(props) {
  return (
    <React.Fragment>
    <div className="col-12">
      <Header/>
    </div>
    <div className="col-12">
        <About
        checkLanguage = {props.checkLanguage}
      />
    </div>
    <div className="col-12" style={{marginTop: 40 + 'px'}}>
      <Facts
      checkLanguage = {props.checkLanguage}
      languages = {props.languages}
      onClick = {props.onClick}
    />
    </div>
    <div className="col-12">
        <BottomImage src="img/006.png"/>
    </div>
    </React.Fragment>
  );
}

export default Organism_Person;
