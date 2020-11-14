import React, { Component } from 'react';
import styled from 'styled-components';
import Molecules_Act from '../Molecules/DiesUndDas/Molecules_Act.js'
import german_Chor from '../../Content/German/DiesUndDas/Chor.json';
import english_Chor from '../../Content/English/DiesUndDas/Chor.json';
import japanese_Chor from '../../Content/Japanese/DiesUndDas/Chor.json';
import german_ESN from '../../Content/German/DiesUndDas/ESN.json';
import english_ESN from '../../Content/English/DiesUndDas/ESN.json';
import japanese_ESN from '../../Content/Japanese/DiesUndDas/ESN.json';
import german_Film from '../../Content/German/DiesUndDas/Film.json';
import english_Film from '../../Content/English/DiesUndDas/Film.json';
import japanese_Film from '../../Content/Japanese/DiesUndDas/Film.json';
import german_Others from '../../Content/German/DiesUndDas/Others.json';
import english_Others from '../../Content/English/DiesUndDas/Others.json';
import japanese_Others from '../../Content/Japanese/DiesUndDas/Others.json';
import german_Theatre from '../../Content/German/DiesUndDas/Theatre.json';
import english_Theatre from '../../Content/English/DiesUndDas/Theatre.json';
import japanese_Theatre from '../../Content/Japanese/DiesUndDas/Theatre.json';
import german_DiesUndDas from '../../Content/German/DiesUndDas/DiesUndDas.json';
import english_DiesUndDas from '../../Content/English/DiesUndDas/DiesUndDas.json';
import japanese_DiesUndDas from '../../Content/Japanese/DiesUndDas/DiesUndDas.json';

const DudTitleContainer = styled.div`
    text-align: center;
`;

const DudTitleBorder = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: black;
    border-radius: 25px;
    font-family: croc, sans-serif;
    display: inline-block;
    margin-bottom: 20%;
    font-size: 16vw;
    padding-left: 7%;
    padding-right: 7%;
    line-height: 18vw;
    @media (min-width: 576px) {
        font-size: 8vw;
        line-height: 10vw;
        margin-bottom: 14%; }
    @media (min-width: 992px) {
        font-size: 5.3vw;
        line-height: 7.3vw;
        margin-bottom: 11%;}
    @media (min-width: 1440px) {
        font-size: 4vw;
        line-height: 6vw;
        margin-bottom: 20%;}
`;

function Organism_DiesUndDas(props) {
  var theatre_data = props.checkLanguage(german_Theatre,english_Theatre,japanese_Theatre);
  var esn_data = props.checkLanguage(german_ESN,english_ESN,japanese_ESN);
  var film_data = props.checkLanguage(german_Film,english_Film,japanese_Film);
  var others_data = props.checkLanguage(german_Others,english_Others,japanese_Others);
  var chor_data = props.checkLanguage(german_Chor,english_Chor,japanese_Chor);
  var diesunddas_data = props.checkLanguage(german_DiesUndDas,english_DiesUndDas,japanese_DiesUndDas);

  return (
    <React.Fragment>

      <DudTitleContainer className="col-12">
          <DudTitleBorder>{diesunddas_data.Title}</DudTitleBorder>
        </DudTitleContainer>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-12">
        <Molecules_Act data={theatre_data}/>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-12">
        <Molecules_Act data={esn_data}/>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-12">
        <Molecules_Act data={film_data}/>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-12">
        <Molecules_Act data={others_data}/>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 col-xl-12">
        <Molecules_Act data={chor_data}/>
      </div>

      </React.Fragment>
  );
}

export default Organism_DiesUndDas;
