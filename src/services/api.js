const API_URL = "http://localhost:5000/api/companies";
export async function getCompanies() {
    const response = await fetch(API_URL);
    return response.json();
}
export async function AddCompany(data) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
