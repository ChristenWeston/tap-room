import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  
  return (
    <React.Fragment>

      <h3>{props.brand} - {props.name}</h3>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Price: {props.price}</p>
      <p>Available Pints: {props.availablePints}</p>
    </React.Fragment>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  availablePints: PropTypes.number,
  id: PropTypes.string
}

export default Tap;