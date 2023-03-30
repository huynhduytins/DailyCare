import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import {
  AddPatient,
  PatientList,
  Stat,
  Profile,
  SharedLayout,
  ProtectedRoute,
} from "./pages/Dashboard";

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
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<div>Patient</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
