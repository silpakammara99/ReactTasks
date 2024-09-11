import { Component } from "react";
import "./Bulb.css";

class Bulb extends Component {
  
    state = {
      isOn: false,
    };
  

  toggleLight = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  render() {
    return (
      <div>
        <div onClick={this.toggleLight}>
          {
            this.state.isOn ? (
              <img src="https://tse4.mm.bing.net/th?id=OIP.565TcOat3QSHtMsuwdW4WwAAAA&pid=Api&P=0&h=180" />
            ) : (
              <img src="https://tse4.mm.bing.net/th?id=OIP.g6ELgpMBfTe6728vdTQw0wHaHk&pid=Api&P=0&h=180" />
            )
          }
        </div>
        <button onClick={this.toggleLight}>
          Turn {this.state.isOn ? "Off" : "On"}
        </button>
      </div>
    );
  }
}

export default Bulb;
