import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../Atom/Navigation.js';

const StyledFavouriteImage = styled.img`
  height: 130px;
`;

const StyledFavouriteTitle = styled.div`
    color: ${props => props.theme.colors.mainText};
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    margin-top: 15px;
`;

const ColFavourite = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
`;

function HeaderText(props) {
  return (
    <React.Fragment>
      <ColFavourite className="col-12 col-md-4">
        <div>
          <StyledFavouriteImage src={props.url}/>
          <StyledFavouriteTitle> {props.title} </StyledFavouriteTitle>
        </div>
      </ColFavourite>
    </React.Fragment>
  );
}

export default HeaderText;
