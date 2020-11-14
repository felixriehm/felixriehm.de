import React, { Component } from 'react';
import styled from 'styled-components';
import Favourites from './Favourites.js';
import Category from './Category.js';
import CategoryInv from './CategoryInv.js';
import german_Film from '../../Content/German/Film.json';
import english_Film from '../../Content/English/Film.json';
import japanese_Film from '../../Content/Japanese/Film.json';
import german_Others from '../../Content/German/Others.json';
import english_Others from '../../Content/English/Others.json';
import japanese_Others from '../../Content/Japanese/Others.json';
import german_Theatre from '../../Content/German/Theatre.json';
import english_Theatre from '../../Content/English/Theatre.json';
import japanese_Theatre from '../../Content/Japanese/Theatre.json';

const ContentContainer = styled.div`
    background-image: url("/img/lightpaperfibers_@2X.png");
    background-repeat: repeat;
    border-radius: 55px;
    margin-top: 70px;
    position: relative;
    display: inline-block;
    opacity: 0.95;
    padding: 35px 50px;
    width: 100%;
    margin-bottom: 40px;
`;

function Body(props) {
  var theatre_data = props.checkLanguage(german_Theatre,english_Theatre,japanese_Theatre);
  var film_data = props.checkLanguage(german_Film,english_Film,japanese_Film);
  var others_data = props.checkLanguage(german_Others,english_Others,japanese_Others);

  return (
    <React.Fragment>
    <ContentContainer>
      <Favourites checkLanguage = {props.checkLanguage}/>
      <Category data = {theatre_data}/>
      <CategoryInv data = {film_data}/>
      <Category data = {others_data}/>
    </ContentContainer>
    </React.Fragment>
  );
}

export default Body;
