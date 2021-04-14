
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.REACT_APP_stripe_secret_key)

const port = 3001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

