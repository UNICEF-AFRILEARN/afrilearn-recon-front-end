import * as types from "../types";
import axios from "axios";
const HerokuServer = "https://afrilearn-backend-01.herokuapp.com/";
const HerokuURL = HerokuServer + "api/v1/";
const url = HerokuURL;
// const headers = (token) => {
//   let header = {};
//   if (fileupload) {
//     header["Content-type"] = "application/json";
//   }
//   if (token && token !== undefined) {
//     header["token"] = token;
//   }
//   return header;
// };
const headers = (token) => {
  return { headers: { "Content-type": "application/json" }, token: token };
};
export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECT_START,
});

export const fetchSubjectsSuccess = (subject) => ({
  type: types.FETCH_SUBJECT_SUCCESS,
  payload: subject,
});
export const fetchFavouriteSuccess = (subject) => ({
  type: types.FETCH_FAVOURITE_SUCCESS,
  payload: subject,
});
export const fetchUnfinished = (subject) => ({
  type: types.FETCH_UNFINISHED_SUCCESS,
  payload: subject,
});
export const fetchWeb = (subject) => ({
  type: types.FETCH_WEB_SUCCESS,
  payload: subject,
});
export const fetchCommentsSuccess = (subject) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: subject,
});
export const fetchSubjectsDetailsSuccess = (subject) => ({
  type: types.FETCH_SUBJECTDETAILS_SUCCESS,
  payload: subject,
});

export const fetchPastQuestionSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTION_SUCCESS,
  payload: subject,
});
export const fetchPastQuestionSubjSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTIONSUB_SUCCESS,
  payload: subject,
});

export const fetchStudentAnnouncenentSuccess = (subject) => ({
  type: types.FETCH_STUDENTANNOUNCEMENT_SUCCESS,
  payload: subject,
});
export const fetchStudentTeacherSubSuccess = (subject) => ({
  type: types.FETCH_STUDENTTEACHERSUB_SUCCESS,
  payload: subject,
});
export const fetchPastQuestionQueSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTIONQUE_SUCCESS,
  payload: subject,
});
export const fetchSendClassRequestSuccess = (subject) => ({
  type: types.FETCH_SENDCLASSREQUEST_SUCCESS,
  payload: subject,
});

export const fetchSubjectsFail = (error) => ({
  type: types.FETCH_SUBJECT_FAIL,
  payload: error,
});

export const fetchCoursesInitiate = (courseId) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios
      .get(
        `https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${courseId}/subjects`,
      )
      .then((res) => {
        console.log(res);
        // dispatch(fetchSubjectsSuccess(res.data.data));
      });
  };
};
export const fetchGetFavouriteInitiate = (token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios({
      method: "post",
      url: `${url}dashboard/favourite`,
      headers: headers(token),
    }).then((res) => {
      dispatch(fetchFavouriteSuccess(res.data.data));
      // dispatch((res.data.data));
    });
  };
};
export const fetchGetUnfinishedVideosInitiate = (token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios({
      method: "get",
      url: `${url}dashboard/unfinishedVideos`,
      headers: headers(token),
    }).then((res) => {
      dispatch(fetchUnfinished(res.data.data));
      // dispatch((res.data.data));
    });
  };
};
export const fetchGetWebInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios({
      method: "post",
      url: `${url}dashboard/web`,
      headers: headers(token),
      enrolledCourseId: sub_id,
    }).then((res) => {
      console.log(res);
      dispatch(fetchWeb(res.data.data));
      // dispatch((res.data.data));
    });
  };
};

