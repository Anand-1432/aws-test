const express = require("express");
const app = express();

const port = 3000;

const data = [{
    name: "anand rao gaikwad",
    batch: 2024,
    age: 22
}]

app.get("/", async (req, res) => {
    res.status(200).json({
        success: true,
        data: data
    })
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})