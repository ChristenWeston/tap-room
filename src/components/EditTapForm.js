import React from 'react'
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditTapForm(props) {
  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      alcoholContent: event.target.alcoholContent.value, 
      availablePints: parseInt(event.target.availablePints.value), 
      price: parseInt(event.target.price.value), 
      id: tap.id
    });
  }
  return (
    <React.Fragment>
      <div>
      <h1>Edit This Tap</h1>
        <hr />
      <ReusableForm
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText='Update Tap' />
      </div>
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func
}

export default EditTapForm
