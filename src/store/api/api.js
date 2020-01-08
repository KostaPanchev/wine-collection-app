import { DBConfig } from '../../config';
import Wine from '../../models/Wine';

const api = DBConfig.APIUrl;

export const fetchWines = async (query = '_sort=id&_order=desc') => {
    const response = await fetch(`${api}/wines/?${query}`);
    const data = await response.json();
    return data.map(wine => new Wine(wine));
};

export const getSelectedWine = async (id) => {
    const response = await fetch(`${api}/wines/${id}`);
    const data = await response.json();
    return new Wine(data);
};

export const addWine = async (wine) => {
    const response = await fetch(`${api}/wines`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(wine)
    });
    const data = await response.json();
    return new Wine(data);
};

export const updateWine = async (wine) => {
    const response = await fetch(`${api}/wines/${wine.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(wine)
    });
    const data = await response.json();
    return new Wine(data);
};

export const deleteWine = async (id) => {
    const response = await fetch(`${api}/wines/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const data = await response.json();
    return new Wine(data);
};