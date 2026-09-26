import {
  MapPin,
  ChevronDown,
  Bell,
  UserCircle,
} from "lucide-react";

import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <div className="selector">
          <MapPin size={17} />

          <span>Korba Underground Mine</span>

          <ChevronDown size={14} />
        </div>

        <div className="selector panel-selector">
          <span>Panel B-07</span>
          <ChevronDown size={14} />
        </div>

      </div>

      <div className="topbar-right">

        <span className="datetime">
          23 Apr 2025&nbsp;&nbsp; 14:32:18
        </span>

        <div className="online-status">
          <span className="online-dot"></span>
          System Online
        </div>

        <div className="notification">
          <Bell size={20} />
          <span>3</span>
        </div>

        <div className="admin-profile">
          <UserCircle size={31} />

          <div>
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>

          <ChevronDown size={14} />
        </div>

      </div>

    </header>
  );
}