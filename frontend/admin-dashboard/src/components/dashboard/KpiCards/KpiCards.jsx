import {
  Cpu,
  Radio,
  Bell,
  TriangleAlert,
  Wifi,
  Clock3,
} from "lucide-react";

import "./KpiCards.css";

const cards = [
  {
    title: "Total Devices",
    value: "248",
    subtitle: "+12 this month",
    icon: Cpu,
    type: "normal",
  },
  {
    title: "Active Sensors",
    value: "42 / 45",
    subtitle: "3 offline",
    icon: Radio,
    type: "normal",
  },
  {
    title: "Active Alerts",
    value: "3",
    subtitle: "1 critical",
    icon: Bell,
    type: "alert",
  },
  {
    title: "Highest Risk",
    value: "HIGH",
    subtitle: "Panel B-07",
    icon: TriangleAlert,
    type: "risk",
  },
  {
    title: "Network Health",
    value: "94%",
    subtitle: "Stable",
    icon: Wifi,
    type: "normal",
  },
  {
    title: "Last Data Sync",
    value: "18s",
    subtitle: "All systems synced",
    icon: Clock3,
    type: "normal",
  },
];

export default function KpiCards() {
  return (
    <section className="kpi-grid">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            className={`kpi-card ${card.type}`}
            key={card.title}
          >
            <div className="kpi-top">
              <span>{card.title}</span>

              <div className="kpi-icon">
                <Icon size={17} />
              </div>
            </div>

            <div className="kpi-value">
              {card.value}
            </div>

            <div className="kpi-subtitle">
              {card.subtitle}
            </div>
          </div>
        );
      })}
    </section>
  );
}