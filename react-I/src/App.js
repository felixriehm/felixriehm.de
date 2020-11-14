import React, { Component } from 'react';
import Organism_Person from './Components/Organism/Organism_Person.js';
import Organism_Drawings_1 from './Components/Organism/Organism_Drawings_1.js';
import Organism_Drawings_2 from './Components/Organism/Organism_Drawings_2.js';
import Organism_DiesUndDas from './Components/Organism/Organism_DiesUndDas.js';
import Organism_Footer from './Components/Organism/Organism_Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'deutsch'
    };

    this.languagesList = ['deutsch', 'english', '日本語'];
  }

  checkLanguage (language1, language2, language3){
      switch (this.state.language) {
        case this.languagesList[0]:
          return language1;
        case this.languagesList[1]:
          return language2;
        case this.languagesList[2]:
          return language3;
        default:
      }
  }

  handleClick(l) {
    this.setState({
      language: l,
    });
  }

  render() {
    return (
      <div className="container-fluid">
      <div className="row" style={{marginTop: 40 + 'px', paddingLeft: 4 + '%', paddingRight: 4 + '%'}}>
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="row">
            <div className="col-12">
                <Organism_Person
                checkLanguage = {(l1, l2, l3) => this.checkLanguage(l1,l2,l3)}
                onClick={l => this.handleClick(l)}
                languages={this.languagesList}
                />
            </div>
            </div>
        </div>
        <div className="d-none d-sm-block col-6 col-lg-4 col-xl-3">
          <div className="row">
            <Organism_Drawings_1/>
            </div>
        </div>
        <div className="d-none d-lg-block col-4 col-xl-3">
          <div className="row">
            <Organism_Drawings_2/>
            </div>
            </div>
        <div className="col-12 col-xl-3" style={{marginTop: 2 + '%'}}>
           <div className="row">
            <Organism_DiesUndDas
              checkLanguage = {(l1, l2, l3) => this.checkLanguage(l1,l2,l3)}
            />
            </div>
        </div>
        </div>

        <Organism_Footer/>
    </div>
    );
  }
}

export default App;
