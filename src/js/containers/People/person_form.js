import React from 'react';
import axios from "axios";

import {updatePeople, getStudents, selectStudent} from './peopleActions';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      name: '',
      id: null
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(getStudents());
  }

  handleOptionChange(event) {
    const { dispatch } = this.props;
    console.log('event.target', event.target);
    this.setState({id: event.target.value })
    // dispatch(selectStudent(event.target.value));
  }

  handleAdd(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(updatePeople(this.state.id));
  }

  render() {
    const {studentList} = this.props;
    console.log(this.props.studentList);
    return (
      <form onSubmit={this.handleAdd} className="people-form">
        <select onChange={this.handleOptionChange} value={this.state.id}>
              <option>Please Select Your Name!</option>
              {studentList.map((eachStudent) => <option value={eachStudent.id} key={eachStudent.id}>{eachStudent.fName} {eachStudent.lName}</option>)}
        </select>
        <button type="submit">Add</button>
      </form>
    );
  }
};



export default PersonForm;