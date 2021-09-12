import axios from 'axios';

const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export function fetchUserData() {
    return dispatch => {
        dispatch(fetchUserPending());
        let fetchUsersUrl = "https://jsonplaceholder.typicode.com/users";
        axios
            .get(fetchUsersUrl)
                .then(userResult => {
                    if (userResult.data !== "undefined") {
                        dispatch(fetchUserSuccess(userResult.data));
                    } else {
                        dispatch(fetchUserError());
                    }
                })
            .catch(error => {
                dispatch(fetchUserError());
            })   
    }
}

function fetchUserPending() {
    return {
        type: FETCH_USERS_PENDING,
        fetchUserError : false,
        fetchUserSuccess : false,
        fetchUserPending : true,
        userDetails : []
    };
  }
  
function fetchUserSuccess(userData) {
    return {
        type: FETCH_USERS_SUCCESS,
        fetchUserError : false,
        fetchUserSuccess : true,
        fetchUserPending : false,
        userDetails : userData
    };
}
  
  function fetchUserError() {
    return {
        type : FETCH_USERS_ERROR,
        fetchUserError : true,
        fetchUserSuccess : false,
        fetchUserPending : false,
        userDetails : []
    }
  }

export default function UsersReducer(
    state = {
        fetchUserPending : false,
        fetchUserSuccess : false,
        fetchUserError : false,
        userDetails : []
    },
    action  
){
    switch(action.type){
        case FETCH_USERS_PENDING :
            return {
                ...state,
                fetchUserPending : true,
                fetchUserSuccess : false,
                fetchUserError : false,
                userDetails : []
            }
        case FETCH_USERS_SUCCESS :
            return {
                ...state,
                fetchUserPending : false,
                fetchUserSuccess : true,
                fetchUserError : false,
                userDetails : action.userDetails
            }
        case FETCH_USERS_ERROR :
            return {
                ...state,
                fetchUserPending : false,
                fetchUserSuccess : false,
                fetchUserError : true,
                userDetails : []
            }
        break;
        default :
            return state;
    }
}

