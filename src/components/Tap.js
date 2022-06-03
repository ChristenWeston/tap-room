import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  const pintsCheck = props.availablePints === 0 ? "Keg Empty" : props.availablePints;
  return (
    <React.Fragment>
      <div onClick= {() => props.whenTapClicked(props.id)}>
        <h3>{props.brand} - {props.name} | ${props.price} </h3>
        <p>{props.alcoholContent}%</p>
        <p>Available Pints: {pintsCheck}</p>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  availablePints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
}

export default Tap;