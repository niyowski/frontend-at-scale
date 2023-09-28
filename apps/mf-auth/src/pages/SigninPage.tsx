import { Link } from "react-router-dom";

export function SigninPage() {
  return (
    <main className="main-content">
      <h1>Signin</h1>
      <nav className="auth-nav">
        <ul>
          <li>
            <Link to="/auth/signup">Signup</Link>
          </li>
          <li>
            <Link to="/auth/reset-password">Reset Password</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
