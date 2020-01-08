import {
    UPDATE_WINES_LIST,
    FETCHING_WINES,
    WINES_LOADED,
    UPDATE_SELECTED_WINE,
    ADD_WINE,
    UPDATE_WINE,
    DELETE_WINE
} from '../action-types';

const initialState = {
    wines: [],
    winesLoaded: false,
    selectedWine: null,
    fetchingWines: false,
};

const winesReducer = (state = initialState, action) => {
    switch (action.type) {

    case UPDATE_WINES_LIST:
        return {
            ...state,
            wines: action.wines
        };
    
    case FETCHING_WINES:
        return {
            ...state,
            fetchingWines: action.payload
        };

    case WINES_LOADED:
        return {
            ...state,
            winesLoaded: true
        };

    case UPDATE_SELECTED_WINE:
        return {
            ...state,
            selectedWine: action.payload
        };

    case ADD_WINE:
        return {
            ...state,
            wines: [
                action.payload,
                ...state.wines
            ]
        };   

    case UPDATE_WINE: {
        const wines = state.wines.map(wine => wine.id === action.payload.id ? action.payload : wine);
        return {
            ...state,
            selectedWine: action.payload,
            wines
        };   
    }

    case DELETE_WINE:
    {
        const wines = state.wines.filter(wine => wine.id !== action.payload);
        return {
            ...state,
            selectedWine: null,
            wines
        };   
    }

    default:
        return state;
    }
};

export default winesReducer;