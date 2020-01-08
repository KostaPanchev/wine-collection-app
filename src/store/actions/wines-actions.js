import {
    UPDATE_WINES_LIST,
    WINES_LOADED,
    UPDATE_SELECTED_WINE,
    ADD_WINE,
    FETCHING_WINES,
    UPDATE_WINE,
    DELETE_WINE
} from '../action-types';

import * as DB from '../api/api';
import { addError } from './index';


// action creators
// =========================================================
const updateWinesList = (wines) => ({type: UPDATE_WINES_LIST, wines});

const updateSelectedWine = (wine) => ({type: UPDATE_SELECTED_WINE, payload: wine});

const winesLoaded = () => ({type: WINES_LOADED});

const startFetchingWines = () => ({type: FETCHING_WINES, payload: true});

const addWineToStore = (wine) => ({type: ADD_WINE, payload: wine});

const deleteWineFromStore = (wineId) => ({type: DELETE_WINE, payload: wineId});

const updateWineInStore = (wine) => ({type: UPDATE_WINE, payload: wine});

const stopFetchingWines = () => {
    return (async (dispatch) => {
        window.setTimeout(() => {
            dispatch({type: FETCHING_WINES, payload: false});
        }, 500);
    });
};

// =========================================================


export const getWines = (query = '') => {
    return (async (dispatch) => {
        dispatch(startFetchingWines());
        try {
            const wines = await DB.fetchWines(query);
            dispatch(updateWinesList(wines));
        } catch (err) {
            dispatch(updateWinesList([]));
            dispatch(addError(`${err.message} - [wines-actions.js / getAllWines]`));
        }
        dispatch(winesLoaded());
        dispatch(stopFetchingWines());
    });
};

export const getSelectedWine = (wineId) => {
    return (async (dispatch) => {
        if(!wineId){
            dispatch(updateSelectedWine(null));
            return;
        }
        dispatch(startFetchingWines());
        try {
            const json = await DB.getSelectedWine(wineId);
            dispatch(updateSelectedWine(json));
        } catch (err) {
            dispatch(updateWinesList([]));
            dispatch(addError(`${err.message} - [wines-actions.js / getSelectedWine]`));
        }
        dispatch(stopFetchingWines());
    });
};

export const saveWine = (wine) => {
    return(async (dispatch) => {
        dispatch(startFetchingWines());
        try {
            const newWine = await DB.addWine(wine);
            dispatch(addWineToStore(newWine));
        } catch (err) {
            dispatch(addError(`${err.message} - [wines-actions.js / saveWine]`));
        }
        dispatch(stopFetchingWines());
    });
};

export const updateWine = (wine) => {
    return(async (dispatch) => {
        dispatch(startFetchingWines());
        try {
            const newWine = await DB.updateWine(wine);
            dispatch(updateWineInStore(newWine));
        } catch (err) {
            dispatch(addError(`${err.message} - [wines-actions.js / saveWine]`));
        }
        dispatch(stopFetchingWines());
    });
};

export const deleteWine = (wineId) => {
    return(async (dispatch) => {
        dispatch(startFetchingWines());
        try {
            await DB.deleteWine(wineId);
            dispatch(deleteWineFromStore(wineId));
        } catch (err) {
            dispatch(addError(`${err.message} - [wines-actions.js / saveWine]`));
        }
        dispatch(stopFetchingWines());
    });
};