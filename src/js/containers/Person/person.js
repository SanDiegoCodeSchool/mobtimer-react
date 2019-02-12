import React from 'react';
import ClassNames from 'classnames';
import {removePeople, editName} from '../People/peopleActions';

class Person extends React.Component {
    constructor(props) {
        super(props);
    }
  handleClick() {
    const {dispatch} = this.props; 
    dispatch(removePeople(this.props.index));
  }
  handleEdit(){
    const { dispatch } = this.props;
    console.log(this.props);
    console.log(this.props.name);
    dispatch(editName(this.props.index, this.props.name));
  }

  render() {
    const {isCurrent} = this.props;
    var classes = ClassNames({
      active: isCurrent
    });

    return (
      <li className={classes}>
        <a href="#" className="remove" onClick={this.handleClick.bind(this)}>x</a>
        <span>{this.props.name}</span>
        <a href="#" className="edit" onClick={this.handleEdit.bind(this)}>Edit</a>
      </li>
    );
  }
};

export default Person;