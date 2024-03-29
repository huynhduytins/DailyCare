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
  CHANGE_LIKE_ARTICLE,
  DETAIL_ARTICLE,
  GET_MY_DOCTORS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
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
      alertText: "Create account success...",
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
      alertText: "Update user success",
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
      alertText: "Log in...",
    };
  }

  if (action.type === ADD_NEW_PATIENT_BEGIN) {
    return {
      ...state,
      showAlert: true,
      alertType: "success",
      alertText: "Loading...",
    };
  }

  if (action.type === ADD_NEW_PATIENT_SUCCESS) {
    return {
      ...state,
      alertType: "success",
      alertText: "ADD PATIENT SUCCESS",
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

  if (action.type === CHANGE_LIKE_ARTICLE) {
    let art;
    const newArticle = state.articles;

    if (action.payload.like) {
      art = newArticle.myFavorite.findIndex(
        (el) => el.title === action.payload.article
      );
      const newArt = newArticle.myFavorite[art];
      newArt.like = false;
      newArticle.myFavorite = [
        ...newArticle.myFavorite.slice(0, art),
        ...newArticle.myFavorite.slice(art + 1),
      ];
      newArticle.allArticles.push(newArt);
    } else {
      art = newArticle.allArticles.findIndex(
        (el) => el.title === action.payload.article
      );
      const newArt = newArticle.allArticles[art];
      newArt.like = true;
      newArticle.allArticles = [
        ...newArticle.allArticles.slice(0, art),
        ...newArticle.allArticles.slice(art + 1),
      ];
      newArticle.myFavorite.push(newArt);
    }
    return {
      ...state,
    };
  }

  if (action.type === DETAIL_ARTICLE) {
    const detail =
      state.articles.myFavorite.find(
        (el) => el.title === action.payload.title
      ) ||
      state.articles.allArticles.find(
        (el) => el.title === action.payload.title
      );
    console.log(detail);
    return {
      ...state,
      detail: detail,
    };
  }

  if (action.type === GET_MY_DOCTORS) {
    const myDoctors = action.payload.doctorInfo;
    return {
      ...state,
      myDoctors: myDoctors,
    };
  }
};

export default reducer;
