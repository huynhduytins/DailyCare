import React, { useState, useReducer, useContext, useEffect } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
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
} from "./actions";
import axios from "axios";

import reducer from "./reducer";
// import newData from "../../../server/MOCK_DATA.json";

const token = localStorage.getItem("token");
let user = localStorage.getItem("user");

user && (user = JSON.parse(user));

const initialSate = {
  isLoading: false,
  showAlert: false,
  showSidebar: true,
  alertText: "",
  alertType: "",
  infoUser: {},
  patientAccount: {},
  username: user?.username ?? null,
  email: user?.email ?? null,
  role: user?.role ?? null,
  token: token || null,
  waiting: [],
  totalWaiting: 0,
  waitingPage: 1,
  myPatients: [],
  totalPatients: 0,
  page: 1,
  numberOfPatientPages: 1,
  waitingList: [],
  stats: {},
  search: "",
  levelDis: "all",
  gender: "all",
  sort: "a-z",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  const authFetch = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
  };

  const registerUser = async (info) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        info
      );
      const { token, user } = res.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      addToLocalStorage(user, token);
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const addToLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const loginUser = async (info) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        info
      );
      const { token, user, infoUser } = res.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, infoUser },
      });
      addToLocalStorage(user, token);
    } catch (err) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeLocalStorage();
  };

  const updateUser = async (info) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", info);
      console.log(data);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
      console.log(err);
    }
    clearAlert();
  };

  const addPatient = async (info) => {
    const newInfo = { ...info, emailDoctor: state.email };
    dispatch({ type: ADD_NEW_PATIENT_BEGIN });
    try {
      const { data } = await authFetch.post("/doctors", newInfo);
      console.log(data);
      dispatch({ type: ADD_NEW_PATIENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ADD_NEW_PATIENT_ERROR,
        payload: { msg: "Email is already used!" },
      });
      console.log(error);
    }
    clearAlert();
  };

  const changeParams = (params) => {
    console.log(params);
    dispatch({ type: CHANGE_PARAM, payload: { params } });
  };

  const getAllPatients = async (params) => {
    const { search, levelDis, gender, sort } = params ?? state;
    if (params) {
      dispatch({ type: CHANGE_PAGE, payload: { page: 1 } });
    }

    let url = `/doctors?page=${state.page}&levelDis=${levelDis}&gender=${gender}&sort=${sort}`;

    if (search) {
      url += `&search=${search}`;
    }

    dispatch({ type: GET_MY_PATIENTS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { myPatients, totalPatients, numberOfPatientPages } = data;
      dispatch({
        type: GET_MY_PATIENTS_SUCCESS,
        payload: {
          myPatients,
          totalPatients,
          numberOfPatientPages,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const deleteMyPatient = async (id, type) => {
    try {
      if (type === "decline" || type === "accept") {
        const newList = state.waitingList.filter((el) => el._id !== id);
        dispatch({ type: DECLINE_MY_PATIENT, payload: newList });
        if (type === "decline") {
          const { data } = await authFetch.delete(`/doctors/decline/${id}`);
          console.log(data);
        } else {
          const { data } = await authFetch.delete(`/doctors/accept/${id}`);
          console.log(data);
        }
      } else {
        const newList = state.myPatients.filter((el) => el._id !== id);
        dispatch({ type: DELETE_MY_PATIENT, payload: newList });
        const { data } = await authFetch.delete(`/doctors/delete/${id}`);
        console.log(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getWaitingList = async () => {
    try {
      const { data } = await authFetch.get("doctors/waiting-list");
      dispatch({ type: GET_WAITING_LIST, payload: data.myPatients });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getStats = async () => {
    try {
      const { data } = await authFetch.get("doctors/get-stats");
      dispatch({ type: GET_STATS, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        deleteMyPatient,
        addPatient,
        getAllPatients,
        getWaitingList,
        getStats,
        changePage,
        changeParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialSate, useAppContext };
