'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Web3 = _interopDefault(require('web3'));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoomNightVendor = function () {
    function RoomNightVendor(web3) {
        _classCallCheck(this, RoomNightVendor);

        this.web3 = web3;
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
    function RoomNightAdmin(web3) {
        _classCallCheck$1(this, RoomNightAdmin);

        this.web3 = web3;
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
    function RoomNightCustomer(web3) {
        _classCallCheck$2(this, RoomNightCustomer);

        this.web3 = web3;
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

    if (typeof window.web3 !== 'undefined') {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
    } else {
        this.web3 = window.web3;
    }

    this.roomNightVendor = new RoomNightVendor(this.web3);
    this.roomNightAdmin = new RoomNightAdmin(this.web3);
    this.roomNightCustomer = new RoomNightCustomer(this.web3);
};

module.exports = Tripio;
