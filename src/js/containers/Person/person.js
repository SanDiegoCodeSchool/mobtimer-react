import React from 'react';
import ClassNames from 'classnames';
import {removePeople} from '../People/peopleActions'

class Person extends React.Component {
    constructor(props) {
        super(props);
    }
  handleClick() {
    const {dispatch} = this.props; 
    dispatch(removePeople(this.props.index));
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
      </li>
    );
  }
};

export default Person;