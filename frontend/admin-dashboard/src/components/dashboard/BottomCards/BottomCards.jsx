import {
  ClipboardList,
  Activity,
  ShieldCheck,
  Cpu,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import "./BottomCards.css";

export default function BottomCards() {
  return (
    <div className="bottom-cards-grid">

      {/* PLANNING */}
      <div className="bottom-card">
        <div className="bottom-card-header">
          <div className="bottom-card-title">
            <div className="bottom-icon planning">
              <ClipboardList size={17} />
            </div>
            <div>
              <h3>Planning & Regulation</h3>
              <p>Current mine operations</p>
            </div>
          </div>

          <ChevronRight size={16} className="arrow-icon" />
        </div>

        <div className="planning-info">
          <div>
            <span>Active Plan</span>
            <strong>Panel B-07</strong>
          </div>

          <div>
            <span>Compliance</span>
            <strong className="green-text">96%</strong>
          </div>
        </div>

        <div className="progress-bar">
          <div style={{ width: "96%" }}></div>
        </div>

        <div className="bottom-status">
          <CheckCircle2 size={13} />
          All regulations currently satisfied
        </div>
      </div>


      {/* SENSOR HEALTH */}
      <div className="bottom-card">
        <div className="bottom-card-header">
          <div className="bottom-card-title">
            <div className="bottom-icon sensor">
              <Activity size={17} />
            </div>
            <div>
              <h3>Sensor Health</h3>
              <p>Network diagnostics</p>
            </div>
          </div>

          <span className="health-score">94%</span>
        </div>

        <div className="sensor-stats">
          <div>
            <strong>42</strong>
            <span>Online</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Warning</span>
          </div>

          <div>
            <strong>1</strong>
            <span>Offline</span>
          </div>
        </div>

        <div className="progress-bar">
          <div style={{ width: "94%" }}></div>
        </div>

        <div className="bottom-status">
          <CheckCircle2 size={13} />
          Sensor network operating normally
        </div>
      </div>


      {/* SITE STATUS */}
      <div className="bottom-card">
        <div className="bottom-card-header">
          <div className="bottom-card-title">
            <div className="bottom-icon site">
              <ShieldCheck size={17} />
            </div>
            <div>
              <h3>Site Status</h3>
              <p>Overall safety condition</p>
            </div>
          </div>
        </div>

        <div className="site-status-main">
          <div className="site-status-circle">
            <ShieldCheck size={24} />
          </div>

          <div>
            <strong>Operational</strong>
            <span>Site is currently active</span>
          </div>
        </div>

        <div className="site-alert">
          <AlertTriangle size={14} />
          <div>
            <strong>3 Active Alerts</strong>
            <span>Highest risk: Panel B-07</span>
          </div>
        </div>
      </div>


      {/* ACTIVE DEVICES */}
      <div className="bottom-card">
        <div className="bottom-card-header">
          <div className="bottom-card-title">
            <div className="bottom-icon devices">
              <Cpu size={17} />
            </div>
            <div>
              <h3>Active Devices</h3>
              <p>Connected equipment</p>
            </div>
          </div>

          <ChevronRight size={16} className="arrow-icon" />
        </div>

        <div className="device-count">
          <strong>248</strong>
          <span>Total connected devices</span>
        </div>

        <div className="device-row">
          <span>Sensor Nodes</span>
          <strong>45</strong>
        </div>

        <div className="device-row">
          <span>Gateways</span>
          <strong>12</strong>
        </div>

        <div className="device-row">
          <span>Other Devices</span>
          <strong>191</strong>
        </div>
      </div>

    </div>
  );
}