import "./Settings.css";

export default function Settings() {
  return (
    <div className="simple-page">
      <h1>Settings</h1>
      <p>Configure system preferences and monitoring settings.</p>

      <div className="page-card settings-row">
        <div>
          <strong>System Notifications</strong>
          <p>Receive alerts for critical mine events.</p>
        </div>

        <input type="checkbox" defaultChecked />
      </div>

      <div className="page-card settings-row">
        <div>
          <strong>Live Sensor Monitoring</strong>
          <p>Enable continuous sensor monitoring.</p>
        </div>

        <input type="checkbox" defaultChecked />
      </div>

      <div className="page-card settings-row">
        <div>
          <strong>AI Assistant</strong>
          <p>Enable Gemini-powered operational assistant.</p>
        </div>

        <input type="checkbox" defaultChecked />
      </div>
    </div>
  );
}