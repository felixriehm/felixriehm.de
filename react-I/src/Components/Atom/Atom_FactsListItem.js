import React, { Component } from 'react';
import styled from 'styled-components';

const KurzinfoEntry = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`;

function Atom_FactsListItem(props) {
  return (
    <KurzinfoEntry><i className={props.icon}></i> {props.text}</KurzinfoEntry>
  );
}

export default Atom_FactsListItem;
