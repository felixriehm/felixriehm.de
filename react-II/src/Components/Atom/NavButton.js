import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavButton = styled.li`
    color: ${props => props.theme.colors.mainText};
    font-family: ${props => props.theme.fontOswald};
    font-size: 1rem;
    display: inline;

    a {
      text-align: center;
      padding: 14px 16px;
      text-transform: uppercase;
      font-size: 1.3rem;
    }

    &:hover{

    }
`;

function NavButton(props) {
  return (
    <StyledNavButton>
      <a href={props.href}>{props.text}</a>
    </StyledNavButton>
  );
}

export default NavButton;
