import React from 'react';
import PeopleActions from '../actions/people_actions';

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
    event.preventDefault();

    PeopleActions.add(this.state.name);

    this.setState({ name: '' });
    this.refs.nameInput.getDOMNode().focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="nameInput" onChange={this.handleChange.bind(this)} value={this.state.name} />
        <button type="submit">add</button>
      </form>
    );
  }
};

export default PersonForm;