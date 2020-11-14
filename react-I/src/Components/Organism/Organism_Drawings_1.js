import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../Content/Global/Organism_Drawing_1.json';

const DrawingsImgOne = styled.img`
    width: 90%;
    padding: 10%;
    display: block;
    margin-top: 20%;
    margin-left: 10%;
`;

const DrawingsImgTwo = styled.img`
    width: 90%;
    padding: 4%;
    display: block;
    margin-left: 20%;
    margin-top: 20%;
`;


class Organism_Drawings_1 extends Component {

  shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

  render() {
    return (
      <React.Fragment>
        <div className="col-12">
            <DrawingsImgOne src={data.ImageOne}/>
          </div>
          <div className="col-12">
              <DrawingsImgTwo src={data.ImageTwo}/>
          </div>
      </React.Fragment>
    );
  }
}

export default Organism_Drawings_1;
