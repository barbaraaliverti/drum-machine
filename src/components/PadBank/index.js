import React from 'react';
import DrumPad from '../DrumPad/index';

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
  

export default PadBank;