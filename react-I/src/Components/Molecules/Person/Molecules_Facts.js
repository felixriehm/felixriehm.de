import React, { Component } from 'react';
import Atom_PersonSubTitle from '../../Atom/Atom_PersonSubTitle.js';
import Atom_Button from '../../Atom/Atom_Button.js';
import AtomFactsListItem from '../../Atom/Atom_FactsListItem.js';
import german from '../../../Content/German/Person/Facts.json';
import english from '../../../Content/English/Person/Facts.json';
import japanese from '../../../Content/Japanese/Person/Facts.json';
import styled from 'styled-components';

const NormalText = styled.div`
    font-family: 'gill', sans-serif;
    font-size: 5.4vw;
    @media (min-width: 576px) {
        font-size: 2.7vw; }
    @media (min-width: 992px) {
        font-size: 1.8vw; }
    @media (min-width: 1440px) {
        font-size: 1.3vw; }
`;

const KurzinfoEntry = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const itemIcons = ['fas fa-phone icon', 'fas fa-envelope icon', 'fas fa-graduation-cap icon'];

function Molecules_Facts(props) {
    const listButtons = [];
    let languages = props.languages;
    for (let i = 0; i <  languages.length; i++) {
      listButtons.push(<Atom_Button set="languages" index={i} text={languages[i]} onClick={() => props.onClick(languages[i])}/>);
    };

    var data = props.checkLanguage(german,english,japanese);
    const listItems = [];

    for (let i = 0; i < data.Entries.length; i++) {
      listItems.push(<AtomFactsListItem key={data.Entries[i]} icon = {itemIcons[i]} text = {data.Entries[i]}/>);

    }

  return (
    <React.Fragment>
      <Atom_PersonSubTitle title={data.Title}/>
      <NormalText>
        <KurzinfoEntry>
          <i className="fas fa-comment icon"></i>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {listButtons}
          </div>
      </KurzinfoEntry>
        {listItems}
      </NormalText>
    </React.Fragment>
  );
}


export default Molecules_Facts;