export const fetchstoreUnFinishedVideos = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}lessons/storeUnFinishedVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    });
  };
};
export const fetchgetLessonComments = (lessonId, data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}comments/${lessonId}`,
      headers: headers(token),
      data,
    }).then((res) => {
      dispatch(fetchCommentsSuccess(res.data.data));
    });
  };
};
export const fetchsaveFavouriteVideo = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}lessons/saveFavouriteVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      // dispatch((res.data.data));
    });
  };
};
export const fetchremoveFavouriteVideo = (data, token) => {
  return function (dispatch) {
    axios({
      method: "delete",
      url: `${url}lessons/removeFavouriteVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      // dispatch((res.data.data));
    });
  };
};
export const fetchStoreLikeLesson = (data, token) => {
  return function (dispatch) {
    axios({
      method: "post",
      url: `${url}lessons/saveLikedVideo`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    });
  };
};
export const fetchClearLikeLesson = (data, token) => {
  return function (dispatch) {
    axios({
      method: "delete",
      url: `${url}lessons/removeLikedVideo`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    });
  };
};
export const fetchclearUnFinishedVideos = (data, token) => {
  return function (dispatch) {
    axios({
      method: "delete",
      url: `${url}lessons/clearUnFinishedVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    });
  };
};
export const fetchSendClassRequest = (courseId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios
      .post(
        `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/send-class-request`,
        { headers: { "Content-type": "application/json", token: token } },
        { classCode: courseId },
      )

      // .then((res) => res.json())
      .then((res) => {
        dispatch(
          fetchSendClassRequestSuccess(
            "Your request to join the class will be sent to the class teacher for approval",
          ),
        );
      })
      .catch(function (error) {
        dispatch(
          fetchSendClassRequestSuccess(
            error.response.data.error
              ? error.response.data.error
              : error.response.data.errors,
          ),
        );
      });
  };
};
export const fetchStudentTeacherSubjInitiate = (classId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/subjects`;

    const requestOne = await axios.get(one);
    axios.all([requestOne]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data;
        const response = [responseOne];
        dispatch(fetchStudentTeacherSubSuccess(response));
      }),
    );
  };
};
export const fetchStudentDetailsInitiate = (classId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/announcements`;
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/students`;
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/assigned-contents`;

    const requestOne = await axios.get(one);
    const requestTwo = await axios.get(two);
    const requestThree = await axios.get(three);
    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data;
        const responseTwo = await responses[1].data.data;
        const responseThree = await responses[2].data.data;
        const response = [responseOne, responseTwo, responseThree];
        dispatch(fetchStudentAnnouncenentSuccess(response));
      }),
    );
  };
};

export const fetchCourseDetailsInitiate = (courseId, subjectId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/subject-basic-details`;
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/lessons`;
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/subject-users`;

    const requestOne = await axios.post(one, {});
    const requestTwo = await axios.post(two, {});
    const requestThree = await axios.post(three, {});

    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data;
        const responseTwo = await responses[1].data.data;
        const responseThree = await responses[2].data.data;

        // use/access the results
        const response = [responseOne, responseTwo, responseThree];
        console.log(response);
        dispatch(fetchSubjectsDetailsSuccess(response));
      }),
    );
    // .then((err) => {
    //   console.log(err);
    // });
  };
};

export const fetchSubjectInitiate = (sub_Id, token) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/class-membership`;
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/web`;
    // let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/topTen`;

    dispatch(fetchSubjectsStart());
    const requestOne = await axios.post(
      one,
      { enrolledCourseId: sub_Id },
      { headers: { "Content-type": "application/json", token: token } },
    );
    // const requestTwo = await axios.post(
    //   two,
    //   { enrolledCourseId: sub_Id },
    //   { headers: { "Content-type": "application/json", token: token } },
    // );
    const requestThree = await axios.post(
      three,
      { enrolledCourseId: sub_Id },
      { headers: { "Content-type": "application/json", token: token } },
    );

    axios.all([requestOne, requestThree]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data;
        const responseTwo = await responses[1].data.data;
        // const responseThree = await responses[2].data.data;
        const response = [responseOne, responseTwo];
        console.log(response);
        dispatch(fetchSubjectsSuccess(response));
      }),
    );
  };
};

export const fetchPastQuestionSubjInitiate = (id) => {
  return async function (dispatch) {
    let one = `https://api.exambly.com/adminpanel/v2/getMySubjects/${id}`;

    const requestOne = await axios.get(one, {
      headers: {
        "Content-type": "application/json",
        authorization:
          "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
      },
    });
    axios
      .all([requestOne])
      .then(
        axios.spread(async function (...responses) {
          const responseOne = await responses[0].data;
          const response = [responseOne];
          console.log(response);

          dispatch(fetchPastQuestionSubjSuccess(response));
        }),
      )
      .then((error) => {
        console.log(error);
      });
  };
};
export const fetchPastQuestionInitiate = (id) => {
  return async function (dispatch) {
    axios({
      method: "get",
      url: `https://api.exambly.com/adminpanel/v2/getMySubjects/${id}`,
      headers: {
        "Content-type": "application/json",
        authorization:
          "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
      },
    }).then((res) => {
      console.log(res);
      dispatch(fetchUnfinished(res.data.data));
    });
  };
};

export const fetchPastQuestionQueInitiate = (sub_id) => {
  return async function (dispatch) {
    let two = `https://api.exambly.com/adminpanel/v2/getQuestions/${sub_id}`;

    const requestTwo = await axios.get(two, {
      headers: {
        "Content-type": "application/json",
        authorization:
          "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
      },
    });

    axios
      .all([requestTwo])
      .then(
        axios.spread(async function (...responses) {
          const responseOne = await responses[0].data;
          // use/access the results
          const response = [responseOne];
          console.log(response);

          dispatch(fetchPastQuestionQueSuccess(response));
        }),
      )
      .then((error) => {
        console.log(error);
      });
  };
};

/*{ // try {
    //   const requestse =
    //     // await axios.all(
    //     // id.map(async (data) => {
    //     await axios.get(
    //       `https://api.exambly.com/adminpanel/v2/getMySubjects/${id}`,
    //       {
    //         headers: {
    //           "Content-type": "application/json",
    //           authorization:
    //             "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
    //         },
    //       },
    //       // );
    //       // }),
    //     );
    //   console.log(requestse);
    // } catch (e) {
    //   console.log("====================================");
    //   console.log(e);
    //   console.log("====================================");
    // }}*/
