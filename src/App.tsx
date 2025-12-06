import { useEffect, useState } from "react";
import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import Generator from "./components/Generator";
import UpgradeModal from "./components/UpgradeModal";
import Pricing from "./components/Pricing";
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
  const [plan, setPlan] = useState<Plan>(
    (localStorage.getItem("plan") as Plan) || "FREE"
  );
  const [credits, setCredits] = useState<number>(
    Number(localStorage.getItem("credits")) || PLAN_CREDITS[plan]
  );
  const [showUpgrade, setShowUpgrade] = useState(false);

  // Monthly reset
  useEffect(() => {
    const lastReset = localStorage.getItem("lastReset");
    const currentMonth = getCurrentMonth();

    if (lastReset !== currentMonth) {
      setCredits(PLAN_CREDITS[plan]);
      localStorage.setItem("credits", PLAN_CREDITS[plan].toString());
      localStorage.setItem("lastReset", currentMonth);
    }
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("plan", plan);
    localStorage.setItem("credits", credits.toString());
  }, [plan, credits]);

  const switchPlan = (newPlan: Plan) => {
    setPlan(newPlan);
    setCredits(PLAN_CREDITS[newPlan]);
    setShowUpgrade(false);
  };

  return (
    <>
      <Header plan={plan} credits={credits} />

      <Pricing currentPlan={plan} onSelect={switchPlan} />

      <div className="grid">
        {FEATURES.map(f => (
          <FeatureCard
            key={f.id}
            title={f.title}
            minPlan={f.minPlan}
            userPlan={plan}
            onUpgrade={() => setShowUpgrade(true)}
          />
        ))}
      </div>

      <Generator credits={credits} setCredits={setCredits} />

      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
        onSelectPlan={switchPlan}
      />
    </>
  );
}
