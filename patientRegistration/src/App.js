import React from "react";
import "./index.css"
import Login from "./pages/Login";
import AddPatient from "./pages/AddPatient";
import PatientsDetails from "./pages/PatientsDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/">Patients Detail</Link>
        <Link to="/addpatient">Add Patient</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PatientsDetails />} />
        <Route path="/addpatient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
