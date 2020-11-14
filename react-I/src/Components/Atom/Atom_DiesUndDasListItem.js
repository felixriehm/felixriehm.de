import React, { Component } from 'react';

function Atom_DiesUndDasListItem(props) {

  let icon = <i className="fas fa-external-link-alt icon"></i>;

  if(props.icon == false){
    icon = '';
  }

  return (
    <a href={props.link} data-lightbox={props.set} data-title={props.description}>{props.text} {icon}</a>
  );
}

export default Atom_DiesUndDasListItem;
