module.exports.viewAll = function(req, res) {
    const restaurant = {
        id: 1,
        name: 'Pizza  Hut',
        image: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg',
        rating: 2,
        category: 'Italian',
        description: 'LMAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
    };
    res.render('index', {restaurant});
}