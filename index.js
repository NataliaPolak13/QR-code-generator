import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
import qr from "qr-image"
import fs from "fs";


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

function qrCodeGenerator(link) {

    const qrCode = qr.image(link, {type: "png"});
    const filePath = new URL("./public/assets/qr.png", import.meta.url);
    qrCode.pipe(fs.createWriteStream(filePath));
}

app.post("/submit", (req, res) => {

    const link = req.body.link;

    qrCodeGenerator(link);

    res.render("index.ejs", {
        link: link

    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

