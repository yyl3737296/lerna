import React, { Component } from 'react';
 
class NbInput extends Component {
  render() {
    const { handleOnclick } = this.props;
 
    return (
      <input onClick={handleOnclick}/>
    );
  }
}
 
export default NbInput;
