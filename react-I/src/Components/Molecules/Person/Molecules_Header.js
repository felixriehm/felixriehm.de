import React, { Component } from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
    background-image: url("/img/007.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 47%;
    padding-bottom: 29%;
    margin-bottom: 16%;
    display: inline-block;
`;

const PageTitleBase = styled.div`
      color: black;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: cover;
      background-position: center;
      line-height: normal;
      font-family: 'bernard', serif;
  `;


const PageTitleOne = PageTitleBase.extend`
    background-image: url("/img/title_bg_1.jpg");
    font-size: 37vw;
    @media (min-width: 576px) {
        font-size: 18.5vw; }
    @media (min-width: 992px) {
        font-size: 12.3vw; }
    @media (min-width: 1440px) {
        font-size: 9.2vw; }
`;

const PageTitleTwo = PageTitleBase.extend`
    background-image: url("/img/title_bg_2.jpg");
    font-size: 17vw;
    @media (min-width: 576px) {
        font-size: 8.5vw; }
    @media (min-width: 992px) {
        font-size: 5.6vw; }
    @media (min-width: 1440px) {
        font-size: 4.2vw; }
`;

function Molecules_Header(props) {
  return (
    <PageTitle>
          <PageTitleOne>FELIX</PageTitleOne>
          <PageTitleTwo>RIEHM</PageTitleTwo>
      </PageTitle>
  );
}

export default Molecules_Header;
