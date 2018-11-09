'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Web3 = _interopDefault(require('web3'));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import ABI from '../abis/vendor';

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

var ABI = [{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "constant": false,
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_name",
        "type": "string"
    }],
    "name": "VendorUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_valid",
        "type": "bool"
    }],
    "name": "VendorValid",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }],
    "name": "VendorRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }, {
        "indexed": false,
        "name": "_name",
        "type": "string"
    }],
    "name": "VendorAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_index",
        "type": "uint256"
    }],
    "name": "TokenRemoved",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_token",
        "type": "address"
    }],
    "name": "TokenAdded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_uri",
        "type": "string"
    }],
    "name": "TokenBaseURIChanged",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "_contract",
        "type": "address"
    }],
    "name": "addToken",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_vendor",
        "type": "address"
    }, {
        "name": "_name",
        "type": "string"
    }],
    "name": "addVendor",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "destroy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_valid",
        "type": "bool"
    }],
    "name": "makeVendorValid",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "removeToken",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_vendor",
        "type": "address"
    }],
    "name": "removeVendorByAddress",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }],
    "name": "removeVendorById",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "name": "_dataSource",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "constant": false,
    "inputs": [{
        "name": "_uri",
        "type": "string"
    }],
    "name": "updateBaseTokenURI",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_name",
        "type": "string"
    }],
    "name": "updateVendorName",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "getToken",
    "outputs": [{
        "name": "_symbol",
        "type": "string"
    }, {
        "name": "_name",
        "type": "string"
    }, {
        "name": "_decimals",
        "type": "uint8"
    }, {
        "name": "_token",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }],
    "name": "getVendor",
    "outputs": [{
        "name": "_name",
        "type": "string"
    }, {
        "name": "_vendor",
        "type": "address"
    }, {
        "name": "_timestamp",
        "type": "uint256"
    }, {
        "name": "_valid",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_vendor",
        "type": "address"
    }],
    "name": "getVendorByAddress",
    "outputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_name",
        "type": "string"
    }, {
        "name": "_timestamp",
        "type": "uint256"
    }, {
        "name": "_valid",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_from",
        "type": "uint256"
    }, {
        "name": "_limit",
        "type": "uint256"
    }],
    "name": "getVendorIds",
    "outputs": [{
        "name": "",
        "type": "uint256[]"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "newOwner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_from",
        "type": "uint256"
    }, {
        "name": "_limit",
        "type": "uint256"
    }],
    "name": "supportedTokens",
    "outputs": [{
        "name": "",
        "type": "uint256[]"
    }, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoomNightAdmin = function () {
    function RoomNightAdmin(web3) {
        _classCallCheck$1(this, RoomNightAdmin);

        this.web3 = web3;

        this.contract = this.web3.eth.contract(ABI).at('0x1E212155EF1197cC42B8A8D5dDffF6Dc4C584CE7');
    }

    _createClass$1(RoomNightAdmin, [{
        key: 'getVendorIds',
        value: function getVendorIds(offset, limit) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.contract.getVendorIds(offset, limit, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            //this.web3


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

/** 
 * Tripio
 * @class
*/
var Tripio =
/**
 * Create a Tripio.
 * @param {Web3} x - The Web3
 */
function Tripio() {
    _classCallCheck$3(this, Tripio);

    console.log('Hello Tripio!');

    var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
    // this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
    // if (typeof window.web3 !== 'undefined') {
    //     this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
    // }
    // else {
    //     this.web3 = window.web3;
    // }

    this.roomNightVendor = new RoomNightVendor(web3);
    this.roomNightAdmin = new RoomNightAdmin(web3);
    this.roomNightCustomer = new RoomNightCustomer(web3);
};

exports.Tripio = Tripio;
