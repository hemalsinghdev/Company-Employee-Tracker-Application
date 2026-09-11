import { useState } from "react";
import { AddCompany as addCompanyAPI } from "../services/api";

function AddCompany({ onCompanyAdded }) {
    const [employeeId, setEmployeeId] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("Applied");

    const handleAdd = async () => {
        if (!company.trim()) {
            alert("Company Name is required");
            return;
        }
        const newCompanyData = { employeeId, employeeName, company, status };
        await addCompanyAPI(newCompanyData);
        if (onCompanyAdded) {
            onCompanyAdded(newCompanyData);
        }
        setEmployeeId("");
        setEmployeeName("");
        setCompany("");
        setStatus("Applied");
        alert("Company added successfully");
    };

    return (
        <div>
            <h3>Add Company</h3>
            <input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Employee ID" />
            <input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Employee Name" />
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Hired</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddCompany;


