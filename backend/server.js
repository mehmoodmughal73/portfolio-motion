const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/contact", contactRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
