import axios from 'axios';
import { rolesFetched, fetchRolesFailed } from '../actions/authAction';


const baseURL = 'https://afrilearn-backend-01.herokuapp.com/api/v1/'

export const getRoles = () => {
    return function (dispatch) {
        axios
            .get(`${baseURL}auth/roles`,
            {
                headers: {
                    // 'Authorization': 'Bearer ' + token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            )
            .then((response) => {
                console.log('GET note response', response.data)
                dispatch(rolesFetched(response.data))
            })
            .catch((error) => dispatch(fetchRolesFailed(error.response.message)))
    }
}