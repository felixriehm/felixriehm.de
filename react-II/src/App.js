import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Organism/Header.js';
import Body from './Components/Organism/Body.js';
import { theme } from './Theme.js';

const Background = styled.div`
  background-image: url("img/bg_inv.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  max-width: ${props => props.theme.backgroundMaxWidthLg};
  margin: 0 auto;
  box-shadow: 0px 0px 14px 10px rgba(0, 0, 0,0.77);
`;

const BlurredBackground = styled.div`
  background-image: url("img/bg_inv_blur.jpg");
  background-repeat: repeat-y;
  background-size: cover;
`;

const ContentWrapper = styled.div`
    max-width: ${props => props.theme.contentMaxWidthLg};
    margin: 0 auto;
`;

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
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <BlurredBackground>
              <Background>
                <ContentWrapper>
                  <Header checkLanguage = {(l1, l2, l3) => this.checkLanguage(l1,l2,l3)} />
                  <Body checkLanguage = {(l1, l2, l3) => this.checkLanguage(l1,l2,l3)}/>
                </ContentWrapper>
              </Background>
            </BlurredBackground>
          </React.Fragment>
        </ThemeProvider>
    );
  }
}

export default App;
