const defaultState = {
    mobTimeTotal: '',
    response: ''
};

export default function intervalReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CALCULATE_MOB_TOTAL': {
            return {
                ...state,
                mobTimeTotal: payload.mobTimeTotal
            };
        }

        case 'POST_RESULTS_FULFILLED': {
            return {
                ...state,
                response: payload
            };
        }
        case 'CHANGE_NAMES': {
            const names = payload.mobParticipants;
            console.log(names);
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}
