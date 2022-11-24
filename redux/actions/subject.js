import * as types from '../types'
import axios from 'axios'
import { loginUserSuccess } from './auth'
const HerokuServer = 'https://afrilearn-backend-01.herokuapp.com/'
const HerokuURL = HerokuServer + 'api/v1/'
const url = HerokuURL
const headers = (token) => {
  return { headers: { 'Content-type': 'application/json' }, token: token }
}
export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECT_START,
})

export const inputChange = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: types.PAST_QUESTIONS_INPUT_CHANGE,
      payload: {
        name: name,
        value: value,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const storeSubmitPastQuestionResult = (answer) => ({
  type: types.POPULATE_SUBMITTED_ANSWER,
  payload: answer,
})
export const storeFollowerFeeds = (answer) => ({
  type: types.POPULATE_FOLLOWER_FEEDS,
  payload: answer,
})
export const storeFollowingFeeds = (answer) => ({
  type: types.POPULATE_FOLLOWING_FEEDS,
  payload: answer,
})
export const storeSubmitLessonQuizResult = (answer) => ({
  type: types.POPULATE_SUBMITTED_QUIZ,
  payload: answer,
})

export const fetchTeachSubjectsStart = (data) => ({
  type: types.FETCH_Teacher_SUBJECT_SUCCESS,
  payload: data,
})
export const fetchTeaSubsStart = (data) => ({
  type: types.FETCH_Teacher_SINGLESUBJECT_SUCCESS,
  payload: data,
})

export const fetchSubjectsSuccess = (subject) => ({
  type: types.FETCH_SUBJECT_SUCCESS,
  payload: subject,
})
export const fetchMember = (data) => ({
  type: types.FETCH_MEMBERSHIP_SUCCESS,
  payload: data,
})
export const fetchFavouriteSuccess = (subject) => ({
  type: types.FETCH_FAVOURITE_SUCCESS,
  payload: subject,
})
export const fetchClassRoom = (subject) => ({
  type: types.FETCH_CLASSROOM_SUCCESS,
  payload: subject,
})
export const fetchUnfinished = (subject) => ({
  type: types.FETCH_UNFINISHED_SUCCESS,
  payload: subject,
})
export const fetchWeb = (subject) => ({
  type: types.FETCH_WEB_SUCCESS,
  payload: subject,
})
export const fetchCommentsSuccess = (subject) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: subject,
})
export const fetchSubjectsDetailsSuccess = (subject) => ({
  type: types.FETCH_SUBJECTDETAILS_SUCCESS,
  payload: subject,
})

export const fetchPastQuestionSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTION_SUCCESS,
  payload: subject,
})
export const fetchPastQuestionSubjSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTIONSUB_SUCCESS,
  payload: subject,
})

export const fetchStudentAnnouncenentSuccess = (subject) => ({
  type: types.FETCH_STUDENTANNOUNCEMENT_SUCCESS,
  payload: subject,
})
export const fetchStudentTeacherSubSuccess = (subject) => ({
  type: types.FETCH_STUDENTTEACHERSUB_SUCCESS,
  payload: subject,
})
export const fetchPastQuestionQueSuccess = (subject) => ({
  type: types.FETCH_PASTQUESTIONQUE_SUCCESS,
  payload: subject,
})
export const fetchSendClassRequestSuccess = (subject) => ({
  type: types.FETCH_SENDCLASSREQUEST_SUCCESS,
  payload: subject,
})

export const fetchSubjectsFail = (error) => ({
  type: types.FETCH_SUBJECT_FAIL,
  payload: error,
})
export const fetchFeedUsers = (data) => ({
  type: types.FETCH_FEED_USERS,
  payload: data,
})
export const fetchCourseAndRelatedSubjectsForFeed = (data) => ({
  type: types.FETCH_FEED_COURSE_SUBJECT,
  payload: data,
})
export const storeAPostToFeed = (data) => ({
  type: types.FETCH_POST_TO_FEED,
  payload: data,
})
export const storeProfilePicture = (data) => ({
  type: types.FETCH_CHANGE_PROFILEPIX,
  payload: data,
})
export const storeSearchResult = (data) => ({
  type: types.FETCH_SEARCH_RESULT,
  payload: data,
})
export const storeUserRoles = (data) => ({
  type: types.FETCH_USER_ROLES,
  payload: data,
})

