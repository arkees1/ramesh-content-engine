import React from "react";

type Props = { FallbackComponent?: React.ComponentType<any>; children?: React.ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: any) {
    console.error("Caught error in ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      const Fallback = this.props.FallbackComponent ?? (() => <div>Something went wrong.</div>);
      return <Fallback />;
    }
    return this.props.children;
  }
}
