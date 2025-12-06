import React from "react";
import useAIStatus from "../hooks/useAIStatus";

export default function GenerateButton({ onClick }: { onClick: () => void }) {
  const aiAvailable = useAIStatus();

  return (
    <button
      onClick={aiAvailable ? onClick : undefined}
      disabled={!aiAvailable}
      className={`generate-btn ${aiAvailable ? "active" : "disabled"}`}
      title={aiAvailable ? "Generate AI content" : "AI usage limit reached — upgrade plan"}
    >
      {aiAvailable ? "⚡ Generate" : "⛔ AI Offline"}
    </button>
  );
}
