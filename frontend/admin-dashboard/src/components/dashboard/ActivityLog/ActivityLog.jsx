import {
  TriangleAlert,
  Radio,
  UserCheck,
  CheckCircle2,
  Settings2,
} from "lucide-react";

import "./ActivityLog.css";

const activities = [
  {
    time: "14:32",
    title: "High Risk Event",
    description: "S-017 abnormal vibration detected",
    type: "danger",
    icon: TriangleAlert,
  },
  {
    time: "14:28",
    title: "Sensor Reading",
    description: "S-018 temperature normal",
    type: "sensor",
    icon: Radio,
  },
  {
    time: "14:23",
    title: "Worker Check-in",
    description: "Team Alpha entered Panel B-07",
    type: "worker",
    icon: UserCheck,
  },
  {
    time: "14:18",
    title: "System Update",
    description: "Gateway G-01 synchronized",
    type: "success",
    icon: CheckCircle2,
  },
  {
    time: "14:12",
    title: "Configuration",
    description: "Panel B-07 threshold updated",
    type: "normal",
    icon: Settings2,
  },
];

export default function ActivityLog() {
  return (
    <section className="activity-card">

      <div className="activity-header">

        <div>
          <h2>Activity Log</h2>
          <p>Recent system activity</p>
        </div>

        <button>View All</button>

      </div>

      <div className="activity-list">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              className="activity-row"
              key={`${activity.time}-${activity.title}`}
            >

              <div className={`activity-icon ${activity.type}`}>
                <Icon size={15} />
              </div>

              <div className="activity-content">

                <div className="activity-main">
                  <strong>{activity.title}</strong>
                  <span>{activity.time}</span>
                </div>

                <p>
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}