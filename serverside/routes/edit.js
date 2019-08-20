const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Orders = require('../models/Orders');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/edit', (req, res, next) => {
let id = req.body.id
    let editOrder = ({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        date: req.body.date,
        rental: req.body.rental,
        meal: req.body.meal,
        amount: req.body.amount,
        notes: req.body.notes
        })
    
    Orders.findByIdAndUpdate(id, editOrder, {
        new: true
    })
        .then((order) => {
            console.log("Your order is saved")
            res.json("edit is saved to the database")
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
})

module.exports = router;