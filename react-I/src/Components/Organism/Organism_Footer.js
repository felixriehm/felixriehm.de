import React, { Component } from 'react';
import styled from 'styled-components';

const CreatedBy = styled.div`
    padding-top: 200px;
    padding-bottom: 50px;
    text-align: center;
    font-family: gill, sans-serif;
    font-size: 14px;
`;

function Organism_Footer(props) {

  return (
    <footer>
        <CreatedBy>Created by Felix Riehm with love ❤</CreatedBy>
    </footer>
  );
}

export default Organism_Footer;
