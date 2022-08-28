import * as types from "../types";
import axios from "axios";
const HerokuServer = "https://afrilearn-backend-01.herokuapp.com/";
const HerokuURL = HerokuServer + "api/v1/";
const url = HerokuURL;
export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECT_START,
});

export const fetchSubjectsSuccess = (subject) => ({
  type: types.FETCH_SUBJECT_SUCCESS,
  payload: subject,
});
export const fetchUnFinishedVideosSuccess = (subject) => ({
  type: types.FETCH_UNFINISHEDVIDEOS_SUCCESS,
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
        dispatch(fetchSubjectsSuccess(res.data.data));
      });
  };
};
export const fetchstoreUnFinishedVideos = (data) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios({
      method: "post",
      url: `${this.url}lessons/storeUnFinishedVideos`,
      headers: this.headers(),
      data,
    }).then((res) => {
      console.log(res);
      // dispatch(fetchUnFinishedVideosSuccess(res.data.data));
    });
  };
};
export const fetchSendClassRequest = (courseId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart());
    axios
      .post(
        `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/send-class-request`,
        { classCode: courseId },
        { headers: { "Content-type": "application/json", token: token } },
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

export const fetchSubjectInitiate = (sub_Id, token, userId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/class-membership`;
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/topTen`;
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/web`;
    let four = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/unfinishedVideos`;
    let five = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/favourite`;

    dispatch(fetchSubjectsStart());
    const requestOne = await axios.post(
      one,
      { enrolledCourseId: sub_Id },
      { headers: { "Content-type": "application/json", token: token } },
    );
    // const requestOne = await axios.get(one);
    const requestTwo = await axios.post(
      two,
      { enrolledCourseId: sub_Id },
      { headers: { "Content-type": "application/json", token: token } },
    );
    const requestThree = await axios.post(
      three,
      { enrolledCourseId: sub_Id },
      { headers: { "Content-type": "application/json", token: token } },
    );
    const requestFour = await axios.get(four, {
      headers: { "Content-type": "application/json", token: token },
    });
    const requestFive = await axios.post(
      five,
      { userId },
      {
        headers: { "Content-type": "application/json", token: token },
      },
    );

    axios
      .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
      .then(
        axios.spread(async function (...responses) {
          const responseOne = await responses[0].data.data;
          const responseTwo = await responses[1].data.data;
          const responseThree = await responses[2].data.data;
          const responseFour = await responses[3].data.data;
          const responseFive = await responses[4].data.data;

          // use/access the results
          const response = [
            responseTwo,
            responseThree,
            responseOne,
            responseFour,
            responseFive,
          ];

          dispatch(fetchSubjectsSuccess(response));
        }),
      );
    // .then((err) => {
    //   console.log(err);
    // });A
  };
};
export const fetchPastQuestionSubInitiate = (id) => {
  return async function (dispatch) {
    // const state = getState();
    // if (state.subject.pastQuestion[0]?.subjects) {
    //   return;
    // }
    // try {
    await axios
      .all(
        await id.map(async (data) => {
          await axios.get(
            `https://api.exambly.com/adminpanel/v2/getMySubjects/${data}`,
            {
              headers: {
                "Content-type": "application/json",
                authorization:
                  "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
              },
            },
          );
        }),
      )
      .then(
        axios.spread(async function (...responses) {
          console.log(responses);
        }),
      );
    // } catch (e) {
    //   console.log("====================================");
    //   console.log("sdfghsdfghjk");
    //   console.log("====================================");
    // }
    // id.map((data, i) => {
    //   requestTwo.push(i);
    //   requestOne.push(
    //     axios.get(
    //       `https://api.exambly.com/adminpanel/v2/getMySubjects/${data}`,
    //       {
    //         headers: {
    //           "Content-type": "application/json",
    //           authorization:
    //             "F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv",
    //         },
    //       },
    //     ),
    //   );
    // });
    // requestOne.length === requestTwo.length &&
    //   axios
    //     .all(requestOne)
    //     .then(
    //       axios.spread(async function (...responses) {
    //         const responseOne = await responses[0].data;
    //         const response = [responseOne];
    //         console.log(response);

    //         dispatch(fetchPastQuestionSuccess(response));
    //       }),
    //     )
    //     .then((error) => {
    //       console.log(error);
    //     });
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
  return async function (dispatch, getState) {
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

          dispatch(fetchPastQuestionSuccess(response));
        }),
      )
      .then((error) => {
        console.log(error);
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
