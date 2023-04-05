import { NavLink, Outlet } from "react-router-dom";

const PatientPage = () => {
  return (
    <main
      className="m-0 min-h-[100vh] p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="mt-10 flex gap-10 font-bold text-gray-500">
          <NavLink to="/user" className="hover:text-gray-800">
            My Profile
          </NavLink>
          <NavLink to="all-doctors" className="hover:text-gray-800">
            All Doctors
          </NavLink>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default PatientPage;
