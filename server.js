const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.json({
        greeting:'hello world'
    })
});

app.listen(8000, () => console.log("app started at port 8000"));
