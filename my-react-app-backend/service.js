const express = require("express");
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/api/companies", companyRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

