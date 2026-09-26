import "./Alerts.css";

export default function Alerts() {
  return (
    <div className="simple-page">
      <h1>Alerts & Events</h1>
      <p>Monitor active safety alerts and critical mine events.</p>

      <div className="page-card">

        <div className="alert-item high">
          <div>
            <strong>HIGH RISK EVENT</strong>
            <p>
              Sensor S-017 detected abnormal vibration and displacement.
            </p>
          </div>

          <span>HIGH</span>
        </div>

        <div className="alert-item medium">
          <div>
            <strong>ANOMALY DETECTED</strong>
            <p>
              Sensor S-012 temperature increased rapidly.
            </p>
          </div>

          <span>MEDIUM</span>
        </div>

      </div>
    </div>
  );
}