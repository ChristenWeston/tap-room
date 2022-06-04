import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
    <div class="form-group row">

      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          class="form-control"
          name="brand"
          placeholder="Brand" />
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Name" />
        <input
          type="number"
          class="form-control"
          min={1}
          name="price"
          placeholder="Price" />
        <input
          type="number"
          class="form-control"
          name="alcoholContent"
          placeholder="Alcohol Content %" />
        <input 
          type="number"
          class="form-control"
          min={1}
          name="availablePints"
          placeholder="Available Pints" />
          <button type='submit' class='btn btn-info'>{props.buttonText} </button>
      </form>
    </div>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  formText: PropTypes.string
}; 

export default ReusableForm;