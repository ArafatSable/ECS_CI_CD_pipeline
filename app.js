const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello, ECS CI/CD!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
