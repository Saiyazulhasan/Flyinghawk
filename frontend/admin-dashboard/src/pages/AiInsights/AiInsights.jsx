import "./AiInsights.css";
import {
  BrainCircuit,
  AlertTriangle,
  TrendingUp,
  Activity,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function AiInsights() {
  return (
    <div className="ai-insights-page">

      {/* HEADER */}
      <div className="ai-insights-header">
        <div>
          <h1>AI Insights</h1>
          <p>AI-powered mine monitoring and operational intelligence.</p>
        </div>

        <div className="ai-status">
          <span></span>
          AI Engine Online
        </div>
      </div>


      {/* AI OVERVIEW */}
      <div className="ai-overview-grid">

        <div className="ai-overview-card">
          <div className="ai-overview-icon purple">
            <BrainCircuit size={20} />
          </div>

          <div>
            <span>AI Risk Score</span>
            <strong>78 / 100</strong>
            <small>Moderate Risk</small>
          </div>
        </div>


        <div className="ai-overview-card">
          <div className="ai-overview-icon red">
            <AlertTriangle size={20} />
          </div>

          <div>
            <span>Risk Events</span>
            <strong>03</strong>
            <small>Requires attention</small>
          </div>
        </div>


        <div className="ai-overview-card">
          <div className="ai-overview-icon blue">
            <TrendingUp size={20} />
          </div>

          <div>
            <span>Prediction Confidence</span>
            <strong>92%</strong>
            <small>High confidence</small>
          </div>
        </div>


        <div className="ai-overview-card">
          <div className="ai-overview-icon green">
            <Activity size={20} />
          </div>

          <div>
            <span>Models Running</span>
            <strong>06</strong>
            <small>Real-time analysis</small>
          </div>
        </div>

      </div>


      {/* MAIN GRID */}
      <div className="ai-main-grid">

        {/* RISK ANALYSIS */}
        <div className="ai-panel">

          <div className="ai-panel-header">
            <div>
              <h2>AI Risk Analysis</h2>
              <p>Current risk assessment across monitored panels</p>
            </div>

            <BrainCircuit size={20} className="ai-muted-icon" />
          </div>


          <div className="risk-panel-list">

            <div className="risk-panel-row">
              <div className="risk-panel-info">
                <div className="risk-location">
                  <MapPin size={13} />
                  Panel B-07
                </div>

                <span>Deformation + vibration pattern</span>
              </div>

              <div className="risk-score high">
                <strong>86</strong>
                <small>High</small>
              </div>
            </div>


            <div className="risk-panel-row">
              <div className="risk-panel-info">
                <div className="risk-location">
                  <MapPin size={13} />
                  Panel B-06
                </div>

                <span>Sensor anomaly detected</span>
              </div>

              <div className="risk-score medium">
                <strong>61</strong>
                <small>Medium</small>
              </div>
            </div>


            <div className="risk-panel-row">
              <div className="risk-panel-info">
                <div className="risk-location">
                  <MapPin size={13} />
                  Panel B-05
                </div>

                <span>Normal operating conditions</span>
              </div>

              <div className="risk-score low">
                <strong>24</strong>
                <small>Low</small>
              </div>
            </div>


            <div className="risk-panel-row">
              <div className="risk-panel-info">
                <div className="risk-location">
                  <MapPin size={13} />
                  Panel B-08
                </div>

                <span>Stable sensor readings</span>
              </div>

              <div className="risk-score low">
                <strong>19</strong>
                <small>Low</small>
              </div>
            </div>

          </div>

        </div>


        {/* AI RECOMMENDATION */}
        <div className="ai-panel recommendation-panel">

          <div className="ai-panel-header">
            <div>
              <h2>AI Recommendation</h2>
              <p>Generated from current sensor conditions</p>
            </div>

            <Sparkles size={19} className="sparkle-icon" />
          </div>


          <div className="recommendation-box">

            <div className="recommendation-icon">
              <AlertTriangle size={19} />
            </div>

            <div>
              <strong>Panel B-07 requires attention</strong>

              <p>
                AI analysis detected a combination of deformation
                and vibration signals above the configured threshold.
              </p>
            </div>

          </div>


          <div className="recommendation-actions">

            <div>
              <CheckCircle2 size={14} />
              Verify nearby sensor readings
            </div>

            <div>
              <CheckCircle2 size={14} />
              Review current panel conditions
            </div>

            <div>
              <CheckCircle2 size={14} />
              Maintain enhanced monitoring
            </div>

          </div>

          <button className="ai-open-btn">
            Open AI Assistant
            <ArrowUpRight size={14} />
          </button>

        </div>

      </div>


      {/* BOTTOM GRID */}
      <div className="ai-bottom-grid">

        {/* MODEL STATUS */}
        <div className="ai-panel">

          <div className="ai-panel-header">
            <div>
              <h2>AI Model Status</h2>
              <p>Real-time analytical services</p>
            </div>

            <ShieldCheck size={19} className="ai-muted-icon" />
          </div>


          <div className="model-list">

            <div className="model-row">
              <div>
                <strong>Subsidence Detection</strong>
                <span>Deformation pattern analysis</span>
              </div>

              <div className="model-online">
                <span></span>
                Active
              </div>
            </div>


            <div className="model-row">
              <div>
                <strong>Vibration Analysis</strong>
                <span>Sensor signal classification</span>
              </div>

              <div className="model-online">
                <span></span>
                Active
              </div>
            </div>


            <div className="model-row">
              <div>
                <strong>Anomaly Detection</strong>
                <span>Multi-sensor anomaly analysis</span>
              </div>

              <div className="model-online">
                <span></span>
                Active
              </div>
            </div>

          </div>

        </div>


        {/* INSIGHT SUMMARY */}
        <div className="ai-panel">

          <div className="ai-panel-header">
            <div>
              <h2>Insight Summary</h2>
              <p>Latest AI observations</p>
            </div>
          </div>


          <div className="insight-summary-list">

            <div className="insight-summary-item">
              <div className="summary-dot red"></div>
              <div>
                <strong>Elevated deformation trend</strong>
                <span>Panel B-07 · detected 8 min ago</span>
              </div>
            </div>


            <div className="insight-summary-item">
              <div className="summary-dot orange"></div>
              <div>
                <strong>Vibration anomaly</strong>
                <span>Sensor S-019 · detected 14 min ago</span>
              </div>
            </div>


            <div className="insight-summary-item">
              <div className="summary-dot green"></div>
              <div>
                <strong>Network conditions stable</strong>
                <span>42 of 45 sensor nodes active</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}