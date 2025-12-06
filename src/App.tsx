import { useState } from "react";
import Header from "./components/Header";
import PlanSelector from "./components/PlanSelector";
import Generator from "./components/Generator";
import Footer from "./components/Footer";
import { PlanType } from "./data/plans";

export default function App() {
  const [plan, setPlan] = useState<PlanType>("FREE");

  return (
    <div className="app">
      <Header plan={plan} />
      <PlanSelector plan={plan} setPlan={setPlan} />
      <Generator disabled={plan === "FREE"} />
      <Footer />
    </div>
  );
}
