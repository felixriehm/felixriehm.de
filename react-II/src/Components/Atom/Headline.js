import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.div`
    width: 100%
`;

const StyledHeadlineText = styled.div`
    color: ${props => props.theme.colors.mainText};
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: 300;

    &::first-letter{
      font-size: 4rem;
      font-weight: 400;
    }
`;

const StyledHeadlineUnderline = styled.div`
    background: ${props => props.theme.colors.mainText};
    height: 2px;
    width: 70%;
`;

function Headline(props) {
  return (
    <StyledHeadline>
      <StyledHeadlineText>
        {props.title}
      </StyledHeadlineText>
      <StyledHeadlineUnderline>
      </StyledHeadlineUnderline>
    </StyledHeadline>
  );
}

export default Headline;
