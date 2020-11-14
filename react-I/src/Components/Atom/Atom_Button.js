import React, { Component } from 'react';
import styled from 'styled-components';

const LanguageButton = styled.label`
    background: transparent;
    color: black;
    transition: none;
    font-family: 'gill', sans-serif;
    font-size: 3.9vw;
    @media (min-width: 576px) {
        font-size: 1.95vw; }
    @media (min-width: 992px) {
        font-size: 1.3vw; }
    @media (min-width: 1440px) {
        font-size: 0.975vw; }

    &:hover{
      background: black;
      color: white;
    }

    &:active{
      background: black;
      color: white;
    }

    &:focus{
      box-shadow: none;
    }
`;


function Atom_Button(props) {

  var languageButton =
  <LanguageButton className="btn btn-secondary" onClick={props.onClick}>
    <input type="radio" name={props.set} id={props.text} autocomplete="off"/>{props.text}
  </LanguageButton>

  if(props.index == 0){
    languageButton = <LanguageButton className="btn btn-secondary active" onClick={props.onClick}>
        <input type="radio" name={props.set} id={props.text} autocomplete="off" checked/>{props.text}
      </LanguageButton>
}

if(props.index == 2){
  languageButton = <LanguageButton className="btn btn-secondary disabled" onClick="">
      <input type="radio" name={props.set} id={props.text} autocomplete="off" checked/>{props.text}
    </LanguageButton>
}

  return (
    languageButton
  );
}

export default Atom_Button;
