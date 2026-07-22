const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Data simulasi
let ec2 = [
    { id: "i-001", name: "Web Server", status: "Running" },
    { id: "i-002", name: "Database", status: "Stopped" }
];

let buckets = [
    { name: "backup-data", region: "ap-southeast-1" },
    { name: "images", region: "ap-southeast-1" }
];

app.get("/", (req, res) => {
    res.render("dashboard", {
        ec2Count: ec2.length,
        bucketCount: buckets.length
    });
});

app.get("/ec2", (req, res) => {
    res.render("ec2", { ec2 });
});

app.get("/s3", (req, res) => {
    res.render("s3", { buckets });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});