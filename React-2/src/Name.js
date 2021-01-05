
import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        Hi My name is <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default Name;