import "./root.scss";

import { BrowserRouter, Link } from "react-router-dom";

export interface RootProps {
  name: string;
}

export default function Root(_: RootProps) {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="brand">
          Acme
        </Link>
        <Link to="/auth/signin" className="auth-link">
          Sign in
        </Link>
      </header>
    </BrowserRouter>
  );
}
