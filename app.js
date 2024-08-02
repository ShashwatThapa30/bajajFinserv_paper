const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userId = "john_doe_17091999";
const email = "john@xyz.com";
const rollNumber = "ABCD123";

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];
  let highestAlphabet = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/[a-zA-Z]/.test(item)) {
      alphabets.push(item);
      if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
        highestAlphabet = item;
      }
    }
  });

  const response = {
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : [],
  };

  res.json(response);
});

app.get("/bfhl", (req, res) => {
  const response = {
    operation_code: 1,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
