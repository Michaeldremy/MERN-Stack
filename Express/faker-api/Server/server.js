const express = require("express");
var faker = require('faker');
const port = 3000;
const app = express();

app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.streetAddress = faker.address.streetAddress();
        this.city = faker.address.city();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.catchphrase = faker.company.catchPhrase();
        this.bizAdjective = faker.company.bsAdjective();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
    });

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
})

