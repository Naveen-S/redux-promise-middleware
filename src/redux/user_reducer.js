import { FETCH_USER_SUCCESS } from '../actions/types';
const user_reducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS: {
            return {
                ...action.payload.data
            }
        }
        default: {
            return state;
        }
    }
}

export default user_reducer;