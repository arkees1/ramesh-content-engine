import { PLANS } from "../data/plans";

export default function CreditBadge({ plan }: { plan: keyof typeof PLANS }) {
  return (
    <div className="credit-badge">
      <strong>{PLANS[plan].credits}</strong> credits / month
      <div className="plan-tag">{PLANS[plan].label}</div>
    </div>
  );
}
