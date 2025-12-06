import { PLANS, PlanType } from "../data/plans";

export default function PlanSelector({
  plan,
  setPlan
}: {
  plan: PlanType;
  setPlan: (p: PlanType) => void;
}) {
  return (
    <div className="plan-selector">
      {Object.keys(PLANS).map((p) => (
        <button
          key={p}
          className={plan === p ? "active" : ""}
          onClick={() => setPlan(p as PlanType)}
        >
          {PLANS[p as PlanType].label}
        </button>
      ))}
    </div>
  );
}
