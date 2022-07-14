import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title"> {props.sname} </h3>
          <a href="./camp1.js" target="_blank">
            <button>{props.num}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;