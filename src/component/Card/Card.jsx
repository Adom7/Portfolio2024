import React, { Component } from "react";
import "./Card.css";
import cardLogo from '../../media/card-logo.png'


class Card extends Component {
  render() {
    return (
        <div className="card-master">
            <img src={cardLogo} />
        </div>
    );
  }
}

export default Card;
