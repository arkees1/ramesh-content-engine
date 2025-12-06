import { PRICING } from "../data/pricing";
import { Plan } from "../data/features";

export default function Pricing({
  currentPlan,
  onSelect
}: {
  currentPlan: Plan;
  onSelect: (plan: Plan) => void;
}) {
  return (
    <div className="pricing">
      <h2>Simple, Transparent Pricing</h2>

      <div className="pricing-grid">
        {Object.entries(PRICING).map(([plan, data]) => (
          <div
            key={plan}
            className={`price-card ${
              data.highlight ? "highlight" : ""
            }`}
          >
            <h3>{plan}</h3>
            <p className="price">{data.price}</p>
            <p>{data.credits} credits / month</p>
            <p className="label">{data.label}</p>

            {currentPlan === plan ? (
              <button disabled>Current Plan ✅</button>
            ) : (
              <button onClick={() => onSelect(plan as Plan)}>
                Choose {plan}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
