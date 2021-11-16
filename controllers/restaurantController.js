module.exports.viewAll = function(req, res) {
    const restaurant =[ {
        id: 1,
        name: 'Pizza  Hut',
        image: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg',
        rating: 2,
        category: 'Italian',
        description: 'LMAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
    },
    { id: 2,
        name: 'some tortellini restaurant',
        image: 'https://images-gmi-pmc.edge-generalmills.com/a5f63a72-fb76-4549-8a6a-e2fb0ed4671e.jpg',
        rating: 4,
        category: 'Italian',
        description: 'pretty good ngl'
    }];
    res.render('index', {restaurants});
}