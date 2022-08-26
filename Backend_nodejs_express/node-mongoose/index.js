const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    //First way of saving the dishes

    // var newDish = Dishes({
    //     name: 'Uthappizza',
    //     description: 'test'
    // });

    // newDish.save()
    //     .then((dish) => {
    //         console.log(dish);

    //         return Dishes.find({}).exec();
    //     })
    //     .then((dishes) => {
    //         console.log(dishes);

    //         return Dishes.remove({});
    //     })
    //     .then(() => {
    //         return mongoose.connection.close();
    //     })
    //     .catch((err) => {
    //         console.logg(err);
    //     })
    // 
    // Different approach

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
        .then((dish) => {
            console.log(dish);

            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.logg(err);
        })
})