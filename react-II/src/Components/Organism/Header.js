import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderImage from '../Molecules/HeaderImage.js';
import HeaderText from '../Molecules/HeaderText.js';

const StyledHeader = styled.div`
  background-image: url("/img/lightpaperfibers_@2X.png");
  background-repeat: repeat;
  border-radius: 25px;
  margin-top: 40px;
  position: relative;
  display: inline-block;
  opacity: 0.95;
  padding: 35px 50px;
`;

function Header(props) {

  return (
    <React.Fragment>
      <StyledHeader>
        <div className="row">
          <div className="col-12 col-md-6">
            <HeaderImage checkLanguage = {props.checkLanguage}/>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <HeaderText checkLanguage = {props.checkLanguage}/>
          </div>
        </div>
      </StyledHeader>
    </React.Fragment>
  );
}

export default Header;
