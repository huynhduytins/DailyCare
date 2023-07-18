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
  GET_MY_PATIENTS_BEGIN,
  GET_MY_PATIENTS_SUCCESS,
  GET_WAITING_LIST,
  GET_STATS,
  DECLINE_MY_PATIENT,
  CHANGE_PAGE,
  CHANGE_PARAM,
  CHANGE_ACTIVE,
  CHANGE_APPOINTMENT,
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
      infoUser: action.payload,
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
      localCache: {},
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
    return {
      ...state,
      myPatients: [...action.payload],
      localCache: {},
    };
  }

  if (action.type === DECLINE_MY_PATIENT) {
    console.log("yes");
    return {
      ...state,
      waitingList: [...action.payload],
    };
  }

  if (action.type === GET_MY_PATIENTS_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_MY_PATIENTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      myPatients: action.payload.myPatients,
      totalPatients: action.payload.totalPatients,
      numberOfPatientPages: action.payload.numberOfPatientPages,
    };
  }

  if (action.type === GET_WAITING_LIST) {
    return {
      ...state,
      waitingList: action.payload,
    };
  }

  if (action.type === GET_STATS) {
    return {
      ...state,
      stats: action.payload,
    };
  }

  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }

  if (action.type === CHANGE_PARAM) {
    return {
      ...state,
      search: action.payload.params.search,
      levelDis: action.payload.params.levelDis,
      gender: action.payload.params.gender,
      sort: action.payload.params.sort,
    };
  }

  if (action.type === CHANGE_ACTIVE) {
    return {
      ...state,
      linkActive: action.payload.active,
    };
  }

  if (action.type === CHANGE_APPOINTMENT) {
    const id = action.payload.initApp.findIndex(
      (el) => el.name === action.payload.app
    );
    const newApp = [
      ...state.appointment.slice(0, id),
      ...state.appointment.slice(id + 1),
    ];
    return {
      ...state,
      appointment: newApp,
      scheduler: newApp.length,
    };
  }
};

export default reducer;
