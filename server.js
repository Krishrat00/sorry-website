const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 80;


// JSON body support
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


// Handle OPTIONS
app.use((req, res, next) => {

    if(req.method === "OPTIONS"){

        console.log("OPTIONS handled");

        return res.sendStatus(200);

    }

    next();

});



// Serve frontend files

app.use(express.static(__dirname));





// Website opened

app.get("/api/opened", (req,res)=>{


    console.log(
        "❤️ WEBSITE OPENED:",
        new Date().toISOString()
    );


    res.json({

        success:true

    });


});






// YES clicked

app.post("/api/yes", (req,res)=>{


    console.log(
        "🥹 YES CLICKED:",
        new Date().toISOString()
    );


    res.json({

        success:true

    });


});






// fallback

app.get("*",(req,res)=>{

    res.sendFile(
        path.join(
            __dirname,
            "index.html"
        )
    );

});





app.listen(PORT,()=>{


    console.log(
        "Server running on port " + PORT
    );


});
