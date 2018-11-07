'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoomNightVendor = function () {
    function RoomNightVendor() {
        _classCallCheck(this, RoomNightVendor);
    }

    _createClass(RoomNightVendor, [{
        key: 'priceOfDate',
        value: function priceOfDate() {
            console.log('priceOfDate!');
        }
    }]);

    return RoomNightVendor;
}();

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoomNightAdmin = function () {
    function RoomNightAdmin() {
        _classCallCheck$1(this, RoomNightAdmin);
    }

    _createClass$1(RoomNightAdmin, [{
        key: 'getToken',
        value: function getToken() {
            console.log('getToken!');
        }
    }]);

    return RoomNightAdmin;
}();

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoomNightCustomer = function () {
    function RoomNightCustomer() {
        _classCallCheck$2(this, RoomNightCustomer);
    }

    _createClass$2(RoomNightCustomer, [{
        key: 'buyInBatch',
        value: function buyInBatch() {
            console.log('buyInBatch!');
        }
    }]);

    return RoomNightCustomer;
}();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tripio = function Tripio() {
    _classCallCheck$3(this, Tripio);

    console.log('Hello Tripio!');

    var web3 = 'xx';
    this.roomNightVendor = new RoomNightVendor(web3);
    this.roomNightAdmin = new RoomNightAdmin(web3);
    this.roomNightCustomer = new RoomNightCustomer(web3);
};

module.exports = Tripio;
