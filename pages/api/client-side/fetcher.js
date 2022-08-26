// import useSWR from "swr"
// export const API_BASE = 'https://afrilearn-api-v2.s1.sa/api/v2'

// export const API = {

//   /* HTTP Headers Builder */
//   headers: (headersField = [{ 'Content-Type': 'text/json' }]) => {
//     const newHeader = new Headers()
//     headersField.forEach((header) => newHeader.append(header))
//     return newHeader
//   },

//   /* HTTP GET Request for first load and signup */
//   PlatformContext: () => {
//     const fetcher = (...args) => fetch(...args).then((res) => res.json())
//     const { data, error } = useSWR(`${API_BASE}/auth/roles`, fetcher)

//     return {
//       isError: error,
//       isLoading: !error && !data,
//       platformContext: data
//     }
//   },
//   /* HTTP POST Request to signup */
//   registerUser: async (newUserData) => {

//     const responseObj = {}
//     const signupEndpoint = `${API_BASE}/auth/signup`
//     const promise = new Promise(async function (resolve, reject) {
//       await fetch(signupEndpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newUserData),
//       })
//         .then((res) => {
//           responseObj.ok = res.ok
//           res.json().then((data) => {
//             const registerResponse = {
//               isError: !responseObj?.ok,
//               registerUser: data?.status,
//               fieldsErrors: data?.errors
//             }
//             resolve(registerResponse)
//           })


//         })
//         .catch((err) => reject(err))
//     })

//     return promise
//   },
//   /* HTTP POST Request to login */
//   loginDefault: async (userInfo) => {
//     console.log("LOGIN", userInfo)
//     const promise = new Promise(async (resolve, reject) => {
//       await fetch(`${API_BASE}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // credentials: 'include',
//         // mode: 'no-cors',
//         body: JSON.stringify(userInfo),
//       }).then((res) => {
//         res.json().then((data) => {
//           const registerResponse = {
//             error: data?.error,
//             status: data?.status,
//             fieldsErrors: data?.errors,
//             user: data?.data?.user,
//             token: data?.data?.token,
//             isLoggedIn: (data?.status === 'success')
//           }
//           resolve(registerResponse)
//         })
//       })
//         .catch((err) => reject(err))
//     })
//     return promise
//   }

// } 