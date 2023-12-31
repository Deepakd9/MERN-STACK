import axios from 'axios';

import { ADDNEW_TODO, GETAll_Todo, TOGGLE_TODO, UPDATE_TODO } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, {data});
        dispatch({type: ADDNEW_TODO, payload: res.data});
    } catch (error) {
        console.log('Error while calling addNewTodo API', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({type: GETAll_Todo, payload: res.data});
    } catch (error) {
        console.log()
        
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({type: TOGGLE_TODO, payload: res.data});
    } catch (error) {
        console.log()
        
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, {data});
        dispatch({type: UPDATE_TODO, payload: res.data});
    } catch (error) {
        console.log('Error while calling updateTODO API', error.message);
        
    }
}