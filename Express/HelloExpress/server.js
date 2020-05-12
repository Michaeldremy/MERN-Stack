const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

// req is short for request
// res is short for response
app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json(users[id]);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
