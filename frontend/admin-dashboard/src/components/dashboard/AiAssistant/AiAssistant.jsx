import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
  AlertTriangle,
  Activity,
  MapPin,
} from "lucide-react";

import "./AiAssistant.css";

export default function AiAssistant() {
  const [message, setMessage] = useState("");

  const suggestions = [
    "What is the current risk?",
    "Show critical alerts",
    "Check sensor health",
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("User:", message);
    setMessage("");
  };

  return (
    <div className="ai-assistant-card">

      {/* HEADER */}
      <div className="ai-header">

        <div className="ai-title">

          <div className="ai-icon">
            <Bot size={20} />
          </div>

          <div>
            <h3>AI Operations Assistant</h3>
            <p>Smart Mine Intelligence</p>
          </div>

        </div>

        <div className="ai-online">
          <span></span>
          Online
        </div>

      </div>


      {/* AI MESSAGE */}
      <div className="ai-message">

        <div className="ai-avatar">
          <Sparkles size={16} />
        </div>

        <div className="ai-bubble">

          <strong>Hello, Admin 👋</strong>

          <p>
            I’m monitoring the mine operations in real time.
            I can help you analyse risks, sensors, alerts and
            panel conditions.
          </p>

        </div>

      </div>


      {/* QUICK INSIGHTS */}
      <div className="ai-insights">

        <div className="ai-insight">

          <div className="insight-icon risk">
            <AlertTriangle size={16} />
          </div>

          <div>
            <span>Highest Risk</span>
            <strong>Panel B-07</strong>
          </div>

        </div>


        <div className="ai-insight">

          <div className="insight-icon sensor">
            <Activity size={16} />
          </div>

          <div>
            <span>Sensor Status</span>
            <strong>42 / 45 Active</strong>
          </div>

        </div>


        <div className="ai-insight">

          <div className="insight-icon location">
            <MapPin size={16} />
          </div>

          <div>
            <span>Current Area</span>
            <strong>Panel B-07</strong>
          </div>

        </div>

      </div>


      {/* QUICK QUESTIONS */}
      <div className="ai-suggestions">

        <span>Quick questions</span>

        <div className="suggestion-list">

          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setMessage(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </div>


      {/* INPUT */}
      <div className="ai-input-area">

        <input
          type="text"
          placeholder="Ask about mine operations..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          className="ai-send"
          onClick={handleSend}
        >
          <Send size={17} />
        </button>

      </div>

    </div>
  );
}