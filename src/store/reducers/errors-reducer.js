import { ADD_ERROR, CLEAR_ERRORS } from '../action-types';

const initialState = {
    errors: []
};

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ERROR:
        return {
            ...state,
            errors: [
                action.error, 
                ...state.errors
            ]
        };

    case CLEAR_ERRORS:
        return {
            ...state,
            errors: []
        };

    default:
        return state;
    }
};

export default errorsReducer;