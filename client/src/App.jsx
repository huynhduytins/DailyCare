import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

import AllDoctors from "./pages/Patient/AllDoctors";
import PatientPage from "./pages/Patient/PatientPage";

import {
  AddPatient,
  PatientList,
  Stat,
  Profile,
  SharedLayout,
  ProtectedRoute,
} from "./pages/Dashboard";
import PatientSharedLayout from "./pages/Patient/PatientSharedLayout";
import AboutUs from "./pages/Patient/AboutUs";
import FAQ from "./pages/Patient/FAQ";
import PatientProfile from "./pages/Patient/Profile";
import CreateBooking from "./pages/Patient/CreateBooking";
import Message from "./pages/Patient/Message";
import MyMessage from "./pages/Dashboard/Message";
import Articles from "./pages/Dashboard/Articles";
import DetailArticle from "./pages/Dashboard/DetailArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="all-patients" element={<PatientList />} />
          <Route path="message" element={<MyMessage />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/detail" element={<DetailArticle />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <PatientSharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="doctors" element={<AllDoctors />} />
          <Route path="profile" element={<PatientProfile />} />
          <Route path="booking" element={<CreateBooking />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
