import * as types from '../actionTypes/authActionTypes';
import axios from 'axios';


export const rolesFetched = () => ({
    type: types.FETCH_ROLES_SUCCESS,
    payload
})

export const fetchRolesFailed = () => ({
    type: types.FETCH_ROLES_FAILED,
    payload
})

