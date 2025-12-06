import React from "react";
import useAIStatus from "../hooks/useAIStatus";

export default function AIStatusIndicator() {
  const aiAvailable = useAIStatus();

  return (
    <div className="ai-status">
      <div className={`dot ${aiAvailable ? "online" : "offline"}`} />
      <span className={`status-text ${aiAvailable ? "online" : "offline"}`}>
        AI Engine: {aiAvailable ? "Online" : "Offline"}
      </span>
    </div>
  );
}
