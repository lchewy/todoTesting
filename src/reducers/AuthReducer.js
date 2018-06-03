import {
  FB_AUTH_SUCCESS,
  EMAIL_AUTH_SUCCESS,
  AUTH_FAILED,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_ATTEMPT
} from "../actions/types";

const INITIAL_STATE = {
  fbAuth: null,
  emailAuth: null,
  fbUser: null,
  user: null,
  email: "",
  password: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case AUTH_FAILED:
      return { ...state, ...INITIAL_STATE, error: "Signin Failed" };
    case EMAIL_AUTH_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        emailAuth: true
      };
    case FB_AUTH_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        fbUser: action.payload,
        fbAuth: true
      };
    case LOGIN_ATTEMPT:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
