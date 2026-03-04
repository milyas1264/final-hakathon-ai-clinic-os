import { Link } from "react-router-dom"


export default function Billing() {
<Link to="/billing">Billing</Link>
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="card">
          <h2>Billing Module</h2>
          <p>Generate invoices and manage payments.</p>
        </div>
      </div>
    </div>
  );
}