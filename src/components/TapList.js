import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>
      <h1 className="tapListHeading">Tap List</h1>
      <hr />

      <div>
        {props.tapList.map((tap) => 
          <div style={{backgroundColor: "#bdb76b"}}>
            <Tap
              whenTapClicked = {props.onTapSelection}
              name={tap.name}
              brand={tap.brand}
              price={tap.price}
              alcoholContent={tap.alcoholContent}
              availablePints = {tap.availablePints}
              id={tap.id}
              key={tap.id}/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};

export default TapList