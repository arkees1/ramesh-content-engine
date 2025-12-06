import CreditBadge from "./CreditBadge";

export default function Header({ plan }: { plan: string }) {
  return (
    <header className="header">
      <h1>ARKEES AI</h1>
      <span className="subtitle">Content Engine</span>
      <CreditBadge plan={plan} />
    </header>
  );
}
