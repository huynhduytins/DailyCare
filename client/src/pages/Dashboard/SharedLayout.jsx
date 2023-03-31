import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import SmallSideBar from "../../components/SmallSideBar";

const SharedLayout = () => {
  return (
    <main className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <SmallSideBar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
