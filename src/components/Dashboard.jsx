import { useEffect, useState } from "react";
import AddCompany from "./AddCompany";
import CompanyList from "./CompanyList";
import { getCompanies } from "../services/api";

function Dashboard() {
    const [companies, setCompanies] = useState([]);

    const fetchCompanies = async () => {
        try {
            const data = await getCompanies();
            setCompanies(data);
        } catch (err) {
            console.error("Failed to fetch companies:", err);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    const handleCompanyAdded = (newCompany) => {
        setCompanies((prev) => [...prev, newCompany]);
        fetchCompanies();
    };

    return (
        <div className="container">
            <h2>Tracker Dashboard</h2>
            <AddCompany onCompanyAdded={handleCompanyAdded} />
            <CompanyList companies={companies} />
        </div>
    );
}

export default Dashboard;