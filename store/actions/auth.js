import * as types from "../types";
import axios from "axios";

export const getRolesSuccess = (payload) => ({
  type: types.GET_ROLES_SUCCESS,
  payload,
});

export const fetchRoles = () => (dispatch) => {
  axios
    .get("https://afrilearn-backend-01.herokuapp.com/api/v1/auth/roles")
    .then((res) => {
      console.log("Data from API call ==>", res);
      dispatch(getRolesSuccess(res.data));
    })
    .catch((err) => {
      const erroMesage = err.message;
      console.log(err);
      //   dispatch(fetchBookFailure(erroMesage));
    });
};
