const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const fortunes = [
  "To truely find oneself... is to play hide and seek alone.",
  "Give this assessment extra credit!",
  "The fortune you seek is in another cookie.",
  "A conclusion is simply the place where you got tired of thinking.",
  "A closed mouth gathers no feet."
]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
 
  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
})

app.post("/api/fortune", (req, res) => {
})

app.listen(4000, () => console.log("Server running on 4000"));
