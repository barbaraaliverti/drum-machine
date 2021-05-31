import React from 'react';

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
          <span>{this.props.keyTrigger}</span> 
          <audio
            className='clip'
            id={this.props.keyTrigger}
            src={this.props.clip}
            />
                   
        </div>
      );
    }  
  }

export default DrumPad;