import "./Settings.css";
import {
  Settings as SettingsIcon,
  Bell,
  Activity,
  Bot,
  ShieldCheck,
  Database,
  Wifi,
  Save,
  RotateCcw,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="settings-page">

      {/* HEADER */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Configure system preferences and monitoring settings.</p>
        </div>

        <div className="settings-status">
          <span></span>
          Configuration Saved
        </div>
      </div>


      {/* SYSTEM OVERVIEW */}
      <div className="settings-summary">

        <div className="settings-summary-card">
          <div className="settings-summary-icon blue">
            <SettingsIcon size={18} />
          </div>

          <div>
            <span>System Mode</span>
            <strong>Production</strong>
            <small>Operational environment</small>
          </div>
        </div>


        <div className="settings-summary-card">
          <div className="settings-summary-icon green">
            <Wifi size={18} />
          </div>

          <div>
            <span>Network</span>
            <strong>Online</strong>
            <small>94% network health</small>
          </div>
        </div>


        <div className="settings-summary-card">
          <div className="settings-summary-icon purple">
            <Database size={18} />
          </div>

          <div>
            <span>Database</span>
            <strong>Connected</strong>
            <small>MongoDB operational</small>
          </div>
        </div>


        <div className="settings-summary-card">
          <div className="settings-summary-icon green">
            <ShieldCheck size={18} />
          </div>

          <div>
            <span>Security</span>
            <strong>Protected</strong>
            <small>Admin authentication active</small>
          </div>
        </div>

      </div>


      {/* SETTINGS GRID */}
      <div className="settings-grid">

        {/* MONITORING */}
        <div className="settings-panel">

          <div className="settings-panel-header">
            <div className="settings-panel-title">
              <div className="settings-title-icon blue">
                <Activity size={17} />
              </div>

              <div>
                <h2>Monitoring</h2>
                <p>Configure live mine monitoring behaviour.</p>
              </div>
            </div>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon green">
              <Activity size={15} />
            </div>

            <div className="setting-content">
              <strong>Live Sensor Monitoring</strong>
              <span>Enable continuous sensor monitoring.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon blue">
              <Wifi size={15} />
            </div>

            <div className="setting-content">
              <strong>Real-time Network Sync</strong>
              <span>Synchronize sensor data continuously.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon orange">
              <Bell size={15} />
            </div>

            <div className="setting-content">
              <strong>System Notifications</strong>
              <span>Receive alerts for critical mine events.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

        </div>


        {/* AI */}
        <div className="settings-panel">

          <div className="settings-panel-header">
            <div className="settings-panel-title">
              <div className="settings-title-icon purple">
                <Bot size={17} />
              </div>

              <div>
                <h2>AI Assistant</h2>
                <p>Configure AI-powered operational assistance.</p>
              </div>
            </div>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon purple">
              <Bot size={15} />
            </div>

            <div className="setting-content">
              <strong>AI Assistant</strong>
              <span>Enable Gemini-powered operational assistant.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon blue">
              <Activity size={15} />
            </div>

            <div className="setting-content">
              <strong>AI Risk Analysis</strong>
              <span>Allow AI to analyse sensor and risk patterns.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>


          <div className="setting-item">
            <div className="setting-item-icon green">
              <ShieldCheck size={15} />
            </div>

            <div className="setting-content">
              <strong>AI Alert Recommendations</strong>
              <span>Generate operational recommendations automatically.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

        </div>


        {/* SECURITY */}
        <div className="settings-panel">

          <div className="settings-panel-header">
            <div className="settings-panel-title">
              <div className="settings-title-icon green">
                <ShieldCheck size={17} />
              </div>

              <div>
                <h2>Security & Access</h2>
                <p>Manage system security preferences.</p>
              </div>
            </div>
          </div>


          <div className="security-row">
            <div>
              <strong>Admin Authentication</strong>
              <span>Two-factor authentication enabled.</span>
            </div>

            <b className="security-active">
              Protected
            </b>
          </div>


          <div className="security-row">
            <div>
              <strong>Session Timeout</strong>
              <span>Automatic logout after inactivity.</span>
            </div>

            <strong className="security-value">
              30 min
            </strong>
          </div>


          <div className="security-row">
            <div>
              <strong>Access Logging</strong>
              <span>Record administrator activity.</span>
            </div>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

        </div>


        {/* DATA */}
        <div className="settings-panel">

          <div className="settings-panel-header">
            <div className="settings-panel-title">
              <div className="settings-title-icon orange">
                <Database size={17} />
              </div>

              <div>
                <h2>Data & Synchronization</h2>
                <p>Configure storage and data synchronization.</p>
              </div>
            </div>
          </div>


          <div className="data-status">
            <div className="data-status-icon">
              <Database size={17} />
            </div>

            <div>
              <strong>MongoDB Connected</strong>
              <span>Last synchronization 18 seconds ago.</span>
            </div>

            <div className="data-online">
              <span></span>
              Online
            </div>
          </div>


          <div className="sync-row">
            <span>Automatic Data Sync</span>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>


          <div className="sync-row">
            <span>Offline Data Buffer</span>

            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

        </div>

      </div>


      {/* FOOTER ACTIONS */}
      <div className="settings-footer">

        <button className="reset-settings-btn">
          <RotateCcw size={14} />
          Reset Changes
        </button>

        <button className="save-settings-btn">
          <Save size={14} />
          Save Settings
        </button>

      </div>

    </div>
  );
}