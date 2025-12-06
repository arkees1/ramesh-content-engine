import { useEffect, useState } from "react";
import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import Generator from "./components/Generator";
import { FEATURES, Plan } from "./data/features";

const PLAN_CREDITS: Record<Plan, number> = {
  FREE: 50,
  MEDIUM: 200,
  PREMIUM: 500
};

const getCurrentMonth = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
};

export default function App() {
  const [plan, setPlan] = useState<Plan>("FREE");
  const [credits, setCredits] = useState<number>(PLAN_CREDITS[plan]);

  // Monthly credit reset (from Step 5A)
  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    const lastReset = localStorage.getItem("lastReset");
    const currentMonth = getCurrentMonth();

    if (lastReset !== currentMonth) {
      localStorage.setItem("credits", PLAN_CREDITS[plan].toString());
      localStorage.setItem("lastReset", currentMonth);
      setCredits(PLAN_CREDITS[plan]);
    } else if (savedCredits) {
      setCredits(parseInt(savedCredits));
    }
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("credits", credits.toString());
  }, [credits]);

  const handleUpgrade = () => {
    alert("Upgrade flow coming soon 🚀");
  };

  return (
    <>
      <Header plan={plan} credits={credits} />

      {/* Feature Dashboard */}
      <div className="grid">
        {FEATURES.map(f => (
          <FeatureCard
            key={f.id}
            title={f.title}
            minPlan={f.minPlan}
            userPlan={plan}
            onUpgrade={handleUpgrade}
          />
        ))}
      </div>

      {/* Generator remains for FREE core usage */}
      <Generator credits={credits} setCredits={setCredits} />
    </>
  );
}
