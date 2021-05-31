import React from 'react';

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

export default ToggleBank;