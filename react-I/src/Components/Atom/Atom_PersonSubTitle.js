import React, { Component } from 'react';
import styled from 'styled-components';

const PageSubTitle = styled.div`
    font-family: domine, serif;
    font-size: 7.8vw;
    font-weight: bold;
    text-decoration: underline;
    padding-bottom: 4%;
    @media (min-width: 576px) {
        font-size: 3.9vw; }
    @media (min-width: 992px) {
        font-size: 2.6vw; }
    @media (min-width: 1440px) {
        font-size: 1.9vw; }
`;

function Atom_PersonSubTitle(props) {
  return (
    <PageSubTitle>
    {props.title}
    </PageSubTitle>
  );
}

export default Atom_PersonSubTitle;
