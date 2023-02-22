import React from "react";

function IdCard(props) {
  return (
    <div className="container">
      <img src={props.image}  alt="profile" className="image"/>
      <div className="content">
        <p className="title">First name: {props.firstName}</p>
        <p className="sub-title">Last name: {props.lastName}</p>
        <p className="title">Gender: {props.gender}</p>
        <p className="title">Height: {props.height}</p>
        <p className="title">Birth: {props.birth.toDateString()}</p>
      </div>
    </div>  
  );
}

export default IdCard;
