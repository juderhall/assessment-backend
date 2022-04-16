const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();


app.use(cors());
// app.use(bodyParser.json())
app.use(bodyParser.text({type:"*/*"}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json()); // When we want to be able to accept JSON.

const fortunes = [
  "To truely find oneself... is to play hide and seek alone.",
  "You will give this assessment extra credit!",
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
  res.status(200).send(fortunes)
})

// why does destructuring not work here?
app.post("/api/fortune", (req, res) => {
  let article = req.body
  //console.log(article)
  fortunes.push(article)
})

app.delete("/api/fortune/:id", (req, res) => {
  let index = req.params
  console.log(index)
  fortunes.splice(index.id, 1)
})

app.listen(4000, () => console.log("Server running on 4000"));

// res.status(200) (if return)