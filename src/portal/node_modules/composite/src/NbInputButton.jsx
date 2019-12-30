import React, { Component } from 'react';
import {NbButton, NbInput} from 'basic';
 
class NbInputButton extends Component {
  render() {
    const { handleOnclick } = this.props;
 
    return (
      <div>
          <NbButton onClick={handleOnclick}>Button</NbButton>
          <NbInput/>
      </div>
    );
  }
}
 
export default NbInputButton;
