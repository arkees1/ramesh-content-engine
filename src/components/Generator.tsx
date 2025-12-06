import { useState } from "react";
import { fakeAI } from "../utils/fakeAI";

type Props = {
  credits: number;
  setCredits: (c: number) => void;
};

export default function Generator({ credits, setCredits }: Props) {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const generate = () => {
    if (credits <= 0) {
      alert("Credits exhausted. Upgrade required 🔒");
      return;
    }

    setCredits(credits - 1);
    setOutput(fakeAI(prompt));
  };

  return (
    <div className="generator">
      <textarea
        placeholder="Describe what you want..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generate}>
        ⚡ Generate ({credits} credits left)
      </button>

      {output && (
        <div className="output">
          <h3>AI Output</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
