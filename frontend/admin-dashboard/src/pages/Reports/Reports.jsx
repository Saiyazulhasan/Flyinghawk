import "./Reports.css";
import {
  FileText,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Download,
  CalendarDays,
  Clock3,
  CheckCircle2,
  BarChart3,
  ChevronRight,
} from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Daily Safety Report",
      description: "24-hour mine safety and monitoring summary.",
      icon: ShieldCheck,
      type: "safety",
      last: "Today · 08:00 AM",
    },
    {
      title: "Sensor Health Report",
      description: "Sensor health, telemetry and connectivity analysis.",
      icon: Activity,
      type: "sensor",
      last: "Today · 07:30 AM",
    },
    {
      title: "Risk & Anomaly Report",
      description: "Mine risk levels and detected anomalies.",
      icon: AlertTriangle,
      type: "risk",
      last: "Yesterday · 06:00 PM",
    },
    {
      title: "Operational Report",
      description: "Mine operations, devices and activity summary.",
      icon: BarChart3,
      type: "operations",
      last: "Yesterday · 05:30 PM",
    },
  ];

  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>Generate and view mine monitoring reports.</p>
        </div>

        <button className="reports-date-btn">
          <CalendarDays size={14} />
          Last 24 Hours
        </button>
      </div>


      {/* SUMMARY */}
      <div className="reports-summary-grid">

        <div className="reports-summary-card">
          <div className="reports-summary-icon blue">
            <FileText size={18} />
          </div>

          <div>
            <span>Total Reports</span>
            <strong>42</strong>
          </div>
        </div>


        <div className="reports-summary-card">
          <div className="reports-summary-icon green">
            <CheckCircle2 size={18} />
          </div>

          <div>
            <span>Generated Today</span>
            <strong>08</strong>
          </div>
        </div>


        <div className="reports-summary-card">
          <div className="reports-summary-icon orange">
            <Clock3 size={18} />
          </div>

          <div>
            <span>Scheduled Reports</span>
            <strong>05</strong>
          </div>
        </div>


        <div className="reports-summary-card">
          <div className="reports-summary-icon purple">
            <Download size={18} />
          </div>

          <div>
            <span>Available Downloads</span>
            <strong>17</strong>
          </div>
        </div>

      </div>


      {/* REPORT TYPES */}
      <div className="reports-panel">

        <div className="reports-panel-header">
          <div>
            <h2>Report Center</h2>
            <p>Generate reports from current mine monitoring data</p>
          </div>

          <FileText size={19} className="reports-muted-icon" />
        </div>


        <div className="report-grid">

          {reports.map((report) => {
            const Icon = report.icon;

            return (
              <div className="report-card" key={report.title}>

                <div className={`report-icon ${report.type}`}>
                  <Icon size={19} />
                </div>

                <div className="report-card-content">
                  <h3>{report.title}</h3>

                  <p>{report.description}</p>

                  <span className="report-last">
                    <Clock3 size={10} />
                    Last generated: {report.last}
                  </span>
                </div>

                <button className="generate-report-btn">
                  Generate
                  <ChevronRight size={13} />
                </button>

              </div>
            );
          })}

        </div>

      </div>


      {/* RECENT REPORTS */}
      <div className="reports-panel recent-reports-panel">

        <div className="reports-panel-header">
          <div>
            <h2>Recent Reports</h2>
            <p>Previously generated monitoring reports</p>
          </div>

          <button className="view-all-reports">
            View All
            <ChevronRight size={13} />
          </button>
        </div>


        <div className="recent-report-list">

          <div className="recent-report-row">

            <div className="recent-report-icon safety">
              <ShieldCheck size={16} />
            </div>

            <div className="recent-report-info">
              <strong>Daily Safety Report</strong>
              <span>26 Sep 2026 · 08:00 AM</span>
            </div>

            <div className="report-ready">
              <CheckCircle2 size={12} />
              Ready
            </div>

            <button className="download-report">
              <Download size={14} />
            </button>

          </div>


          <div className="recent-report-row">

            <div className="recent-report-icon sensor">
              <Activity size={16} />
            </div>

            <div className="recent-report-info">
              <strong>Sensor Health Report</strong>
              <span>26 Sep 2026 · 07:30 AM</span>
            </div>

            <div className="report-ready">
              <CheckCircle2 size={12} />
              Ready
            </div>

            <button className="download-report">
              <Download size={14} />
            </button>

          </div>


          <div className="recent-report-row">

            <div className="recent-report-icon risk">
              <AlertTriangle size={16} />
            </div>

            <div className="recent-report-info">
              <strong>Risk & Anomaly Report</strong>
              <span>25 Sep 2026 · 06:00 PM</span>
            </div>

            <div className="report-ready">
              <CheckCircle2 size={12} />
              Ready
            </div>

            <button className="download-report">
              <Download size={14} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}