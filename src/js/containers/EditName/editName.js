import React from 'react';
//import ClassNames from 'classnames';
import {newNickname, updateName} from '../People/peopleActions'

class EditName extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

  handleEdit(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    console.log(event.target.value);
    dispatch(updateName(value));//updates the new name and holds in editName state
  }

  handleSave(){
    const { dispatch, editObject, editName, editIndex } = this.props;
    dispatch(newNickname(editObject, editName, editIndex));
  }

  render() {
    const {editStatus, editName} = this.props;
    if(editStatus){
        return (
        <div>
            <input type='text' onChange={this.handleEdit} value={ editName } />
            <a href="#" className="edit" onClick={this.handleSave}>Save</a>
        </div>
        );
    }
    else {
        return null;
    }
}
};


export default EditName;

