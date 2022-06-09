import * as types from "../types";

export const getRolesSuccess = (payload) => ({
    type: types.GET_ROLES_SUCCESS,
    payload,
  });

  export const fetchBooks = () => (dispatch) => {

    axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books').then((res) => {
      dispatch(getRolesSuccess(res.data));
    }).catch((err) => {
      const erroMesage = err.message;
      console.log(err)
    //   dispatch(fetchBookFailure(erroMesage));
    });
  };
