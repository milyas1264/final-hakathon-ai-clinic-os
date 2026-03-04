import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>AI Clinic OS</h3>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/diagnosis">Diagnosis</Link>
        <Link to="/billing">Billing</Link>

        <br />
        <button
           className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      <div className="main-content">
        <div className="card">
          <h2>Welcome to Dashboard</h2>
          <p>Manage your clinic efficiently.</p>
        </div>
      </div>
    </div>
  );
}