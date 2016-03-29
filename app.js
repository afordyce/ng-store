
(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Skywalker',
            price: '2.95',
            description: 'This gem is super powerful',
            canPurchase: false,
            soldOut: true
        },
        {
            name: 'Darth Gem',
            price: '5.95',
            description: 'This is a dark powerful gem',
            canPurchase: true,
            soldOut: false
        }
    ];


})();