import React from 'react';
import axios from "axios";

import {updatePeople} from './peopleActions';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [],
      name: ''
    };
  }

  componentWillMount() {
    axios
    .get('/students') 
    .then(response => this.setState({studentList: response.data}));
    }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    event.preventDefault();

   if(!this.state.name == '') dispatch(updatePeople(this.state.name));

    // this.setState({ name: '' });
    // this.refs.nameInput.getDOMNode().focus();
  }

  render() {
    const List = this.state.studentList;
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="people-form">
        <select onChange={this.handleChange.bind(this)} value={this.state.name}>
              <option>Please Select Your Name!</option>
              {List.map((eachStudent) => <option key= {eachStudent.id} >{eachStudent.fName} {eachStudent.lName}</option>)}
        </select>
        {/* <input type="text" ref="nameInput" onChange={this.handleChange.bind(this)} value={this.state.name} placeholder="Your name" /> */}
        <button type="submit">Add</button>
      </form>
    );
  }
};



export default PersonForm;