import { Component } from "react";
import "./youtube-color.css";
import CustomCards from "../card/cards";

class YoutubeButton extends Component {
  state = {
    isClick: false,
    text1: "Subscribe",
    text2: "Subscribed",
    cards: [], // Array to hold data for cards
  };

  ClickStatus = () => {
    this.setState((prevState) => ({
      isClick: !prevState.isClick,
    }));
  };

  addCard = () => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, {}], // Add an empty object as data for a new card
    }));
  };

  deleteCard = (index) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <>
        <button
          className={this.state.isClick ? "subscribed" : "subscribe"}
          onClick={this.ClickStatus}
        >
          {this.state.isClick ? this.state.text2 : this.state.text1}
        </button>
        {this.state.isClick ? (
          <h2>Thanks for subscribing</h2>
        ) : (
          <h2>Please subscribe</h2>
        )}

        {this.state.isClick && (
          <button onClick={this.addCard}>Add Cards</button>
        )}

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.cards.map((item, index) => (
            <CustomCards
              key={index}
              index={index}
              deleteCard={this.deleteCard}
            />
          ))}
        </div>
      </>
    );
  }
}

export default YoutubeButton;
