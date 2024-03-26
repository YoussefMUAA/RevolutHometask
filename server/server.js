const dotenv = require("dotenv").config();
const express = require("express");
const exp = require("constants");
const axios = require("axios");
const cors = require("cors");


const app = express();
const PORT = 3000;

const API_KEY = process.env.API_KEY;

app.use(cors({origin: '*'}));
app.use(express.json());

app.post("/donation", (req, res) => {
  const { amount, currency, description } = req.body;

  let donationPost = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://sandbox-merchant.revolut.com/api/orders",
    headers: {
      "Content-Type": "application/json",
      'Revolut-Api-Version': '2023-09-01', 
      Accept: "*/*",
      Authorization:
        `Bearer ${API_KEY}`,
    },
    data: {
      amount,
      currency,
      description,
    },
  };

  axios(donationPost)
    .then((response) => {
      return res = res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({error});
    });
  }
  );
  
 


app.get(`/checkout/:id`, (req, res) => {
  const id = req.params.id;
  let donationCheckout = {
    method: 'get',
    maxBodyLength: Infinity,
    url: "https://sandbox-merchant.revolut.com/api/orders/"+id,
    headers: {
      "Content-Type": "application/json",
      'Revolut-Api-Version': '2023-09-01', 
      Accept: "*/*",
      Authorization:
        `Bearer ${API_KEY}`,
    },
    };
    
    axios(donationCheckout)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
)

app.listen(PORT, () => {
  console.log(`Working on port# ${PORT}`);
});

module.exports = app;
