import React from 'react';
import axios from "axios";

class StudentList extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            studentList: []
        }
    }

componentWillMount() {
   axios
   .get('/students') 
   .then(response => this.setState({studentList: response.data}));
}

render() {
    const List = this.state.studentList;
    return (
        <div>
            <select>{List.map((eachStudent) => <option key= {eachStudent.id}>{eachStudent.fName}</option>)}</select>
        </div>
    );
  }
};

export default StudentList;