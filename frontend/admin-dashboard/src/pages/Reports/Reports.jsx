import "./Reports.css";

export default function Reports() {
  return (
    <div className="simple-page">
      <h1>Reports</h1>
      <p>Generate and view mine monitoring reports.</p>

      <div className="report-grid">

        <div className="page-card">
          <h3>Daily Safety Report</h3>
          <p>24-hour mine safety and monitoring summary.</p>
          <button>Generate Report</button>
        </div>

        <div className="page-card">
          <h3>Sensor Report</h3>
          <p>Sensor health and telemetry report.</p>
          <button>Generate Report</button>
        </div>

        <div className="page-card">
          <h3>Risk Report</h3>
          <p>Mine risk and anomaly analysis.</p>
          <button>Generate Report</button>
        </div>

      </div>
    </div>
  );
}