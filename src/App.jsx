import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Timelines from "@/pages/Timelines/Timelines";
import Minutes from "@/pages/Minutes/Minutes";
import Register from "@/pages/Register/Register";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timelines" element={<Timelines />} />
        <Route path="/minutes" element={<Minutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
