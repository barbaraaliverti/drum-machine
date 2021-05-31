import React from 'react';

class Display extends React.Component {
    // eslint-disable-next-line no-useless-constructor
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

export default Display;