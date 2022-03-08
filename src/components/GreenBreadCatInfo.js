import React from "react";
import "./GreenBreadCatInfo.css";
import Card from 'react-bootstrap/Card';

function GreenBreadCatInfo(props) {
  return (
    <Card>
      <Card.Body className="bread-info-card">        
        <Card.Title className="fav-breed__title">{props.title}</Card.Title>
        <p className="fav-breed__discription">{props.discription}</p>
        <button className="btn">Add to Fav</button>
      </Card.Body>
    </Card>
  );
}

export default GreenBreadCatInfo;
