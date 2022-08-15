import * as types from "../types";
import axios from "axios";

export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECT_START,
});

export const fetchSubjectsSuccess = (subject) => ({
  type: types.FETCH_SUBJECT_SUCCESS,
  payload: subject,
});
export const fetchSubjectsDetailsSuccess = (subject) => ({
  type: types.FETCH_SUBJECTDETAILS_SUCCESS,
  payload: subject,
});
export const fetchCheckChangeSuccess = (subject) => ({
  type: types.FETCH_CHECKCHANGE_SUCCESS,
  payload: subject,
});
export const fetchPastQuestionSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTION_SUCCESS,
  payload: subject,
});
export const fetchPastQuestionQueSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTIONQUE_SUCCESS,
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
    // .then((err) => {
    //   console.log(err);
    // });
  };
};
export const fetchCourseDetailsInitiate = (courseId, subjectId, sub_Id) => {
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

        dispatch(fetchSubjectsDetailsSuccess(response));
      }),
    );
    // .then((err) => {
    //   console.log(err);
    // });
  };
};

export const fetchCourseInitiate = (courseId, sub_Id, token) => {
  return async function (dispatch) {
    // let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/courses/${courseId}/subjects`;
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/topTen`;
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/dashboard/web`;

    dispatch(fetchSubjectsStart());

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

    axios.all([requestTwo, requestThree]).then(
      axios.spread(async function (...responses) {
        // const responseOne = await responses[0].data.data;
        const responseTwo = await responses[0].data.data;
        const responseThree = await responses[1].data.data;

        // use/access the results
        const response = [responseTwo, responseThree];

        dispatch(fetchSubjectsSuccess(response));
      }),
    );
    // .then((err) => {
    //   console.log(err);
    // });A
  };
};
export const fetchPastQuestionInitiate = (id) => {
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