export const fetchAllFeedUsers = () => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios
      .get(`https://afrilearn-backend-01.herokuapp.com/api/v1/feeds/users`)
      .then((res) => {
        dispatch(fetchFeedUsers(res.data.data))
      })
  }
}

export const fetchUserRoles = () => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `${url}auth/roles`,
    }).then((res) => {
      // console.log(res)
      // dispatch((res.data.data));
      dispatch(storeUserRoles(res.data.data))
    })
  }
}
export const fetchFollowingsFeedUsers = (token) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `${url}feeds/followings`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res)
      // dispatch((res.data.data));
      dispatch(storeFollowingFeeds(res.data.data))
    })
  }
}
export const fetchFollowersFeedUsers = (token) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `${url}feeds/followers`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res);
      // dispatch((res.data.data));
      dispatch(storeFollowerFeeds(res.data.data))
    })
  }
}
export const fetchTeachCoursesInitiate = (classId) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios
      .get(
        `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/subjects`
      )
      .then((res) => {
        // console.log(res)
        // dispatch(fetchTeachSubjectsStart(res.data.data))
      })
  }
}
export const getSchoolCourses = (schoolId) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'get',
      url: `${url}schools/${schoolId}/courses`,
    }).then((res) => {
      // console.log(res.data.data);
      dispatch(fetchTeaSubsStart(res.data.data))
      // dispatch((res.data.data));
    })
  }
}
export const getCourseAndRelatedSubjectsForFeed = () => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'get',
      url: `${url}feeds/courses-subjects`,
    }).then((res) => {
      // console.log(res.data.data)
      dispatch(fetchCourseAndRelatedSubjectsForFeed(res.data.data))
      // dispatch((res.data.data));
    })
  }
}

