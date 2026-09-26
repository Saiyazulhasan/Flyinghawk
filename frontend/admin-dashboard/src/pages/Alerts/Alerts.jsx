import "./Alerts.css";
import {
  AlertTriangle,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Clock3,
  MapPin,
  Filter,
  BellRing,
  Radio,
  ChevronRight,
} from "lucide-react";

export default function Alerts() {
  const alerts = [
    {
      id: "ALT-001",
      title: "High Risk Event Detected",
      description:
        "Sensor S-017 detected abnormal vibration and displacement.",
      location: "Panel B-07",
      sensor: "S-017",
      time: "2 min ago",
      level: "HIGH",
      type: "high",
      icon: ShieldAlert,
    },
    {
      id: "ALT-002",
      title: "Sensor Anomaly Detected",
      description:
        "Sensor S-012 temperature increased rapidly above baseline.",
      location: "Panel B-06",
      sensor: "S-012",
      time: "8 min ago",
      level: "MEDIUM",
      type: "medium",
      icon: Activity,
    },
    {
      id: "ALT-003",
      title: "Gateway Connection Warning",
      description:
        "Gateway GW-02 experienced temporary communication loss.",
      location: "Panel B-08",
      sensor: "GW-02",
      time: "16 min ago",
      level: "MEDIUM",
      type: "medium",
      icon: Radio,
    },
    {
      id: "ALT-004",
      title: "Tilt Threshold Warning",
      description:
        "Tilt sensor S-021 crossed the configured warning threshold.",
      location: "Panel B-07",
      sensor: "S-021",
      time: "24 min ago",
      level: "HIGH",
      type: "high",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="alerts-page">

      {/* HEADER */}
      <div className="alerts-page-header">
        <div>
          <h1>Alerts & Events</h1>
          <p>Monitor active safety alerts and critical mine events.</p>
        </div>

        <div className="alerts-header-actions">
          <button className="alerts-filter-btn">
            <Filter size={14} />
            Filter
          </button>

          <button className="acknowledge-btn">
            <CheckCircle2 size={14} />
            Acknowledge All
          </button>
        </div>
      </div>


      {/* SUMMARY */}
      <div className="alerts-summary-grid">

        <div className="alerts-summary-card">
          <div className="alerts-summary-icon active">
            <BellRing size={18} />
          </div>

          <div>
            <span>Active Alerts</span>
            <strong>04</strong>
            <small>Requires attention</small>
          </div>
        </div>


        <div className="alerts-summary-card">
          <div className="alerts-summary-icon critical">
            <ShieldAlert size={18} />
          </div>

          <div>
            <span>High Risk</span>
            <strong>02</strong>
            <small>Immediate review</small>
          </div>
        </div>


        <div className="alerts-summary-card">
          <div className="alerts-summary-icon warning">
            <AlertTriangle size={18} />
          </div>

          <div>
            <span>Medium Risk</span>
            <strong>02</strong>
            <small>Under monitoring</small>
          </div>
        </div>


        <div className="alerts-summary-card">
          <div className="alerts-summary-icon resolved">
            <CheckCircle2 size={18} />
          </div>

          <div>
            <span>Resolved Today</span>
            <strong>18</strong>
            <small>Successfully handled</small>
          </div>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="alerts-main-grid">

        {/* ACTIVE ALERTS */}
        <div className="alerts-panel">

          <div className="alerts-panel-header">
            <div>
              <h2>Active Alerts</h2>
              <p>Real-time safety and system notifications</p>
            </div>

            <div className="alerts-live">
              <span></span>
              Live Monitoring
            </div>
          </div>


          <div className="alerts-list">

            {alerts.map((alert) => {
              const Icon = alert.icon;

              return (
                <div className="alert-event-row" key={alert.id}>

                  <div className={`alert-event-icon ${alert.type}`}>
                    <Icon size={17} />
                  </div>


                  <div className="alert-event-content">

                    <div className="alert-event-title">
                      <div>
                        <strong>{alert.title}</strong>
                        <small>{alert.id}</small>
                      </div>

                      <span className={`alert-level ${alert.type}`}>
                        {alert.level}
                      </span>
                    </div>


                    <p>{alert.description}</p>


                    <div className="alert-meta">

                      <span>
                        <MapPin size={11} />
                        {alert.location}
                      </span>

                      <span>
                        <Activity size={11} />
                        {alert.sensor}
                      </span>

                      <span>
                        <Clock3 size={11} />
                        {alert.time}
                      </span>

                    </div>

                  </div>


                  <button className="alert-details-btn">
                    <ChevronRight size={16} />
                  </button>

                </div>
              );
            })}

          </div>

        </div>


        {/* RIGHT PANEL */}
        <div className="alerts-side-column">

          {/* RISK DISTRIBUTION */}
          <div className="alerts-panel">

            <div className="alerts-panel-header">
              <div>
                <h2>Risk Distribution</h2>
                <p>Current active alert severity</p>
              </div>

              <AlertTriangle size={18} className="alerts-muted-icon" />
            </div>


            <div className="risk-distribution">

              <div className="risk-distribution-row">
                <div>
                  <span className="risk-dot high"></span>
                  <strong>High Risk</strong>
                </div>

                <span>2</span>
              </div>

              <div className="risk-bar">
                <div className="risk-bar-fill high" style={{ width: "50%" }} />
              </div>


              <div className="risk-distribution-row">
                <div>
                  <span className="risk-dot medium"></span>
                  <strong>Medium Risk</strong>
                </div>

                <span>2</span>
              </div>

              <div className="risk-bar">
                <div
                  className="risk-bar-fill medium"
                  style={{ width: "50%" }}
                />
              </div>


              <div className="risk-distribution-row">
                <div>
                  <span className="risk-dot low"></span>
                  <strong>Low Risk</strong>
                </div>

                <span>0</span>
              </div>

              <div className="risk-bar">
                <div className="risk-bar-fill low" style={{ width: "0%" }} />
              </div>

            </div>

          </div>


          {/* SYSTEM STATUS */}
          <div className="alerts-panel">

            <div className="alerts-panel-header">
              <div>
                <h2>Alert System</h2>
                <p>Monitoring service status</p>
              </div>

              <Radio size={18} className="alerts-muted-icon" />
            </div>


            <div className="alert-system-status">

              <div className="system-status-main">
                <div className="system-status-icon">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <strong>Operational</strong>
                  <span>Alert engine is running normally</span>
                </div>
              </div>


              <div className="alert-system-row">
                <span>Sensor Monitoring</span>

                <strong className="status-online">
                  <i></i>
                  Online
                </strong>
              </div>


              <div className="alert-system-row">
                <span>AI Detection</span>

                <strong className="status-online">
                  <i></i>
                  Online
                </strong>
              </div>


              <div className="alert-system-row">
                <span>Notification Service</span>

                <strong className="status-online">
                  <i></i>
                  Online
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}