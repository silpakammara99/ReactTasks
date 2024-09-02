import { Component } from 'react';
import './Bulb.css'; // Import a CSS file for styling (optional)

class Bulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    return (
      <div>
        <div
          className={`bulb ${this.state.isOn ? 'on' : 'off'}`}
          onClick={this.toggleLight}
        >
          {/* Light bulb representation */}
        </div>
        <button onClick={this.toggleLight}>
          Turn {this.state.isOn ? 'Off' : 'On'}
        </button>
      </div>
    );
  }
}

export default Bulb;
