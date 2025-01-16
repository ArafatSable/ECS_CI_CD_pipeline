const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello, ECS again is this working CI/CD!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
