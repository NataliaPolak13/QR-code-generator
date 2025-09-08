import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

// app.post("/submit", (req, res) => {

//     console.log(req.body.link);

// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

