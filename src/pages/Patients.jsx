import { useState, useEffect } from "react";
import API from "../utils/api";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const addPatient = async () => {
    await API.post("/patients", { name });
    loadPatients();
  };

  const loadPatients = async () => {
    const res = await API.get("/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <input placeholder="Patient Name" onChange={e => setName(e.target.value)} />
      <button onClick={addPatient}>Add</button>

      {patients.map(p => (
        <div key={p._id}>{p.name}</div>
      ))}
      <div className="mt-8 space-y-4">
        {patients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patients.map(p => (
              <div key={p._id} className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                <p className="text-black-700 font-semibold">{p.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No patients found</p>
        )}
      </div>

      <div className="mt-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Billing Module</h3>
          <p className="text-gray-600">Generate invoices and manage payments.</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Manage Billing
          </button>
        </div>
      </div>

<div className="dashboard">
      <div className="main-content">
        <div className="card">
          <h2>Billing Module</h2>
          <p>Generate invoices and manage payments.</p>
        </div>
      </div>
    </div>
    </div>
  );
}