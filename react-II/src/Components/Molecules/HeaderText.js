import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../Atom/Navigation.js';
import german from '../../Content/German/Header.json';
import english from '../../Content/English/Header.json';
import japanese from '../../Content/Japanese/Header.json';

const AboutMe = styled.div`
  color: ${props => props.theme.colors.mainText};
  font-family: ${props => props.theme.fontOpenSans};
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  padding: 0 80px;
`;

const HeaderTextWrapper = styled.div`

`;

const DividingLine = styled.div`
  height: 2px;
  background: ${props => props.theme.colors.mainText};
  width: 50%;
  margin: 0 auto;
`;

function HeaderText(props) {
  let data = props.checkLanguage(german,english,japanese);

  return (
    <React.Fragment>
      <HeaderTextWrapper>
        <AboutMe>
            {data.AboutText}
        </AboutMe>

        <DividingLine/>

        <Navigation checkLanguage = {props.checkLanguage}/>
      </HeaderTextWrapper>
    </React.Fragment>
  );
}

export default HeaderText;
