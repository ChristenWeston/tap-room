import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import EditTapForm from './EditTapForm';
import TapData from './TapData';
import ProgressBar from 'react-bootstrap/ProgressBar';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: TapData,
      selectedTap: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap =this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null
    });
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const editedMainTapList = this.state.mainTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      mainTapList: editedMainTapList,
      editing: false,
      selectedTap: null
    });
  }

  handleSellingPints = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0]
    {
      selectedTap.availablePints--;
      const newMainTapList = this.state.mainTapList.filter(tap => tap.id !==id).concat(selectedTap);
      this.setState({mainTapList:newMainTapList});
    } 
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTapForm tap = {this.state.selectedTap} onEditTap = {this.handleEditingTapInList}/>
      buttonText = "Return to Tap List";
    } else if(this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap={this.state.selectedTap}
        onClickingDecrease={this.handleSellingPints}
        onClickingDelete={this.handleDeletingTap}
        onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}/>
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList} onTapSelection = {this.handleChangingSelectedTap}/>
      buttonText = "Add Tap";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-primary">{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapControl;