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
        default: {
            return state;
        }
    }
}
