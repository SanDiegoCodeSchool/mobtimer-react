import React from 'react';
import axios from 'axios';

import { updatePeople, getStudents, updateSelected } from './peopleActions';

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getStudents());
    }

    handleOptionChange(event) {
        const { dispatch, apiData } = this.props;
        const value = event.target.value;
        const student = apiData.find(student => student.id == value);
        dispatch(updateSelected(student));
    }

    handleAdd(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        event.preventDefault();
        dispatch(updatePeople(value));
    }

    render() {
        const { apiData } = this.props;
        return (
            <form className="people-form">
                <select onChange={this.handleOptionChange} value={this.value}>
                    <option value="select">Please Select Your Name!</option>
                    {apiData.map(eachStudent => (
                        <option value={eachStudent.id} key={eachStudent.id}>
                            {eachStudent.fName} {eachStudent.lName}
                        </option>
                    ))}
                </select>
                <button onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
}
export default PersonForm;
