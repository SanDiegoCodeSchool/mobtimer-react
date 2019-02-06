const defaultState = {
    people: [],
    currentDriverIndex: 0,
    currentDriver: '',
    currentDriverId: '',
    studentList: [],
    selectedStudent: {}
};

export default function peopleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_PEOPLE': {
            return {
                ...state,
                people: [
                    ...state.people,
                    {
                        name:
                            state.selectedStudent.fName +
                            ' ' +
                            state.selectedStudent.lName,
                        id: state.selectedStudent.id
                    }
                ],
                currentDriver: state.people[state.currentDriverIndex],
                currentDriverId: state.people[state.currentDriverId],
                selectedStudent: {}
            };
        }
        case 'UPDATE_SELECTED': {
            return {
                ...state,
                selectedStudent: payload.value
            };
        }
        case 'REMOVE_PEOPLE': {
            const newPeople = [...state.people];
            newPeople.splice(payload.index, 1);
            return {
                ...state,
                people: newPeople
            };
        }
        case 'SHUFFLE_PEOPLE': {
            return {
                ...state,
                people: payload.previousPeople
            };
        }
        case 'SKIP_PEOPLE': {
            return {
                ...state,
                currentDriverIndex: payload.nextDriverIndex,
                currentDriver: state.people[payload.nextDriverIndex]
            };
        }
        case 'GET_STUDENTS_FULFILLED': {
            return {
                ...state,
                studentList: payload
            };
        }
        // case 'SELECT_STUDENT': {
        //     return {
        //         ...state,
        //         selectedStudent: payload.name
        //     }
        // }
        default: {
            return state;
        }
    }
}
