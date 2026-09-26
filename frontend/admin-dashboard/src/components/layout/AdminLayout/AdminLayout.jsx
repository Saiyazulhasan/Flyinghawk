import { Outlet } from "react-router";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="main-area">

        <Topbar />

        <main className="page-area">
          <Outlet />
        </main>

      </div>

    </div>
  );
}