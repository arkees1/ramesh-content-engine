import React, { useState } from "react";
import AIStatusIndicator from "./components/AIStatusIndicator";
import GenerateButton from "./components/GenerateButton";
import ThemeToggle from "./components/ThemeToggle";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";

export default function App() {
  const [output, setOutput] = useState<string | null>(null);

  async function handleGenerate(prompt: string) {
    // This is a placeholder for real AI API call.
    // For demo, simulate generation and quota error detection.
    if (document.body.innerText.includes("You've reached your AI usage limit")) {
      // emulate failure
      throw new Error("AI_QUOTA_REACHED");
    }

    // Demo: fake generation
    return new Promise<string>((resolve) =>
      setTimeout(() => resolve(`✅ Generated content for: "${prompt}"`), 800)
    ).then((res) => {
      setOutput(res);
      return res;
    });
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="app-shell">
        <AIStatusIndicator />
        <ThemeToggle />

        <div className="container card">
          <h1 className="title">Content Engine — Gold Edition</h1>

          <div className="card inner-card">
            <label className="label">Describe what you want</label>
            <textarea id="prompt" className="prompt" placeholder="Write a LinkedIn post about AI for restaurants..." />
            <div className="controls">
              <GenerateButton
                onClick={async () => {
                  const el = document.getElementById("prompt") as HTMLTextAreaElement | null;
                  const prompt = el?.value?.trim() ?? "";
                  if (!prompt) {
                    setOutput("Please enter a prompt first.");
                    return;
                  }
                  try {
                    await handleGenerate(prompt);
                  } catch (err) {
                    // Pass error to ErrorBoundary by throwing
                    throw err;
                  }
                }}
              />
            </div>
          </div>

          <div className="divider" />

          <div className="card output-card">
            <h2 className="section-title">AI Output</h2>
            <div className="output-box">{output ?? <i>No output yet — generate something.</i>}</div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
