import React, { useState, useReducer, useContext } from "react";
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
} from "./actions";
import axios from "axios";

import reducer from "./reducer";
import data from "../fakeData/MOCK_DATA.json";
import newData from "../../../server/MOCK_DATA.json";
console.log(newData);

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
  numberOfWaitingPages: 1,
  waitingPage: 1,
  myPatients: [],
  totalPatients: 0,
  numberOfPatientPages: 1,
  patientPage: 1,
  data: data ?? [],
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

  const getAllPatients = async () => {
    console.log("done");
  };

  const deleteMyPatient = (firstName) => {
    const newData = state.data.filter((el) => el.firstName !== firstName);
    dispatch({ type: DELETE_MY_PATIENT, payload: newData });
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
