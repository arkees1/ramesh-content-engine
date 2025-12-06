type Plan = "FREE" | "MEDIUM" | "PREMIUM";

export default function UpgradeModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upgrade ARKEES AI 🚀</h2>
        <p>Unlock powerful tools designed for serious creators.</p>

        <ul className="plans">
          <li><strong>FREE</strong> – Basic content (50 credits)</li>
          <li><strong>MEDIUM</strong> – PDF + Business tools (200 credits)</li>
          <li><strong>PREMIUM</strong> – All tools unlocked (500 credits)</li>
        </ul>

        <div className="modal-actions">
          <button className="primary">Upgrade Now</button>
          <button className="secondary" onClick={onClose}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
