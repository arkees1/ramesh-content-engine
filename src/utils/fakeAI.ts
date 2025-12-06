export function fakeAI(prompt: string) {
  const responses = [
    "🚀 This AI-generated content helps businesses scale faster.",
    "✨ Smart content saves time and boosts engagement.",
    "🔥 AI is redefining how modern brands communicate.",
    "💡 Data-driven content wins trust and conversions.",
  ];

  return responses[Math.floor(Math.random() * responses.length)]
    + "\n\nPrompt: " + prompt;
}
