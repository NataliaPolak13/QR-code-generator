import fs from "fs";
import qr from "qr-image";

export const getIndex = (req, res) => {
    const loadedList = JSON.parse(fs.readFileSync("./data/links.json"));
    res.render("index.ejs", { loadedList: loadedList });
};

function qrCodeGenerator(link) {

    const qrCode = qr.image(link, { type: "png" });
    const filePath = new URL("../public/assets/qr.png", import.meta.url);
    qrCode.pipe(fs.createWriteStream(filePath));
}

function isURL(link) {
    try {
        new URL(link);
        return true;
    } catch (err) {
        return false;
    }
}

export const submitLink = (req, res) => {
    const link = req.body.link;

    if (!isURL(link)) {

        const loadedList = JSON.parse(fs.readFileSync("./data/links.json"));
        res.render("index.ejs", {
            error: "The entered value is not a valid URL. Please try again.",
            loadedList: loadedList

        });
    }
    else {
        const loadedList = JSON.parse(fs.readFileSync("./data/links.json"));
        if (loadedList.length >= 8)
            loadedList.shift();
        loadedList.push(link);
        fs.writeFileSync("./data/links.json", JSON.stringify(loadedList, null, 2));

        qrCodeGenerator(link);

        res.render("index.ejs", {
            link: link,
            loadedList: loadedList,
        });
    }


};
