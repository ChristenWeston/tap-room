
import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function NewTapForm(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, availablePints: parseInt(event.target.availablePints.value), id: v4()});
  }

  return (
    <React.Fragment>
      <div className="card bodyFont p-4 x-50 mx-auto" style={{backgroundColor: "white"}}>
        <h1 className="headingFont" style={{color: "black"}}>Add New Keg to Tap List</h1>
        <hr />
        <ReusableForm 
          formSubmissionHandler={handleNewTapFormSubmission}
          buttonText='Add Keg to Tap List' />
      </div>
    </React.Fragment>
  )
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm