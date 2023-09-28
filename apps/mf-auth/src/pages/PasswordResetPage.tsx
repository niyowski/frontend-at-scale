import { Link } from "react-router-dom";

export function PasswordResetPage() {
  return (
    <main className="main-content">
      <h1>Password Reset</h1>
      <nav className="auth-nav">
        <ul>
          <li>
            <Link to="/auth/signin">Signin</Link>
          </li>
          <li>
            <Link to="/auth/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
