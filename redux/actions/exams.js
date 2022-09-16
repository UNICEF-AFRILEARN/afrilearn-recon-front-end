import * as types from '../types/exams';
import axios from 'axios';


export const fetchExamsStart = () => ({
    type: types.FETCH_EXAMS_START
})

export const fetchExamsSuccess = (payload) => ({
    type: types.FETCH_EXAMS_SUCCESS,
    payload
});

export const fetchExamsFail = (error) => ({
    type: types.FETCH_EXAMS_FAIL,
    payload: error
});
export const addExamsStart = () => ({
    type: types.ADD_EXAMS_START
})

export const addExamsSuccess = (payload) => ({
    type: types.ADD_EXAMS_SUCCESS,
    payload
});

export const addExamsFail = (error) => ({
    type: types.ADD_EXAMS_FAIL,
    payload: error
});
export const fetchSingleExamDetailsStart = () => ({
    type: types.FETCH_SINGLE_EXAM_DETAILS_START
});

export const fetchSingleExamDetailsSuccess = (payload) => ({
    type: types.FETCH_SINGLE_EXAM_DETAILS_SUCCESS,
    payload
});

export const fetchSingleExamDetailsFail = (error) => ({
    type: types.FETCH_SINGLE_EXAM_DETAILS_FAIL,
    payload: error
});
export const fetchSingleExamQuestionsStart = () => ({
    type: types.FETCH_SINGLE_EXAM_QUESTIONS_START
});

export const fetchSingleExamQuestionsSuccess = (payload) => ({
    type: types.FETCH_SINGLE_EXAM_QUESTIONS_SUCCESS,
    payload
});

export const fetchSingleExamQuestionsFail = (error) => ({
    type: types.FETCH_SINGLE_EXAM_QUESTIONS_FAIL,
    payload: error
});
export const addExamQuestionStart = () => ({
    type: types.ADD_EXAMS_QUESTION_START
});

export const addExamQuestionSuccess = (payload) => ({
    type: types.ADD_EXAMS_QUESTION_SUCCESS,
    payload
});

export const addExamQuestionFail = (error) => ({
    type: types.ADD_EXAMS_QUESTION_FAIL,
    payload: error
});
export const updateExamQuestionStart = () => ({
    type: types.UPDATE_EXAMS_QUESTION_START
});

export const updateExamQuestionSuccess = (payload) => ({
    type: types.UPDATE_EXAMS_QUESTION_SUCCESS,
    payload
});

export const updateExamQuestionFail = (error) => ({
    type: types.UPDATE_EXAMS_QUESTION_FAIL,
    payload: error
});
export const updateExamStart = () => ({
    type: types.UPDATE_EXAMS_START
});

export const updateExamSuccess = (payload) => ({
    type: types.UPDATE_EXAMS_SUCCESS,
    payload
});

export const updateExamFail = (error) => ({
    type: types.UPDATE_EXAMS_FAIL,
    payload: error
});
export const deleteExamStart = () => ({
    type: types.DELETE_EXAM_START
});

export const deleteExamSuccess = (payload) => ({
    type: types.DELETE_EXAM_SUCCESS,
    payload
});

export const deleteExamFail = (error) => ({
    type: types.DELETE_EXAM_FAIL,
    payload: error
});


export const deleteExamsInitiate = (id) =>  {
    return function (dispatch) {
        dispatch(deleteExamStart())
        axios
        .delete(`https://afrilearn-backend-01.herokuapp.com/api/v1/exams/question/${id}`)
        .then((res) => {
            dispatch(deleteExamSuccess(res.data.data))
            console.log("From delete Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(deleteExamFail(err))
        })
    }

}
export const fetchExamsInitiate = (token) =>  {
    return function (dispatch) {
        dispatch(fetchExamsStart())
        axios
        .get('https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam',
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchExamsSuccess(res.data.data))
            console.log("From fetch Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchExamsFail(err))
        })
    }

}
export const fetchSingleExamDetailsInitiate = (token, exam_id) =>  {
    console.log("exam_id from single exams", exam_id)
    return function (dispatch) {
        dispatch(fetchSingleExamDetailsStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/exams/instruction/${exam_id}`,
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchSingleExamDetailsSuccess(res.data))
            console.log("From fetch Single Exams API =>", res.data)
        })
        .catch((err) => {
            dispatch(fetchSingleExamDetailsFail(err))
        })
    }

}
export const fetchSingleExamQuestionsInitiate = (token, exam_id) =>  {
    console.log("exam_id from single examsQ", exam_id)
    return function (dispatch) {
        dispatch(fetchSingleExamQuestionsStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam-question/${exam_id}`,
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(fetchSingleExamQuestionsSuccess(res.data.data))
            console.log("From fetch Single Exams Questions API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(fetchSingleExamQuestionsFail(err))
        })
    }

}
export const addExamQuestionInitiate = (token, exam_id, type) =>  {
    console.log("ExamId from add exam question", token)
    return function (dispatch) {
        dispatch(addExamQuestionStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam-question',
        {
            examId: exam_id,
            type
        },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(addExamQuestionSuccess(res.data.data))
            console.log("From Add Exams Question API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(addExamQuestionFail(err))
        })
    }

}
export const updateExamQuestionInitiate = (questionId, question , options) =>  {
    console.log(questionId)
    return function (dispatch) {
        // console.log("data from update API", data)
        dispatch(updateExamQuestionStart())
        axios
        .patch(`https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam-theory-question/${questionId}`,
        {
            question , options
        })
        .then((res) => {
            dispatch(updateExamQuestionSuccess(res.data.data))
            console.log("From Update Exams Question API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(updateExamQuestionFail(err))
        })
    }

}
export const updateExamInitiate = (exam_id,  publish) =>  {
    // console.log("publish from exam ", questionId)
    return function (dispatch) {
        // console.log("data from update API", data)
        dispatch(updateExamStart())
        axios
        .patch(`https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam/${exam_id}`,
        {
            
                publish
            
        })
        .then((res) => {
            dispatch(updateExamSuccess(res.data.data))
            console.log("From Update Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(updateExamFail(err))
        })
    }

}

export const addExamsInitiate = (
            title,
            termId,
            questionTypeId,
            duration,
            totalNumberOfQuestions,
            deadline,
            startDate,
            subjectId,
            instruction,
            token
            ) =>  {
    return function (dispatch) {
        dispatch(addExamsStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/exams/exam',
        {   
            title,
            termId,
            questionTypeId,
            duration,
            totalNumberOfQuestions,
            deadline,
            startDate,
            subjectId,
            instruction
        },
        {
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(addExamsSuccess(res.data.data))
            console.log("From Add Exams API =>", res.data.data)
        })
        .catch((err) => {
            dispatch(addExamsFail(err))
        })
    }

}