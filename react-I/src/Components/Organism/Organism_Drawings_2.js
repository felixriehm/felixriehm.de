import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../Content/Global/Organism_Drawing_2.json';

const DrawingsImgThree = styled.img`
    width: 90%;
    padding: 4%;
    display: block;
    margin: 0 auto;
`;

const DrawingsImgFour = styled.img`
    width: 60%;
    padding: 10%;
    display: block;
    margin: 0 auto;
`;

const DrawingsImgFive = styled.img`
    width: 60%;
    padding: 10%;
    display: block;
    margin: 0 auto;
`;


class Organism_Drawings_2 extends Component {

  shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

  render() {
    return (
      <React.Fragment>
        <div className="col-12">
            <DrawingsImgThree src={data.ImageOne}/>
          </div>
          <div className="col-12">
              <DrawingsImgFour src={data.ImageTwo}/>
          </div>
          <div className="col-12">
              <DrawingsImgFive src={data.ImageThree}/>
          </div>
      </React.Fragment>
    );
  }
}

export default Organism_Drawings_2;
