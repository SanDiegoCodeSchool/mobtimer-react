import React from 'react';
import {updatePeople} from './peopleActions';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    event.preventDefault();

   if(!this.state.name == '') dispatch(updatePeople(this.state.name));

    this.setState({ name: '' });
    this.refs.nameInput.getDOMNode().focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="people-form">
        <input type="text" ref="nameInput" onChange={this.handleChange.bind(this)} value={this.state.name} placeholder="Your name" />
        <button type="submit">Add</button>
      </form>
    );
  }
};

export default PersonForm;