const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Orders = require('../models/Orders');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/newOrder', (req, res, next) => {
    console.log(req.body)
    let newOrder = new Orders({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        date: req.body.date,
        rental: req.body.rental,
        meal: req.body.meal,
        amount: req.body.amount,
        notes: req.body.notes
        })

    newOrder.save()
        .then((order) => {
            // var postArray = mongoose.Types.ObjectId(post._id)
            // var arr = res.locals.user.posts;
            // arr.push(postArray)
            // Users.findByIdAndUpdate(res.locals.user._id, { posts: arr }, { new: true })
            //     .then((updateArray) => {
            //         console.log("post array is updated")
            //         res.locals.user = updateArray
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
            // res.redirect('/')

            console.log("Your order is saved")
            res.json("order is saved to the database")
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
})

module.exports = router;