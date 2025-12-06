import { useEffect, useState } from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";

type Plan = "FREE" | "MEDIUM" | "PREMIUM";

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
  const [plan] = useState<Plan>("FREE"); // later dynamic
  const [credits, setCredits] = useState<number>(PLAN_CREDITS[plan]);

  // ✅ Monthly reset logic
  useEffect(() => {
    const savedCredits = localStorage.getItem("credits");
    const lastReset = localStorage.getItem("lastReset");
    const currentMonth = getCurrentMonth();

    if (lastReset !== currentMonth) {
      // Reset credits for new month
      localStorage.setItem("credits", PLAN_CREDITS[plan].toString());
      localStorage.setItem("lastReset", currentMonth);
      setCredits(PLAN_CREDITS[plan]);
    } else if (savedCredits) {
      setCredits(parseInt(savedCredits));
    }
  }, [plan]);

  // ✅ Persist credits on change
  useEffect(() => {
    localStorage.setItem("credits", credits.toString());
  }, [credits]);

  return (
    <>
      <Header plan={plan} credits={credits} />
      <Generator credits={credits} setCredits={setCredits} />
    </>
  );
}
