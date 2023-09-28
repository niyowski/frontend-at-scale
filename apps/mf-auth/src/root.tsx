import "./root.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { PasswordResetPage } from "./pages/PasswordResetPage";
import { SigninPage } from "./pages/SigninPage";
import { SignupPage } from "./pages/SignupPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/auth" element={null}>
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/reset-password" element={<PasswordResetPage />} />
    </Route>,
  ),
);

export interface RootProps {
  name: string;
}

export default function Root(_: RootProps) {
  return <RouterProvider router={router} />;
}
