import React from "react";

export default function ErrorFallback() {
  return (
    <div style={{ padding: 28 }}>
      <div className="card fallback">
        <h2>⚠️ AI Engine Offline</h2>
        <p>
          The AI service is currently unavailable (quota or network). The app will continue to work with limited features.
        </p>
        <p style={{ color: "#666" }}>Try again later or upgrade your plan to restore AI functionality.</p>
      </div>
    </div>
  );
}
