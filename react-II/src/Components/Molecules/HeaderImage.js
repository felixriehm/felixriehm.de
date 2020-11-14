import React, { Component } from 'react';
import styled from 'styled-components';
import german from '../../Content/German/Header.json';
import english from '../../Content/English/Header.json';
import japanese from '../../Content/Japanese/Header.json';

const Title = styled.div`
  display: inline-block;
  position: relative;
`;

const TitleBase = styled.div`
      color: black;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: cover;
      background-position: center;
      font-family: ${props => props.theme.fontOswald};
  `;

  const TitleOne = TitleBase.extend`
      background-image: url("/img/title_bg_1.jpg");
      font-size: 14rem;
      line-height: 14rem;
      margin-left: -14px;
      margin-top: -32px;
  `;

  const TitleTwo = TitleBase.extend`
      text-transform: uppercase;
      font-weight: 300;
      background-image: url("/img/title_bg_2.jpg");
      font-size: 3.7rem;
      line-height: 3.7rem;
      margin-left: -4px;
  `;

const Avatar = styled.img`
  border-radius: 50%;
  position: absolute;
  width: 90%;
  bottom: -187px;
  right: -23px;
  z-index: -1;
  border: 2px solid white;
`;

function HeaderImage(props) {
  let data = props.checkLanguage(german,english,japanese);

  return (
    <Title>
      <TitleOne>
        {data.TitleOne}
      </TitleOne>
      <TitleTwo>
        {data.TitleTwo}
      </TitleTwo>
      <Avatar src={data.AvatarURL}/>
    </Title>
  );
}

export default HeaderImage;
