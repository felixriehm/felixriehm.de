import React, { Component } from 'react';
import styled from 'styled-components';
import NavButton from './NavButton.js';
import german from '../../Content/German/Header.json';
import english from '../../Content/English/Header.json';
import japanese from '../../Content/Japanese/Header.json';

const StyledNavigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 40px;
  text-align: center;
`;

function Navigation(props) {
  let data = props.checkLanguage(german,english,japanese);
  const listNavButtons = [];
  for (let i = 0; i <  data.NavigationItems.length; i++) {
    listNavButtons.push(<NavButton key={data.NavigationItems[i]} href="" text={data.NavigationItems[i]}/>);
  };

  return (
    <StyledNavigation>
      {listNavButtons}
    </StyledNavigation>
  );
}

export default Navigation;
