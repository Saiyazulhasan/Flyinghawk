import {
  Routes,
  Route,
  Navigate,
} from "react-router";

import AdminLayout from "./components/layout/AdminLayout/AdminLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import MineMap from "./pages/MineMap/MineMap";
import Planning from "./pages/Planning/Planning";
import ActivityLog from "./pages/ActivityLog/ActivityLog";
import AiInsights from "./pages/AiInsights/AiInsights";
import Alerts from "./pages/Alerts/Alerts";
import Reports from "./pages/Reports/Reports";
import SensorNetwork from "./pages/SensorNetwork/SensorNetwork";
import Users from "./pages/Users/Users";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <Routes>

      <Route element={<AdminLayout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/mine-map"
          element={<MineMap />}
        />

        <Route
          path="/planning"
          element={<Planning />}
        />

        <Route
          path="/activity-log"
          element={<ActivityLog />}
        />

        <Route
          path="/ai-insights"
          element={<AiInsights />}
        />

        <Route
          path="/alerts"
          element={<Alerts />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/sensor-network"
          element={<SensorNetwork />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}