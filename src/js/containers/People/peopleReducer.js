const defaultState = {
    mobParticipants: [],
    currentDriverIndex: 0,
    currentDriver: '',
    currentDriverId: '',
    editStatus: false,
    editName: '',
    editIndex: '',
    apiData: [],
    selectedStudent: {}
};

export default function peopleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_PEOPLE': {
            return {
                ...state,
                mobParticipants: [
                    ...state.mobParticipants,
                    {
                        name:
                            state.selectedStudent.fName +
                            ' ' +
                            state.selectedStudent.lName,
                        id: state.selectedStudent.id,
                    }
                ],
                currentDriver: state.mobParticipants[state.currentDriverIndex],
                currentDriverId: state.mobParticipants[state.currentDriverId],
                selectedStudent: {}
            };
        }
        case 'UPDATE_SELECTED': {
            return {
                ...state,
                selectedStudent: payload.value
            };
        }
        case 'EDIT_NAME': {
            const newPeople = [...state.mobParticipants];
            return {
                ...state,
                editStatus: true,
                editName: payload.name,
                editIndex: payload.index,
                mobParticipants: newPeople
            };
        }
        case 'UPDATE_NAME' : {
            return {
                ...state,
                editName: payload.value
            };
        }
        case 'NEW_NICKNAME' : {
            const newPeople = [...state.mobParticipants];
            newPeople[state.editIndex].name = state.editName;
            return{ 
                ...state,
                editStatus: false,
                editName: '',
                mobParticipants: newPeople
            };
        }
        case 'REMOVE_PEOPLE': {
            const newPeople = [...state.mobParticipants];
            newPeople.splice(payload.index, 1);
            return {
                ...state,
                mobParticipants: newPeople
            };
        }
        case 'SHUFFLE_PEOPLE': {
            return {
                ...state,
                mobParticipants: payload.previousPeople,
                currentDriver: payload.previousPeople[state.currentDriverIndex]
            };
        }
        case 'SKIP_PEOPLE': {
            return {
                ...state,
                currentDriverIndex: payload.nextDriverIndex,
                currentDriver: state.mobParticipants[payload.nextDriverIndex]
            };
        }
        case 'GET_STUDENTS_FULFILLED': {
            return {
                ...state,
                apiData: payload
            };
        }
        default: {
            return state;
        }
    }
}
