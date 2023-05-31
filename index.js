const express = require("express");

const app = express();

app.get("/", (req, res) => {
    let i = 0;
    setInterval(() => {
        if (i === 5) {
            res.end();
        }
        res.write(`Hello World! ${i}\n`);
        i++;
    }, 1000);
});

app.listen(process.env.PORT || 3000, () => {  
    console.log("Server running on port 3000");
});