export const submitPastQuestionResult = (data, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}past-questions/save-past-question-result`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      dispatch(storeSubmitPastQuestionResult({ results: data }))
    })
  }
}
export const addAPostToFeed = (data, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/posts`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res)
      // dispatch(storeAPostToFeed(res))
    })
  }
}
//  async likeAPost(postId) {
//     // text
//     //image
//     return axios({
//       method: 'post',
//       url: `${this.url}feeds/add-like/${postId}`,
//       headers: await this.headers(),
//     });
//   }
export const likeAPostToFeed = (postId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/add-like/${postId}`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res)
      dispatch(getMyPostsInFeed(token))
      // dispatch(storeALikePostToFeed(res))
    })
  }
}
export const unLikeAPostToFeed = (postId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/remove-like/${postId}`,
      headers: headers(token),
    }).then((res) => {
      dispatch(getMyPostsInFeed(token))
      // console.log(res)
      // dispatch(storeALikePostToFeed(res))
    })
  }
}
export const likeACommentPostToFeed = (commentId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/add-comment-like/${commentId}`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res)
      dispatch(getMyPostsInFeed(token))
      // dispatch(storeALikePostToFeed(res))
    })
  }
}
export const unLikeACommentPostToFeed = (commentId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/remove-comment-like/${commentId}`,
      headers: headers(token),
    }).then((res) => {
      dispatch(getMyPostsInFeed(token))
      // console.log(res)
      // dispatch(storeALikePostToFeed(res))
    })
  }
}
export const searchForPostsInFeed = (searchQuery, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/search/${searchQuery}`,
      headers: headers(token),
    }).then((res) => {
      console.log(res)
      // dispatch(getMyPostsInFeed(token))
      dispatch(
        storeAPostToFeed(
          res.data.data.posts.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
          })
        )
      )
      // dispatch(storeALikePostToFeed(res))
    })
  }
}
export const updateProfilePicture = (datas, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'patch',
      url: `${url}auth/update-profile-pic`,
      headers: headers(token),
      data: datas,
    }).then((res) => {
      // dispatch(getMyPostsInFeed(token))
      dispatch(storeProfilePicture(res.data.data.user.profilePhotoUrl))
    })
  }
}
export const getMyPostsInFeed = (token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'get',
      url: `${url}feeds/posts`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res)
      dispatch(
        storeAPostToFeed(
          res.data.data.posts.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
          })
        )
      )
    })
  }
}
export const commentToAPost = (postId, data, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}feeds/comment/${postId}`,
      headers: headers(token),
      data,
    }).then((res) => {
      dispatch(getMyPostsInFeed(token))
    })
  }
}
export const PatchFollowFeedUsers = (userId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'patch',
      url: `${url}feeds/follow/${userId}`,
      headers: headers(token),
    }).then((res) => {
      // console.log(res)
      dispatch(fetchFollowingsFeedUsers(token))
    })
  }
}
export const submitLessonQuizResult = (data, lessonId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}lessons/${lessonId}/save-test-results`,
      headers: headers(token),
      data,
    }).then((res) => {
      console.log(res)
      dispatch(storeSubmitLessonQuizResult({ results: data }))
    })
  }
}

// getSearchResults(searchQuery, data = null) {
//     return axios({
//       method: "post",
//       url: `${this.url}lessons/search/${searchQuery}`,
//       data,
//     });
//   },

export const getSearchResults = (searchQuery, data = null, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}lessons/search/${searchQuery}`,
      headers: headers(token),
      data,
    }).then((res) => {
      console.log(res)
      dispatch(storeSearchResult(res.data.data))
    })
  }
}
export const submitPastQuestionProgress = (data, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}past-questions/add-progress`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      // dispatch(storeSubmitPastQuestionProgess(res.data.data));
    })
  }
}
export const assignContent = (data, classId, token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}classes/${classId}/assign-content`,
      headers: headers(token),
      data,
    }).then((res) => {
      console.log(res.data.status)
      dispatch(fetchTeachSubjectsStart(res.data.status))
      // dispatch((res.data.data));
    })
  }
}
export const fetchGetFavouriteInitiate = (token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}dashboard/favourite`,
      headers: headers(token),
    }).then((res) => {
      dispatch(fetchFavouriteSuccess(res.data.data))
      // dispatch((res.data.data));
    })
  }
}
export const fetchGetUnfinishedVideosInitiate = (token) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'get',
      url: `${url}dashboard/unfinishedVideos`,
      headers: headers(token),
    }).then((res) => {
      dispatch(fetchUnfinished(res.data.data))
      // dispatch((res.data.data));
    })
  }
}
export const fetchGetWebInitiate = (sub_id, token, user) => {
  return function (dispatch) {
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}dashboard/web`,
      headers: headers(token),
      data: { enrolledCourseId: sub_id },
    }).then((res) => {
      dispatch(fetchWeb(res.data.data))
      // dispatch((res.data.data));
    })
  }
}
export const fetchTopInClassInitiate = (sub_id, token) => {
  return function (dispatch) {
    // topTenclass - membership;
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}dashboard/topTen`,
      headers: headers(token),
      data: { enrolledCourseId: sub_id },
    }).then((res) => {
      // console.log(res);
      dispatch(fetchSubjectsSuccess(res.data.data))

      // dispatch((res.data.data));
    })
  }
}
export const fetchClassMember = (sub_id, token) => {
  return function (dispatch) {
    console.log(sub_id, sub_id)
    // topTenclass - membership;
    dispatch(fetchSubjectsStart())
    axios({
      method: 'post',
      url: `${url}dashboard/class-membership`,
      headers: headers(token),
      data: { enrolledCourseId: sub_id },
    }).then((res) => {
      // console.log(res);

      dispatch(fetchClassRoom(res.data.data))
    })
  }
}

export const fetchstoreUnFinishedVideos = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}lessons/storeUnFinishedVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    })
  }
}
export const fetchgetLessonComments = (lessonId, data, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}comments/${lessonId}`,
      headers: headers(token),
      data,
    }).then((res) => {
      dispatch(fetchCommentsSuccess(res.data.data))
    })
  }
}
export const fetchsaveFavouriteVideo = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}lessons/saveFavouriteVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      // dispatch((res.data.data));
    })
  }
}
export const fetchremoveFavouriteVideo = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'delete',
      url: `${url}lessons/removeFavouriteVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // console.log(res);
      // dispatch((res.data.data));
    })
  }
}
export const fetchStoreLikeLesson = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}lessons/saveLikedVideo`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    })
  }
}
export const fetchClearLikeLesson = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'delete',
      url: `${url}lessons/removeLikedVideo`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    })
  }
}
export const fetchclearUnFinishedVideos = (data, token) => {
  return function (dispatch) {
    axios({
      method: 'delete',
      url: `${url}lessons/clearUnFinishedVideos`,
      headers: headers(token),
      data,
    }).then((res) => {
      // dispatch((res.data.data));
    })
  }
}
export const fetchSendClassRequest = (courseId, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}classes/send-class-request`,
      headers: headers(token),
      data: { classCode: courseId },
    })
      .then((res) => {
        dispatch(
          fetchSendClassRequestSuccess(
            'Your request to join the class will be sent to the class teacher for approval'
          )
        )
      })
      .catch(function (error) {
        dispatch(
          fetchSendClassRequestSuccess(
            error.response.data.error
              ? error.response.data.error
              : error.response.data.errors
          ),
          console.log(error)
        )
      })
  }
}
export const fetchStudentTeacherSubjInitiate = (classId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/subjects`

    const requestOne = await axios.get(one)
    axios.all([requestOne]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data
        const response = [responseOne]
        dispatch(fetchStudentTeacherSubSuccess(response))
      })
    )
  }
}
export const fetchStudentDetailsInitiate = (classId) => {
  return async function (dispatch) {
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/announcements`
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/students`
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/classes/${classId}/assigned-contents`

    const requestOne = await axios.get(one)
    const requestTwo = await axios.get(two)
    const requestThree = await axios.get(three)
    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data
        const responseTwo = await responses[1].data.data
        const responseThree = await responses[2].data.data
        const response = [responseOne, responseTwo, responseThree]
        dispatch(fetchStudentAnnouncenentSuccess(response))
      })
    )
  }
}

export const fetchCourseDetailsInitiate = (courseId, subjectId) => {
  return async function (dispatch) {
    dispatch(fetchSubjectsDetailsSuccess(''))
    let one = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/subject-basic-details`
    let two = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/lessons`
    let three = `https://afrilearn-backend-01.herokuapp.com/api/v1/lessons/${courseId}/${subjectId}/subject-users`

    const requestOne = await axios.post(one, {})
    const requestTwo = await axios.post(two, {})
    const requestThree = await axios.post(three, {})

    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread(async function (...responses) {
        const responseOne = await responses[0].data.data
        const responseTwo = await responses[1].data.data
        const responseThree = await responses[2].data.data

        // use/access the results
        const response = [responseOne, responseTwo, responseThree]
        console.log(response)
        dispatch(fetchSubjectsDetailsSuccess(response))
      })
    )
  }
}

