type Plan = "FREE" | "MEDIUM" | "PREMIUM";

const PLAN_ORDER: Record<Plan, number> = {
  FREE: 0,
  MEDIUM: 1,
  PREMIUM: 2
};

type Props = {
  title: string;
  minPlan: Plan;
  userPlan: Plan;
  onUpgrade: () => void;
};

export default function FeatureCard({ title, minPlan, userPlan, onUpgrade }: Props) {
  const locked = PLAN_ORDER[userPlan] < PLAN_ORDER[minPlan];

  return (
    <div className={`card ${locked ? "locked" : "unlocked"}`}>
      <h3>{title}</h3>

      {locked ? (
        <button className="locked-btn" onClick={onUpgrade}>
          🔒 Upgrade to {minPlan}
        </button>
      ) : (
        <button className="open-btn">▶ Open</button>
      )}

      <span className={`badge ${minPlan.toLowerCase()}`}>{minPlan}</span>
    </div>
  );
}
