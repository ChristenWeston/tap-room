import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  const pintsCheck = props.availablePints === 0 ? "Keg Empty" : props.availablePints;
  return (
    <React.Fragment>
  <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <hr />
    <div onClick= {() => props.whenTapClicked(props.id)}>
      <h3><span className="badge bg-success">${props.price}</span>  {props.brand} - {props.name} </h3>
      <h4>{props.alcoholContent}%</h4>
      <p>Available Pints: {pintsCheck}</p>
    </div>
    <span className="badge bg-primary rounded-pill">{pintsCheck}</span>
  </li>



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