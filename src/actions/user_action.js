import axios from 'axios';
import { FETCH_USER_SUCCESS } from './types';

export const fetchUsers = () => {
    const request = axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(request);
    return {
        type: FETCH_USER_SUCCESS,
        payload: request
    }
}

