import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import { features } from "./data/features";

export default function App() {
  const userPlan = "FREE"; // later dynamic
  return (
    <>
      <Header plan={userPlan} credits={50} />

      <div className="grid">
        {features.map(f => (
          <FeatureCard
            key={f.id}
            title={f.title}
            plan={f.plan}
            userPlan={userPlan}
          />
        ))}
      </div>
    </>
  );
}
