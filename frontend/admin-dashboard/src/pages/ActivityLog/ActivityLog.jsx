import "./ActivityLog.css";

export default function ActivityLog() {
  return (
    <div className="simple-page">
      <h1>Activity Log</h1>
      <p>Monitor all recent mine activities and system events.</p>

      <div className="page-card">
        <h3>Recent Activity</h3>

        <div className="activity-item">
          <span>14:32</span>
          <strong>High Risk Event detected</strong>
        </div>

        <div className="activity-item">
          <span>14:28</span>
          <strong>All systems normal</strong>
        </div>

        <div className="activity-item">
          <span>14:23</span>
          <strong>Worker check-in recorded</strong>
        </div>
      </div>
    </div>
  );
}