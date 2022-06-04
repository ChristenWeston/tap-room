import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props) {
  const { tap, onClickingDelete, onClickingDecrease } = props;
  const pints = tap.availablePints === 0 ? "Keg empty" : tap.availablePints;
  const buyButton = tap.availablePints === 0 ? <p></p> : <button onClick={() => onClickingDecrease(tap.id)} className="btn btn-info">Buy Pint</button>
  return (
    <React.Fragment>
        <div className="headingFont card-header text-center text-black">Beer Details</div>
          <div className="card-body">
            <h1>Keg Details:</h1>
            <hr />
            <h3>Brand: {tap.brand}</h3>
            <h3>Beer Name: {tap.name}</h3>
            <hr />
            <p>Pints available: {pints}</p>
            <p>Price: ${tap.price}</p>
            <p>Alcohol Content: {tap.alcoholContent}%</p>
          </div>
          <div className="card-footer justify-content-center">
          {buyButton}
          <br/>
            <button onClick={props.onClickingEdit} className="btn btn-info">Update Tap</button>
            <button onClick={() => onClickingDelete(tap.id)} className="btn btn-info">Delete Tap</button>
          </div>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrease: PropTypes.func
}

export default TapDetail