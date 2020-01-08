import { ADD_ERROR, CLEAR_ERRORS } from '../action-types';

export const addError = (error) => ({type: ADD_ERROR, error});

export const clearErrors = () => ({type: CLEAR_ERRORS});