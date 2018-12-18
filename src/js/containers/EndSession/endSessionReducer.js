const defaultState = {
    mobTimeTotal:''
  };
    
export default function intervalReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CALCULATE_MOB_TOTAL': {
            return {
                ...state,
                mobTimeTotal: payload.mobTimeTotal
            }
        }
        default: {
            return state;
          }
    }
}
