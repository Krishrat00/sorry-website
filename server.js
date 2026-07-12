const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.json());


// Request logger
app.use((req, res, next) => {

    console.log(
        "REQUEST:",
        req.method,
        req.url
    );

    next();

});


// Serve HTML CSS JS
app.use(express.static(__dirname));


// Website opened
app.get("/api/opened", (req, res) => {

    console.log(
        "❤️ Website opened:",
        new Date().toISOString()
    );

    res.json({
        success: true
    });

});


// YES clicked
app.post("/api/yes", (req, res) => {

    console.log(
        "🥹 YES clicked:",
        new Date().toISOString()
    );

    res.json({
        success: true
    });

});


// Always return index
app.get("*", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


app.listen(PORT, () => {

    console.log(
        "Server running on port " + PORT
    );

});
