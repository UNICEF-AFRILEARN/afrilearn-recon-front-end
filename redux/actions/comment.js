import * as types from "../types/classes";
import axios from "axios";
import { fetchCommentsSuccess } from "./subject";

const HerokuServer = "https://afrilearn-backend-01.herokuapp.com/";
const HerokuURL = HerokuServer + "api/v1/";
const url = HerokuURL;
const headers = (token) => {
  return { headers: { "Content-type": "application/json" }, token: token };
};

export const likeLessonCommentStart = () => ({
  type: types.MAKE_ANNOUNCEMENT_START,
});
export const likeLessonCommentSuccess = (payload) => ({
  type: types.MAKE_ANNOUNCEMENT_SUCCESS,
  payload,
});
export const likeLessonCommentFail = (error) => ({
  type: types.MAKE_ANNOUNCEMENT_FAIL,
  payload: error,
});

export const likeLessonComment = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}comments/like-comment`,
      headers: headers(token),
      data,
    });
  };
};
export const unlikeLessonComment = (data, token) => {
  return function (dispatch) {
    axios({
      method: "delete",
      url: `${url}comments/unlike-comment`,
      headers: headers(token),
      data,
    });
  };
};
export const addLessonComment = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}comments`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
    });
  };
};

export const addResponse = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}comments/reply/add`,
      headers: headers(token),
      data,
    }).then((res) => {
      console.log(res);
    });
  };
};
export const updateLessonComment = (data, commentId, token) => {
  return function (dispatch) {
    axios({
      method: "patch",
      url: `${url}comments/${commentId}`,
      headers: headers(token),
      data,
    }).then((res) => {
      console.log(res);
    });
  };
};
export const deleteLessonComment = (commentId, token) => {
  return function (dispatch) {
    axios({
      method: "delete",
      url: `${url}comments/${commentId}`,
      headers: headers(token),
    }).then((res) => {
      console.log(res);
    });
  };
};

// updateLessonComment(data, commentId) {
//     return axios({
//       method: "patch",
//       url: `${this.url}comments/${commentId}`,
//       headers: this.headers(),
//       data,
//     });
//   },

// export const likeLessonComment = (data, token) => {
//   return function (dispatch) {
//     // dispatch(likeLessonCommentStart())
//     axios({
//       method: "post",
//       url: `${url}comments/like-comment`,
//       headers: headers(token),
//       data,
//     })
//       .then((res) => {
//         // dispatch(likeLessonCommentSuccess(res));
//       })
//       .catch((res) => {
//         // dispatch(likeLessonCommentFail(res));
//       });
//   };
// };
