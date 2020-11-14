import React, { Component } from 'react';
import styled from 'styled-components';
import Headline from '../Atom/Headline.js';
import Favourite from '../Molecules/Favourite.js';
import german from '../../Content/German/Favourites.json';
import english from '../../Content/English/Favourites.json';
import japanese from '../../Content/Japanese/Favourites.json';

const ContentContainer = styled.div`

`;

class Favourites extends Component {



  createFavourites = (data) => {
    let entries = []

    for (let i = 0; i < data.Favourites.length; i++) {
      entries.push(
        <Favourite key={data.Favourites[i].Title} title = {data.Favourites[i].Title} url = {data.Favourites[i].ImgURL}/>
      )
    }
    return entries
}

  render() {
    let data = this.props.checkLanguage(german,english,japanese);

    return (
      <React.Fragment>
          <Headline title = {data.Title}/>
          <div className="row align-items-center">
            {this.createFavourites(data)}
          </div>
      </React.Fragment>
    );
  }
}

export default Favourites;
