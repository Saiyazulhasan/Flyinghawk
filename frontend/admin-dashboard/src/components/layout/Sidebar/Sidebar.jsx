import {
  LayoutDashboard,
  Map,
  ClipboardList,
  Activity,
  Brain,
  Bell,
  FileText,
  Radio,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";

import { NavLink } from "react-router";

import "./Sidebar.css";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Mine Map & Locations",
    path: "/mine-map",
    icon: Map,
  },
  {
    label: "Planning & Regulation",
    path: "/planning",
    icon: ClipboardList,
  },
  {
    label: "Activity Log",
    path: "/activity-log",
    icon: Activity,
  },
  {
    label: "AI Insights",
    path: "/ai-insights",
    icon: Brain,
  },
  {
    label: "Alerts & Events",
    path: "/alerts",
    icon: Bell,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    label: "Sensor Network",
    path: "/sensor-network",
    icon: Radio,
  },
  {
    label: "User Management",
    path: "/users",
    icon: Users,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">
          ⚒
        </div>

        <div>
          <h2>FLYING HAWK</h2>
          <span>Smart Mine Safety & Monitoring</span>
        </div>
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}

      </nav>

      <button className="collapse-button">
        <ChevronLeft size={18} />
        Collapse Sidebar
      </button>

    </aside>
  );
}