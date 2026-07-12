const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 80;


app.use(express.json());


// Serve root files
app.use(express.static(__dirname));


// Website opened log
app.get("/api/opened", (req, res) => {

    console.log(
        "❤️ Website opened:",
        new Date().toISOString()
    );

    res.json({
        success: true
    });

});


// YES clicked log
app.post("/api/yes", (req, res) => {

    console.log(
        "🥹 YES clicked:",
        new Date().toISOString()
    );

    res.json({
        success: true
    });

});


// fallback to index.html
app.get("*", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
