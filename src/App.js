import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import PadBank from '../src/components/PadBank/index';
import ToggleBank from '../src/components/ToggleBank/index';
import Display from '../src/components/Display/index';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit'
    };
    //this.toggleState = this.toggleState.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  
  selectBank() {
    console.log(this.state);
      if (this.state.currentPadBankId === 'Heater Kit') {
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit',
          toggle: !this.state.toggle
        });
        console.log(this.state.currentPadBankId);
      } 
      if (this.state.currentPadBankId === 'Smooth Piano Kit') {
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit',
          toggle: !this.state.toggle
        });
      }    
  }
  
  displayClipName(name) {
    this.setState({
      display: name
    });
    setTimeout(() => this.clearDisplay(), 1000)
  };
    
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  
  render() {    
    return (
      <div id="container">
        <div id="drum-machine" className="text-center shadow">
            <div className="card-body">
              <h1 id="drum-title" class="card-title title">DRUM MACHINE</h1>
                <div className="row">       
                  <div id="drum-pad-buttons" className="col-sm-8">
                    <PadBank
                        currentPadBank={this.state.currentPadBank}
                        updateDisplay={this.displayClipName}
                      />
                  </div>
                  <div id="controls" class="col-sm-4">
                    <ToggleBank 
                      leftLabel="Heater Kit" 
                      rightLabel="Smooth Piano"             
                      onChange={this.selectBank}
                      checked={this.state.toggle}
                      />
                    <Display display={this.state.display}/>
                  </div>                                   
                </div>
            </div>          
          <footer>
            <div className="text-center"><a id="author" href='https://github.com/barbaraaliverti' target="_blank" rel="noreferrer"><h5>by bárbara aliverti</h5></a></div>
          </footer>            
          </div>
       </div>
    )
  }
}

export default App;
