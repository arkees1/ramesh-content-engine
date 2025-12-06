import { useEffect, useState } from "react";

/**
 * Simple DOM-based status detector:
 * - If Taskade shows "You've reached your AI usage limit" anywhere in page,
 *   we treat AI as offline. This approach works because Taskade writes that text.
 *
 * In a hosted standalone app, replace with a proper health-check to the AI API.
 */
export default function useAIStatus(pollMs = 1500) {
  const [aiAvailable, setAiAvailable] = useState(true);

  useEffect(() => {
    const check = () => {
      const bodyText = document.body?.innerText ?? "";
      const reached = bodyText.includes("You've reached your AI usage limit");
      setAiAvailable(!reached);
    };

    check();
    const id = setInterval(check, pollMs);
    return () => clearInterval(id);
  }, [pollMs]);

  return aiAvailable;
}
