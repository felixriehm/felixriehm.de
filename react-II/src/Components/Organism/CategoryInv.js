import React, { Component } from 'react';
import styled from 'styled-components';
import Headline from '../Atom/Headline.js';
import CategoryInvItem from '../Molecules/CategoryInvItem.js';

const ContentContainer = styled.div`

`;

const CategoryImage = styled.img`

`;

class CategoryInv extends Component {



  createCategoryItems = (data) => {
    let entries = []

    for (let i = 0; i < data.Entries.length; i++) {
      entries.push(
        <CategoryInvItem key={data.Entries[i].Title} title = {data.Entries[i].Title} url = {data.Entries[i].ImgURL}/>
      )
    }
    return entries
}

  render() {
    return (
      <React.Fragment>
          <Headline title = {this.props.data.Title}/>
          <div className="row">
            <div className="col-12 col-md-6">
              {this.createCategoryItems(this.props.data)}
            </div>
            <div className="col-12 col-md-6">
              <CategoryImage/>
            </div>
          </div>

      </React.Fragment>
    );
  }
}

export default CategoryInv;
