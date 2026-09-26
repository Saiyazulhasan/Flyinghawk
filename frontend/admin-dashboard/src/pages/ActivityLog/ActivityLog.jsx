import "./ActivityLog.css";
import {
  AlertTriangle,
  Activity,
  UserCheck,
  Radio,
  ShieldAlert,
  CheckCircle2,
  Clock3,
  Filter,
} from "lucide-react";

export default function ActivityLog() {
  const activities = [
    {
      time: "14:32",
      title: "High Risk Event Detected",
      description: "Abnormal deformation pattern detected near Panel B-07.",
      location: "Panel B-07",
      type: "danger",
      icon: ShieldAlert,
    },
    {
      time: "14:28",
      title: "System Status Normal",
      description: "All connected monitoring systems are operating normally.",
      location: "Mine Network",
      type: "success",
      icon: CheckCircle2,
    },
    {
      time: "14:23",
      title: "Worker Check-in Recorded",
      description: "Worker ID WK-104 checked in at the underground entry point.",
      location: "Entry Gate 02",
      type: "worker",
      icon: UserCheck,
    },
    {
      time: "14:18",
      title: "Sensor Anomaly Detected",
      description: "Unusual vibration reading received from sensor S-019.",
      location: "Panel B-06",
      type: "sensor",
      icon: Activity,
    },
    {
      time: "14:12",
      title: "Gateway Connected",
      description: "Gateway GW-02 successfully reconnected to the network.",
      location: "Panel B-08",
      type: "normal",
      icon: Radio,
    },
    {
      time: "14:05",
      title: "Safety Inspection Completed",
      description: "Routine inspection completed without critical findings.",
      location: "Panel B-05",
      type: "success",
      icon: CheckCircle2,
    },
    {
      time: "13:57",
      title: "Warning Threshold Reached",
      description: "Tilt sensor crossed the configured warning threshold.",
      location: "Panel B-07",
      type: "warning",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="activity-page">

      {/* HEADER */}
      <div className="activity-page-header">
        <div>
          <h1>Activity Log</h1>
          <p>Monitor all recent mine activities and system events.</p>
        </div>

        <button className="activity-filter-btn">
          <Filter size={14} />
          Filter Events
        </button>
      </div>


      {/* SUMMARY */}
      <div className="activity-summary-grid">

        <div className="activity-summary-card">
          <div className="activity-summary-icon total">
            <Activity size={18} />
          </div>
          <div>
            <span>Total Events</span>
            <strong>128</strong>
          </div>
        </div>

        <div className="activity-summary-card">
          <div className="activity-summary-icon danger">
            <ShieldAlert size={18} />
          </div>
          <div>
            <span>Critical Events</span>
            <strong>03</strong>
          </div>
        </div>

        <div className="activity-summary-card">
          <div className="activity-summary-icon worker">
            <UserCheck size={18} />
          </div>
          <div>
            <span>Worker Activities</span>
            <strong>42</strong>
          </div>
        </div>

        <div className="activity-summary-card">
          <div className="activity-summary-icon system">
            <Radio size={18} />
          </div>
          <div>
            <span>System Events</span>
            <strong>83</strong>
          </div>
        </div>

      </div>


      {/* ACTIVITY PANEL */}
      <div className="activity-page-panel">

        <div className="activity-page-panel-header">
          <div>
            <h2>Recent Activities</h2>
            <p>Latest events from the mine monitoring network</p>
          </div>

          <div className="live-indicator">
            <span></span>
            Live
          </div>
        </div>


        <div className="activity-timeline">

          {activities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="activity-page-row" key={index}>

                <div className={`activity-page-icon ${item.type}`}>
                  <Icon size={16} />
                </div>

                <div className="activity-page-content">

                  <div className="activity-page-main">
                    <strong>{item.title}</strong>

                    <span>
                      <Clock3 size={11} />
                      {item.time}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <small>{item.location}</small>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}