const defaultState = {
people: [],
currentDriverIndex: 0,
currentDriver: ''
}

export default function peopleReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_PEOPLE': {
            return {
                ...state,
                people: [
                    ...state.people,
                    payload.name
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
    default: {
        return state;
    }
  }
}
