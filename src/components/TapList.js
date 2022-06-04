import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <React.Fragment>

<ul class="list-group">
      <div>
        {props.tapList.map((tap) => 
          <div>
            <hr />
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
  </ul>
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};

export default TapList