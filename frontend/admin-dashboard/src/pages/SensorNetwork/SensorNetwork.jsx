import "./SensorNetwork.css";

export default function SensorNetwork() {
  return (
    <div className="simple-page">
      <h1>Sensor Network</h1>
      <p>Monitor sensor nodes, gateways and network health.</p>

      <div className="sensor-summary">

        <div className="page-card">
          <h3>Active Nodes</h3>
          <strong>42 / 45</strong>
          <p>All operational</p>
        </div>

        <div className="page-card">
          <h3>Network Health</h3>
          <strong>94%</strong>
          <p>Healthy</p>
        </div>

        <div className="page-card">
          <h3>Gateways</h3>
          <strong>3 / 3</strong>
          <p>Online</p>
        </div>

      </div>
    </div>
  );
}