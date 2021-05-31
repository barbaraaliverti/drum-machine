import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

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

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this); //função - toca o som
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  //The componentDidMount() method runs after the component output has been rendered to the DOM
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      
      this.playSound();
    }
  }
  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  
  render() {
    return (
      <div 
        id={this.props.clipId} 
        className="drum-pad btn btn-light col-3"
        onClick={this.playSound}
        >
        <a>{this.props.keyTrigger}</a> 
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.clip}
          />
                 
      </div>
    );
  }  
}

class PadBank extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
        <DrumPad
          clip={padBankArr[i].url}
          clipId={padBankArr[i].id}
          keyCode={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          updateDisplay={this.props.updateDisplay}
        />
        );
      });
   
    return <div className='pad-bank'>{padBank}</div>;
  }  
}

class ToggleBank extends React.Component {
  constructor(props) {
    super(props);    
    console.log(props);
  } 
  
  render() {
    return(
      <div id="bank-container">
        <h4 className="title">bank</h4>
        <div className="btn-group btn-group-toggle">              

            <input 
              className="hidden" 
              id="bank1" 
              type="radio" 
              name="options"
              value={this.props.leftLabel}
              autocomplete="off" 
              onChange={this.props.onChange}
              checked={this.props.checked}
            >                
            </input>
            <label id="label1" for="bank1" className="btn btn-secondary select-bank">
                {this.props.leftLabel}
            </label>


            <input 
              className="hidden" 
              id="bank2" 
              type="radio" 
              name="options"
              value={this.props.rightLabel}
              autocomplete="off"
              onChange={this.props.onChange}
              checked={!this.props.checked}
            >              
            </input>
            <label id="label2" for="bank2" className="btn btn-secondary select-bank">
                {this.props.rightLabel}
            </label>
         </div>
      </div>     
    );
  }  
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display-container">
        <h4 className="title">now playing</h4>
        <div id="display">{this.props.display}</div>
      </div>
    )
  }
}

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
