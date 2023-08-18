let collection = require('../model/food');

function postFood(request, response) {
    let food = request.body;
    collection.postFood(food, (error, result) => {
        if (!error) {
            response.json({statusCode:201, data:result, message: 'Food Inserted'})
        }
    });
}

function getAllFoods(request, response) {
    collection.getAllFoods((error, result) => {
        if (!error) {
            response.json({statusCode:200, data:result, message: 'All Foods Successful'})
        }
    });
}

module.exports = {postFood, getAllFoods}