// * Create a basic server using Express.JS
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Create a few array variables that will hold the data

const tables = [
    {
        name: "name",
        phone: "phone",
        email: "email",
        uniqueID: "uniqueID"
    }
]




// * Create a set of routes for getting and posting table data

app.get("/api/tables", (req, res) => {
    res.json(tables);
  });



// * Create a set of routes for displaying the HTML pages

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/form", (req, res) => {
res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// * Use jQuery to run AJAX calls to GET and POST data from users to the Express server

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });