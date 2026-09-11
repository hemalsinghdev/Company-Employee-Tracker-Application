const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const filePath = path.join(__dirname, "..", "data", "company.json");
function readData() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}
function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

router.get("/", (req, res) => {
    const data = readData();
    res.json(data);
});
router.post("/", (req, res) => {
    const data = readData();
    const newCompany = {
        employeeId: req.body.employeeId,
        employeeName: req.body.employeeName,
        company: req.body.company,
        status: req.body.status,
    };
    data.push(newCompany);
    writeData(data);
    res.json({ message: "Company added successfully", newCompany });
});
module.exports = router; 