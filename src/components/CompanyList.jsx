function CompanyList({ companies = [] }) {
    return (
        <div>
            <h3>Applied Companies</h3>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Company Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>No companies added yet.</td>
                        </tr>
                    ) : (
                        companies.map((company, i) => (
                            <tr key={i}>
                                <td>{company.employeeId || company.employeId || "-"}</td>
                                <td>{company.employeeName || company.employeName || "-"}</td>
                                <td>{company.company}</td>
                                <td>{company.status}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyList;
