import React, { Component } from 'react';
import styled from 'styled-components';
import Atom_DiesUndDasListItem from '../../Atom/Atom_DiesUndDasListItem.js';
import Atom_DiesUndDasSubTitle from '../../Atom/Atom_DiesUndDasSubTitle.js';

const Act = styled.div`
    margin-bottom: 14%;
    text-align: center;
    @media (min-width: 768px) {
        margin-bottom: 20%;}
`;

const DashedLine = styled.img`
    width: 24%;
`;

const Entries = styled.div`
`;

const Entry = styled.div`
    padding-bottom: 2%;
    @media (min-width: 576px) {
        padding-bottom: 9%; }
    @media (min-width: 768px) {
        padding-bottom: 6%; }
    @media (min-width: 1440px) {
        padding-bottom: 4%; }
`;

const EntryTitle = styled.span`
    font-family: 'gillcon', sans-serif;
    font-size: 7vw;
    top: 10px;
    position: relative;
    @media (min-width: 576px) {
        font-size: 3.5vw; }
    @media (min-width: 992px) {
        font-size: 2.3vw; }
    @media (min-width: 1440px) {
        font-size: 1.7vw; }
`;

class Molecules_Act extends Component {

  createEntries = () => {
    let entries = []

    for (let i = 0; i < this.props.data.Entries.length; i++) {
      let links = []
      let entry = this.props.data.Entries[i];

      for (let j = 0; j < entry.Descriptions.length; j++) {
        if(j == 0){
          if(entry.Images[j].startsWith('vid')){
            links.push(<Atom_DiesUndDasListItem link={entry.Images[j]} description={entry.Descriptions[j]} set={entry.DataSet} text={entry.Titel} icon={true}/>);
          }else{
            links.push(<Atom_DiesUndDasListItem link={entry.Images[j]} description={entry.Descriptions[j]} set={entry.DataSet} text={entry.Titel} icon={false}/>);
          }
        }else{
          links.push(<Atom_DiesUndDasListItem link={entry.Images[j]} description={entry.Descriptions[j]} set={entry.DataSet} text='' icon={false}/>);
        }
      }

      entries.push(
        <Entry>
          <EntryTitle>
            {links}
          </EntryTitle>
        </Entry>
        )
    }
    return entries
}

render() {
  return (
    <Act>
        <Atom_DiesUndDasSubTitle heroImage={this.props.data.HeroImage} textImage={this.props.data.TextImage} titel= {this.props.data.Titel}/>
        <div><DashedLine src="img/dashed_line.svg"/></div>
        <Entries>
          {this.createEntries()}
        </Entries>
        <div><DashedLine src="img/dashed_line.svg"/></div>
    </Act>
  );
}
}

export default Molecules_Act;
