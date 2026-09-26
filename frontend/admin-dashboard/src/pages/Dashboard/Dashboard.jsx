import KpiCards from "../../components/dashboard/KpiCards/KpiCards";
import MineMap from "../../components/dashboard/MineMap/MineMap";
import ActivityLog from "../../components/dashboard/ActivityLog/ActivityLog";

import "./Dashboard.css";

import AiAssistant from "../../components/dashboard/AiAssistant/AiAssistant";

import BottomCards from "../../components/dashboard/BottomCards/BottomCards";


export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Header */}

      <div className="dashboard-title">

        <div>
          <h1>Operations Dashboard</h1>

          <p>
            Korba Underground Mine · Panel B-07
          </p>
        </div>

        <div className="dashboard-time">
          ● Live Monitoring
        </div>

      </div>

      {/* KPI */}

      <KpiCards />

      {/* Map + Activity */}

      <div className="main-dashboard-grid">

        <MineMap />

        <ActivityLog />

      </div>
      <div className="dashboard-ai-section">
        <AiAssistant />
      </div>
      <BottomCards />

    </div>
  );
}