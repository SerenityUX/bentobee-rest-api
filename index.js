const express = require("express");
const app = express();

app.use(express.json());

const PORT = 8080;
//Handle a request to /tshirt

app.listen(PORT);

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Nice",
    size: "large",
  });
});

app.post(`/tshirt/:id`, (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `Tshirt with your ${logo} and ID of ${id}`,
  });
});
