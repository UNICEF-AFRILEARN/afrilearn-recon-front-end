import * as types from '../types/classes';
import axios from 'axios';



export const makeAnnouncementStart = () => ({
    type: types.MAKE_ANNOUNCEMENT_START
});
export const makeAnnouncementSuccess = (payload) => ({
    type: types.MAKE_ANNOUNCEMENT_SUCCESS,
    payload
});
export const makeAnnouncementFail = (error) => ({
    type: types.MAKE_ANNOUNCEMENT_FAIL,
    payload: error
});
export const fetchAnnouncementStart = () => ({
    type: types.FETCH_CLASS_ANNOUNCEMENT_START
});
export const fetchAnnouncementSuccess = (payload) => ({
    type: types.FETCH_CLASS_ANNOUNCEMENT_SUCCESS,
    payload
});
export const fetchAnnouncementFail = (error) => ({
    type: types.FETCH_CLASS_ANNOUNCEMENT_FAIL,
    payload: error
});
export const fetchClassDetailsStart = () => ({
    type: types.FETCH_CLASS_DETAILS_START
});
export const fetchClassDetailsSuccess = (payload) => ({
    type: types.FETCH_CLASS_DETAILS_SUCCESS,
    payload
});
export const fetchClassDetailsFail = (error) => ({
    type: types.FETCH_CLASS_DETAILS_FAIL,
    payload: error
});
export const fetchClassMembersStart = () => ({
    type: types.FETCH_CLASS_MEMBERS_START
});
export const fetchClassMembersSuccess = (payload) => ({
    type: types.FETCH_CLASS_MEMBERS_SUCCESS,
    payload
});
export const fetchClassMembersFail = (error) => ({
    type: types.FETCH_CLASS_MEMBERS_FAIL,
    payload: error
});
export const sendClassEmailInviteStart = () => ({
    type: types.SEND_CLASS_EMAIL_INVITE_START
});
export const sendClassEmailInviteSuccess = (payload) => ({
    type: types.SEND_CLASS_EMAIL_INVITE_SUCCESS,
    payload
});
export const sendClassEmailInviteFail = (error) => ({
    type: types.SEND_SEND_CLASS_EMAIL_INVITE_FAIL,
    payload: error
});
export const fetchClassAssingedContentStart = () => ({
    type: types.FETCH_ASSINGED_CLASS_CONTENT_START
});
export const fetchClassAssingedContentSuccess = (payload) => ({
    type: types.FETCH_ASSINGED_CLASS_CONTENT_SUCCESS,
    payload
});
export const fetchClassAssingedContentFail = (error) => ({
    type: types.FETCH_ASSINGED_CLASS_CONTENT_FAIL,
    payload: error
});
export const fetchClassSubjectsStart = () => ({
    type: types.FETCH_CLASS_SUBJECTS_START
});
export const fetchClassSubjectsSuccess = (payload) => ({
    type: types.FETCH_CLASS_SUBJECTS_SUCCESS,
    payload
});
export const fetchClassSubjectsFail = (error) => ({
    type: types.FETCH_CLASS_SUBJECTS_FAIL,
    payload: error
});
export const createClassworkStart = () => ({
    type: types.CREATE_CLASS_WORK_START
});
export const createClassworkSuccess = (payload) => ({
    type: types.CREATE_CLASS_WORK_SUCCESS,
    payload
});
export const createClassworkFail = (error) => ({
    type: types.CREATE_CLASS_WORK_FAIL,
    payload: error
});


export const makeAnnouncementInitiate = (classId, text, token) =>  {
    return function (dispatch) {
        dispatch(makeAnnouncementStart())
        axios
        .post(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/announce`,
        {   
            text  
        },{
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(makeAnnouncementSuccess(res.data))
            console.log("From Make announcement API =>", res.data)
        })
        .catch((err) => {
            dispatch(makeAnnouncementFail(err))
        })
    }

}
export const createClassworkInitiate = (classId, token, lessonId, description) =>  {
    return function (dispatch) {
        dispatch(createClassworkStart())
        axios
        .post(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/assign-content`,
        {   
            lessonId,
            description
        },{
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(createClassworkSuccess(res.data))
            console.log("From create classwork API =>", res.data)
        })
        .catch((err) => {
            dispatch(createClassworkFail(err))
        })
    }

}
export const sendClassEmailInviteInitiate = (invitationLink, email, token) =>  {
    return function (dispatch) {
        dispatch(sendClassEmailInviteStart())
        axios
        .post('https://afrilearn-backend-01.herokuapp.com/api/v1/classes/send-class-invite',
        {   
            link: invitationLink,
            email
        },{
            headers: {
                "token": token,
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            dispatch(sendClassEmailInviteSuccess(res.data))
            console.log("From class Invite API =>", res.data)
        })
        .catch((err) => {
            dispatch(sendClassEmailInviteFail(err))
        })
    }

}

export const fetchAnnouncementInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchAnnouncementStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/announcements`)
        .then((res) => {
            console.log("From Get announcement API =>", res.data.data)
            dispatch(fetchAnnouncementSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchAnnouncementFail(err))
        } )
    }

}
export const fetchClassDetailsInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchClassDetailsStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/basic-details`)
        .then((res) => {
            console.log("From Get class details API =>", res.data.data)
            dispatch(fetchClassDetailsSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchClassDetailsFail(err))
        } )
    }

}
export const fetchClassMembersInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchClassMembersStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/students`)
        .then((res) => {
            console.log("From Get class members API =>", res.data.data)
            dispatch(fetchClassMembersSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchClassMembersFail(err))
        } )
    }

}
export const fetchClassAssignedContentInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchClassAssingedContentStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/assigned-contents`)
        .then((res) => {
            console.log("From Get class members API =>", res.data.data)
            dispatch(fetchClassAssingedContentSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchClassAssingedContentFail(err))
        } )
    }

}
export const fetchClassSubjectsInitiate = (classId) =>  {
    return function (dispatch) {
        dispatch(fetchClassSubjectsStart())
        axios
        .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/subjects`)
        .then((res) => {
            console.log("From Get class subjects API =>", res.data.data)
            dispatch(fetchClassSubjectsSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(fetchClassSubjectsFail(err))
        } )
    }

}