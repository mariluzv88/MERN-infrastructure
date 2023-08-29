import axios from 'axios'
import { getToken } from './users-service';

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';


export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}


//------ before refactoring //more DRY-----
// export async function signUp(userData) {
 
//   const res = await axios.post(BASE_URL,userData,{
//     headers:{
//         'Content-Type':'application/json'
//     }
//   })

// //   console.log(res)
//   // Check if request was successful
//   if (res.status === 200) {
//     // console.log('were good')
//     // res.json() will resolve to the JWT
//     return res.data;
//   } else {
//     // console.log('uh oh')
//     throw new Error('Invalid Sign Up');
//   }
// }
// export async function login(credentials) {
 
//   const res = await axios.post(`${BASE_URL}/login`,credentials,{
//     headers:{
//         'Content-Type':'application/json'
//     }
//   })
//  if (res.status === 200) {
//   return res.data;
//   } else {
//     throw new Error('Invalid Login ');
//   }
// }