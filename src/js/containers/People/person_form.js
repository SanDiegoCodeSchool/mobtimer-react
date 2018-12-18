import React from 'react';
import axios from "axios";

import {updatePeople, getStudents, selectStudent} from './peopleActions';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: ''
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(getStudents());
  }

  handleChange(event) {
    const { dispatch } = this.props;
    this.setState({name: event.target.value })
    dispatch(selectStudent(event.target.value));
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    console.log(event.target);
    dispatch(updatePeople(this.state.name));
  }

  render() {
    const {studentList} = this.props;
    console.log(this.props.studentList);
    return (
      <form onSubmit={this.handleSubmit} className="people-form">
        <select onChange={this.handleChange} value={this.state.name}>
              <option>Please Select Your Name!</option>
              {studentList.map((eachStudent) => <option key={eachStudent.id}>{eachStudent.fName} {eachStudent.lName}</option>)}
        </select>
        <button type="submit">Add</button>
      </form>
    );
  }
};



export default PersonForm;