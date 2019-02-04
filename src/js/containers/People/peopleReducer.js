const defaultState = {
people: [],
currentDriverIndex: 0,
currentDriver: '',
studentList:[],
selectedStudent:''
}

export default function peopleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_PEOPLE': {
            return {
                ...state,
                people: [
                    ...state.people,
                    payload.id
                ],
                currentDriver: state.people[state.currentDriverIndex]
            };
        }
        case 'REMOVE_PEOPLE': {
            const newPeople = [...state.people];
            newPeople.splice(payload.index,1);
            return {
                ...state,
                people: newPeople
            };
        }
        case 'SHUFFLE_PEOPLE': {
            return {
                ...state,
                people: payload.previousPeople
            }
        }
        case 'SKIP_PEOPLE': {
            return {
                ...state,
                currentDriverIndex: payload.nextDriverIndex,
                currentDriver: state.people[payload.nextDriverIndex]
            }
        } 
        case 'GET_STUDENTS_FULFILLED': {
            console.log('payload',payload);
            return {
                ...state,
                studentList: payload
            }
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
