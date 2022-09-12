import { Routes, Route } from "react-router-dom";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function AuthRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}

export default AuthRoutes;
