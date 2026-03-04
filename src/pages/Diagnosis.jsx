import { Link } from "react-router-dom";
import "../index.css"; // optional for styling
export default function Diagnosis() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-8 text-green-600">
        AI ClinicOS Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <Link to="/patients" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Patients</h3>
        </Link>

        <Link to="/diagnosis" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Diagnosis</h3>
        </Link>

        <Link to="/billing" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Billing</h3>
        </Link>

      </div>
    </div>
  );
}