export const fetchPastQuestionInitiate = (id) => {
  return async function (dispatch) {
    axios({
      method: 'get',
      url: `https://api.exambly.com/adminpanel/v2/getMySubjects/${id}`,
      headers: {
        'Content-type': 'application/json',
        authorization:
          'F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv',
      },
    }).then((res) => {
      dispatch(fetchPastQuestionSubjSuccess(res.data))
    })
  }
}

export const fetchPastQuestionQueInitiate = (sub_id) => {
  return async function (dispatch) {
    let two = `https://api.exambly.com/adminpanel/v2/getQuestions/${sub_id}`

    const requestTwo = await axios.get(two, {
      headers: {
        'Content-type': 'application/json',
        authorization:
          'F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv',
      },
    })

    axios
      .all([requestTwo])
      .then(
        axios.spread(async function (...responses) {
          const responseOne = await responses[0].data
          // use/access the results
          const response = [responseOne]
          dispatch(fetchPastQuestionQueSuccess(response))
        })
      )
      .then((error) => {})
  }
}

export const createComment = (announcementId, text, classId, token) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${url}classes/${announcementId}/comment`,
      headers: headers(token),
      data: { text },
    }).then((res) => {
      dispatch(fetchStudentDetailsInitiate(classId))
    })
  }
}

// export const fetchclearUnFinishedVideos = (data, token) => {
//   return function (dispatch) {
//     axios({
//       method: "delete",
//       url: `${url}lessons/clearUnFinishedVideos`,
//       headers: headers(token),
//       data,
//     }).then((res) => {
//       // dispatch((res.data.data));
//     });
//   };
// };
