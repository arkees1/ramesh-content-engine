type Plan = "FREE" | "MEDIUM" | "PREMIUM";

export default function UpgradeModal({
  open,
  onClose,
  onSelectPlan
}: {
  open: boolean;
  onClose: () => void;
  onSelectPlan: (plan: Plan) => void;
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Upgrade ARKEES AI 🚀</h2>
        <p>Select a plan to unlock more power.</p>

        <div className="plan-cards">
          <button onClick={() => onSelectPlan("FREE")}>
            FREE <br /> 50 Credits
          </button>

          <button onClick={() => onSelectPlan("MEDIUM")}>
            MEDIUM <br /> 200 Credits
          </button>

          <button onClick={() => onSelectPlan("PREMIUM")}>
            PREMIUM <br /> 500 Credits
          </button>
        </div>

        <button className="secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
