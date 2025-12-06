type Props = {
  title: string;
  plan: "FREE" | "MEDIUM" | "PREMIUM";
  userPlan: "FREE" | "MEDIUM" | "PREMIUM";
};

export default function FeatureCard({ title, plan, userPlan }: Props) {
  const locked =
    plan === "MEDIUM" && userPlan === "FREE" ||
    plan === "PREMIUM" && userPlan !== "PREMIUM";

  return (
    <div className="card">
      <h3>{title}</h3>

      {locked ? (
        <button className="locked">🔒 Upgrade Required</button>
      ) : (
        <button className="active">▶ Open</button>
      )}

      <span className={`badge ${plan.toLowerCase()}`}>
        {plan}
      </span>
    </div>
  );
}
