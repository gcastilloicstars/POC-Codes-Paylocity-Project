const db = require("./db");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/impressions", async (req, res) => {
    const results = await db.query(
        "select * from impressions"
    );  

    res.json({
        status: "success",
        data: results.rows,
    })
});

console.log("test");

const port = process.env.PORT || 4008;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});