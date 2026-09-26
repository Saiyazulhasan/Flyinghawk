import "./SensorNetwork.css";
import {
  Activity,
  Radio,
  Wifi,
  WifiOff,
  Cpu,
  BatteryMedium,
  Thermometer,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  Server,
} from "lucide-react";

export default function SensorNetwork() {
  return (
    <div className="sensor-network-page">

      {/* HEADER */}
      <div className="sensor-page-header">
        <div>
          <h1>Sensor Network</h1>
          <p>Monitor sensor nodes, gateways and network health.</p>
        </div>

        <div className="sensor-live-status">
          <span></span>
          Network Online
        </div>
      </div>


      {/* SUMMARY */}
      <div className="sensor-summary">

        <div className="sensor-summary-card">
          <div className="sensor-summary-icon green">
            <Activity size={19} />
          </div>

          <div>
            <span>Active Nodes</span>
            <strong>42 / 45</strong>
            <small>42 operational</small>
          </div>
        </div>


        <div className="sensor-summary-card">
          <div className="sensor-summary-icon blue">
            <Wifi size={19} />
          </div>

          <div>
            <span>Network Health</span>
            <strong>94%</strong>
            <small>Healthy network</small>
          </div>
        </div>


        <div className="sensor-summary-card">
          <div className="sensor-summary-icon purple">
            <Radio size={19} />
          </div>

          <div>
            <span>Gateways</span>
            <strong>3 / 3</strong>
            <small>All online</small>
          </div>
        </div>


        <div className="sensor-summary-card">
          <div className="sensor-summary-icon orange">
            <AlertTriangle size={19} />
          </div>

          <div>
            <span>Warnings</span>
            <strong>02</strong>
            <small>Needs attention</small>
          </div>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="sensor-main-grid">

        {/* SENSOR NODES */}
        <div className="sensor-panel">

          <div className="sensor-panel-header">
            <div>
              <h2>Sensor Nodes</h2>
              <p>Real-time sensor network status</p>
            </div>

            <Cpu size={19} className="sensor-muted-icon" />
          </div>


          <div className="sensor-node-list">

            <div className="sensor-node-row">
              <div className="sensor-node-icon online">
                <Activity size={16} />
              </div>

              <div className="sensor-node-info">
                <strong>S-017</strong>
                <span>Panel B-07 · Vibration Sensor</span>
              </div>

              <div className="sensor-reading">
                <strong>0.42</strong>
                <span>mm/s</span>
              </div>

              <div className="node-status online">
                <span></span>
                Online
              </div>
            </div>


            <div className="sensor-node-row">
              <div className="sensor-node-icon online">
                <Thermometer size={16} />
              </div>

              <div className="sensor-node-info">
                <strong>S-012</strong>
                <span>Panel B-06 · Temperature</span>
              </div>

              <div className="sensor-reading">
                <strong>28.4</strong>
                <span>°C</span>
              </div>

              <div className="node-status online">
                <span></span>
                Online
              </div>
            </div>


            <div className="sensor-node-row">
              <div className="sensor-node-icon warning">
                <Gauge size={16} />
              </div>

              <div className="sensor-node-info">
                <strong>S-019</strong>
                <span>Panel B-06 · Displacement</span>
              </div>

              <div className="sensor-reading warning">
                <strong>2.18</strong>
                <span>mm</span>
              </div>

              <div className="node-status warning">
                <span></span>
                Warning
              </div>
            </div>


            <div className="sensor-node-row">
              <div className="sensor-node-icon online">
                <Activity size={16} />
              </div>

              <div className="sensor-node-info">
                <strong>S-021</strong>
                <span>Panel B-07 · Tilt Sensor</span>
              </div>

              <div className="sensor-reading">
                <strong>0.08</strong>
                <span>°</span>
              </div>

              <div className="node-status online">
                <span></span>
                Online
              </div>
            </div>


            <div className="sensor-node-row">
              <div className="sensor-node-icon offline">
                <WifiOff size={16} />
              </div>

              <div className="sensor-node-info">
                <strong>S-023</strong>
                <span>Panel B-08 · Vibration Sensor</span>
              </div>

              <div className="sensor-reading muted">
                <strong>—</strong>
                <span>Offline</span>
              </div>

              <div className="node-status offline">
                <span></span>
                Offline
              </div>
            </div>

          </div>

        </div>


        {/* NETWORK HEALTH */}
        <div className="sensor-side-column">

          <div className="sensor-panel">

            <div className="sensor-panel-header">
              <div>
                <h2>Network Health</h2>
                <p>Communication diagnostics</p>
              </div>

              <Wifi size={19} className="sensor-muted-icon" />
            </div>


            <div className="network-health-main">

              <div className="health-circle">
                <strong>94%</strong>
                <span>Healthy</span>
              </div>

              <div className="network-health-details">

                <div>
                  <span>Signal Quality</span>
                  <strong>96%</strong>
                </div>

                <div>
                  <span>Packet Delivery</span>
                  <strong>98%</strong>
                </div>

                <div>
                  <span>Gateway Uptime</span>
                  <strong>99.2%</strong>
                </div>

              </div>

            </div>


            <div className="sensor-progress">
              <div style={{ width: "94%" }}></div>
            </div>

          </div>


          {/* GATEWAYS */}
          <div className="sensor-panel">

            <div className="sensor-panel-header">
              <div>
                <h2>Gateway Status</h2>
                <p>LoRa / network gateways</p>
              </div>

              <Server size={18} className="sensor-muted-icon" />
            </div>


            <div className="gateway-list">

              <div className="gateway-row">
                <div className="gateway-icon">
                  <Radio size={15} />
                </div>

                <div>
                  <strong>GW-01</strong>
                  <span>Panel B-05</span>
                </div>

                <div className="gateway-online">
                  <span></span>
                  Online
                </div>
              </div>


              <div className="gateway-row">
                <div className="gateway-icon">
                  <Radio size={15} />
                </div>

                <div>
                  <strong>GW-02</strong>
                  <span>Panel B-07</span>
                </div>

                <div className="gateway-online">
                  <span></span>
                  Online
                </div>
              </div>


              <div className="gateway-row">
                <div className="gateway-icon">
                  <Radio size={15} />
                </div>

                <div>
                  <strong>GW-03</strong>
                  <span>Panel B-08</span>
                </div>

                <div className="gateway-online">
                  <span></span>
                  Online
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM STATUS */}
      <div className="sensor-bottom-grid">

        <div className="sensor-status-card">
          <CheckCircle2 size={17} />
          <div>
            <strong>Network Operating Normally</strong>
            <span>Last synchronization completed 18 seconds ago.</span>
          </div>
        </div>


        <div className="sensor-status-card warning-card">
          <BatteryMedium size={17} />
          <div>
            <strong>2 Nodes Need Attention</strong>
            <span>Review S-019 warning and S-023 offline status.</span>
          </div>
        </div>

      </div>

    </div>
  );
}