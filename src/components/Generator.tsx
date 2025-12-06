export default function Generator({ disabled }: { disabled: boolean }) {
  return (
    <div className="generator">
      <textarea
        placeholder="Write a LinkedIn post about AI in business..."
        disabled={disabled}
      />
      <button disabled={disabled}>
        {disabled ? "Upgrade to Unlock 🔒" : "Generate Content ⚡"}
      </button>
    </div>
  );
}
