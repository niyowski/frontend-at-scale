import { Link } from "react-router-dom";

export function SignupPage() {
  return (
    <main className="main-content">
      <h1>Signup</h1>
      <nav className="auth-nav">
        <ul>
          <li>
            <Link to="/auth/signin">Signin</Link>
          </li>
          <li>
            <Link to="/auth/reset-password">Reset Password</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
