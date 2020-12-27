import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hi, my name is {name}! <br />
      children is {children} <br />
      My favorite number is {favoriteNumber}
    </div>
  );
};
*/

class MyComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi, my name is {name}! <br />
        children is {children} <br />
        My favorite number is {favoriteNumber}
      </div>
    );
  }
}

/*
MyComponent.defaultProps = {
  name: 'default name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
*/

export default MyComponent;
