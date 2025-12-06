import { useState } from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";

export default function App() {
  const [credits, setCredits] = useState(50);
  const userPlan = "FREE";

  return (
    <>
      <Header plan={userPlan} credits={credits} />
      <Generator credits={credits} setCredits={setCredits} />
    </>
  );
}
