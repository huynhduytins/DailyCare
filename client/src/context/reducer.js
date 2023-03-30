import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  ADD_NEW_PATIENT_BEGIN,
  ADD_NEW_PATIENT_SUCCESS,
  ADD_NEW_PATIENT_ERROR,
  DELETE_MY_PATIENT,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      username: action.payload.user.username,
      email: action.payload.user.email,
      role: action.payload.user.role,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "Updating...",
    };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      alertType: "success",
      alertText: "User was successfully updated.",
      infoUser: action.payload.user,
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      username: action.payload.user.username,
      email: action.payload.user.email,
      role: action.payload.user.role,
      infoUser: action.payload.infoUser,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }

  if (action.type === ADD_NEW_PATIENT_BEGIN) {
    return {
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "PROCESSING...",
    };
  }

  if (action.type === ADD_NEW_PATIENT_SUCCESS) {
    return {
      ...state,
      alertType: "success",
      alertText: "PATIENT WAS SUCCESSFULLY ADDED.",
      patientAccount: action.payload,
    };
  }

  if (action.type === ADD_NEW_PATIENT_ERROR) {
    return {
      ...state,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      token: null,
      username: null,
      email: null,
      role: null,
    };
  }

  if (action.type === DELETE_MY_PATIENT) {
    console.log(action.payload);
    return {
      ...state,
      data: [...action.payload],
    };
  }
};

export default reducer;
