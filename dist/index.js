'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Web3 = _interopDefault(require('web3'));
var bs58 = _interopDefault(require('bs58'));

var ABI = [{
    "constant": false,
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "name": "_name",
        "type": "string"
    }, {
        "name": "_ipfs",
        "type": "bytes32"
    }],
    "name": "createRatePlan",
    "outputs": [{
        "name": "",
        "type": "uint256"
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
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_name",
        "type": "string"
    }, {
        "name": "_ipfs",
        "type": "bytes32"
    }],
    "name": "modifyRatePlan",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "RatePlanInventoryChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "RatePlanPriceChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_rpid",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "name",
        "type": "string"
    }, {
        "indexed": false,
        "name": "_ipfs",
        "type": "bytes32"
    }],
    "name": "RatePlanModified",
    "type": "event"
}, {
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
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "RatePlanBasePriceChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_vendor",
        "type": "address"
    }, {
        "indexed": true,
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "RatePlanRemoved",
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
    }, {
        "indexed": true,
        "name": "_ipfs",
        "type": "bytes32"
    }],
    "name": "RatePlanCreated",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "removeRatePlan",
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
    "constant": false,
    "inputs": [{
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_tokens",
        "type": "uint256[]"
    }, {
        "name": "_prices",
        "type": "uint256[]"
    }, {
        "name": "_inventory",
        "type": "uint16"
    }],
    "name": "updateBasePrice",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
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
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_dates",
        "type": "uint256[]"
    }, {
        "name": "_inventory",
        "type": "uint16"
    }],
    "name": "updateInventories",
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
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_dates",
        "type": "uint256[]"
    }, {
        "name": "_inventory",
        "type": "uint16"
    }, {
        "name": "_tokens",
        "type": "uint256[]"
    }, {
        "name": "_prices",
        "type": "uint256[]"
    }],
    "name": "updatePrices",
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
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_dates",
        "type": "uint256[]"
    }],
    "name": "inventoriesOfDate",
    "outputs": [{
        "name": "",
        "type": "uint16[]"
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
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_date",
        "type": "uint256"
    }, {
        "name": "_token",
        "type": "uint256"
    }],
    "name": "priceOfDate",
    "outputs": [{
        "name": "_inventory",
        "type": "uint16"
    }, {
        "name": "_price",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_rpid",
        "type": "uint256"
    }, {
        "name": "_dates",
        "type": "uint256[]"
    }, {
        "name": "_token",
        "type": "uint256"
    }],
    "name": "pricesOfDate",
    "outputs": [{
        "name": "",
        "type": "uint256[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_rpid",
        "type": "uint256"
    }],
    "name": "ratePlanOfVendor",
    "outputs": [{
        "name": "_name",
        "type": "string"
    }, {
        "name": "_timestamp",
        "type": "uint256"
    }, {
        "name": "_ipfs",
        "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "name": "_vendorId",
        "type": "uint256"
    }, {
        "name": "_from",
        "type": "uint256"
    }, {
        "name": "_limit",
        "type": "uint256"
    }],
    "name": "ratePlansOfVendor",
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * RoomNightVendor
 * @class
 */

var RoomNightVendor = function () {
    function RoomNightVendor(web3, contractAddress, options) {
        _classCallCheck(this, RoomNightVendor);

        this.web3 = web3;

        this.contract = this.web3.eth.contract(ABI).at(contractAddress);
    }

    /**
     * Get inventories of dates
     * @param {Number} vendorId - Vendor id
     * @param {Number} rpid - Rateplan id
     * @param {Object} options
     * @returns {Promise}
     */


    _createClass(RoomNightVendor, [{
        key: 'inventoriesOfDate',
        value: function inventoriesOfDate(vendorId, rpid, dates, options) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.contract.inventoriesOfDate(vendorId, rpid, dates, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve(res[0]);
                    }
                });
            });
        }

        /**
         * Get prices of dates
         * @param {Number} vendorId - Vendor id
         * @param {Number} rpid - Rateplan id
         * @param {Number} dates - Dates E.g: [20180610,20180611]
         * @param {Number} token - Token id
         * @param {Object} options
         * @returns {Promise}
         */

    }, {
        key: 'pricesOfDate',
        value: function pricesOfDate(vendorId, rpid, dates, token, options) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.contract.pricesOfDate(vendorId, rpid, dates, token, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve(res[0]);
                    }
                });
            });
        }

        /**
         * Get price and inventory of date
         * @param {Number} vendorId - Vendor id
         * @param {Number} rpid - Rateplan id
         * @param {Number} date - Date E.g: 20180630
         * @param {Number} token - Token id
         * @param {Object} options
         * @returns {Promise} {inventory: Number, price: Number}
         * * inventory: Inventory
         * * price: Price
         */

    }, {
        key: 'priceOfDate',
        value: function priceOfDate(vendorId, rpid, date, token, options) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.contract.priceOfDate(vendorId, rpid, date, token, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            inventory: res[0],
                            price: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Get rateplans of vendor by vendor id
         * @param {Number} vendorId - Vendor id
         * @param {Number} offset - The begin id, if id = 0 search from the begin
         * @param {Number} limit - The limit of one page
         * @param {Object} options 
         * @returns {Promise} {rateplanIds: Number, nextRateplanId: Number}
         * * rateplanIds: Rateplan ids
         * * nextRateplanId: The next id of rateplan, if id = 0 the next rateplan is null
         */

    }, {
        key: 'ratePlansOfVendor',
        value: function ratePlansOfVendor(vendorId, offset, limit, options) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.contract.ratePlansOfVendor(vendorId, offset, limit, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            rateplanIds: res[0],
                            nextRateplanId: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Get rateplan information by vendor id and rateplan id
         * @param {Number} vendorId - Vendor id
         * @param {Number} rpid - Rateplan id
         * @param {Object} options
         * @returns {Promise} {name: String, createTime: Number, ipfsAddress: String}
         * * name: Rateplan name
         * * createTime: Create time: UTC timestamp(s)
         * * ipfsAddress: IPFS file address
         */

    }, {
        key: 'ratePlanOfVendor',
        value: function ratePlanOfVendor(vendorId, rpid, options) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                _this5.contract.ratePlanOfVendor(vendorId, rpid, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            name: res[0],
                            createTime: res[1],
                            ipfsAddress: res[2]
                        });
                    }
                });
            });
        }

        /**
         * Get prices and inventories by vendor id, rateplan id, dates, token id
         * @param {Number} vendorId - Vendor id
         * @param {Number} rpid - Rateplan Id
         * @param {Array} dates - Date E.g: [20180610,20180611]
         * @param {Number} token - Token id
         * @param {Object} options
         * @returns {Promise} {prices: Array, inventorys: Array}
         * * prices: Prices
         * * inventorys: Inventories
         */

    }, {
        key: 'pricesAndInventoriesOfDate',
        value: function pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
                _this6.contract.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            prices: res[0],
                            inventorys: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Update prices and inventory of rateplan
         * @param {Number} rpid - Rateplan Id
         * @param {Array} dates - Date E.g: [20180610,20180611]
         * @param {Number} inventory - Inventory
         * @param {Array} tokens - Token ids
         * @param {Array} prices - Prices of tokens
         * @param {Object} options
         * @returns {Promise} {tx: String, rpid: Number}
         * * tx: Transaction address
         * * rpid: Rateplan Id
         */

    }, {
        key: 'updatePrices',
        value: function updatePrices(rpid, dates, inventory, tokens, prices, options) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                _this7.contract.updatePrices(rpid, dates, inventory, tokens, prices, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this7.contract.RatePlanPriceChanged(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    rpid: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Update inventories of rateplan
         * @param {Number} rpid - Rateplan Id
         * @param {Array} dates - Date E.g: [20180610,20180611]
         * @param {Number} inventory - Inventory
         * @param {Object} options
         * @returns {Promise} {tx: String, rpid: Number}
         * * tx: Transaction address
         * * rpid: Rateplan Id
         */

    }, {
        key: 'updateInventories',
        value: function updateInventories(rpid, dates, inventory, options) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
                _this8.contract.updateInventories(rpid, dates, inventory, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this8.contract.RatePlanInventoryChanged(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    rpid: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Update the base price of all rateplans
         * @param {Number} rpid - Rateplan Id
         * @param {Array} tokens - Token ids
         * @param {Array} prices - Prices of tokens
         * @param {Number} inventory - Inventory
         * @param {Object} options
         * @returns {Promise} {tx: String, rpid: Number}
         * * tx: Transaction address
         * * rpid: Rateplan Id
         */

    }, {
        key: 'updateBasePrice',
        value: function updateBasePrice(rpid, tokens, prices, inventory, options) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
                _this9.contract.updateBasePrice(rpid, tokens, prices, inventory, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this9.contract.RatePlanBasePriceChanged(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    rpid: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Create new rateplan
         * @param {String} name - Rateplan name
         * @param {String} ipfs - The IPFS's address of rateplan's desc
         * @param {Object} options
         * @returns {Promise} {tx: String, vendorId: String, name: String, ipfs: String}
         * * tx: Transaction address
         * * vendorId: Vendor Id
         * * name: Rateplan name
         * * ipfs: The IPFS's address of rateplan's desc
         */

    }, {
        key: 'createRatePlan',
        value: function createRatePlan(name, ipfs, options) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
                _this10.contract.createRatePlan(name, ipfs, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this10.contract.RatePlanCreated(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    vendorId: res[0],
                                    name: res[1],
                                    ipfs: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Remove rateplan
         * @param {Number} rpid - Rateplan Id
         * @param {Object} options
         * @returns {Promise} {tx: String, vendorId: String, rpid: Number}
         * * tx: Transaction address
         * * vendorId: Vendor Id
         * * rpid: Rateplan Id
         */

    }, {
        key: 'removeRatePlan',
        value: function removeRatePlan(rpid, options) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
                _this11.contract.removeRatePlan(rpid, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this11.contract.RatePlanRemoved(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    vendorId: res[0],
                                    rpid: res[1]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Modify rateplan
         * @param {Number} rpid
         * @param {String} name 
         * @param {String} ipfs 
         * @param {Object} options
         * @returns {Promise} {tx: String, vendorId: String, rpid: Number, name: String, ipfs: String}
         * * tx: Transaction address
         * * vendorId: Vendor Id
         * * rpid: Rateplan Id
         * * name: Rateplan name
         * * ipfs: The IPFS's address of rateplan's desc
         */

    }, {
        key: 'modifyRatePlan',
        value: function modifyRatePlan(rpid, name, ipfs, options) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
                _this12.contract.modifyRatePlan(rpid, name, ipfs, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this12.contract.RatePlanModified(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    vendorId: res[0],
                                    rpid: res[1],
                                    name: res[2],
                                    ipfs: res[3]
                                });
                            }
                        });
                    }
                });
            });
        }
    }]);

    return RoomNightVendor;
}();

var ABI$1 = [{
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

/** 
 * RoomNightAdmin
 * @class
 */

var RoomNightAdmin = function () {
    function RoomNightAdmin(web3, contractAddress, options) {
        _classCallCheck$1(this, RoomNightAdmin);

        this.web3 = web3;

        this.contract = this.web3.eth.contract(ABI$1).at(contractAddress);
    }

    /**
     * Get Vendor ids by page
     * @param {Number} offset - The begin id, if id = 0 search from the begin
     * @param {Number} limit - The limit of one page
     * @param {Object} options
     * @returns {Promise} {vendorIds: Number, nextVendorId: Number }
     * * vendorIds: Vendor ids, 
     * * nextVendorId: The next id of vendor, if id = 0 the next vendor is null
     */


    _createClass$1(RoomNightAdmin, [{
        key: 'getVendorIds',
        value: function getVendorIds(offset, limit, options) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.contract.getVendorIds(offset, limit, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            vendorIds: res[0],
                            nextVendorId: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Get the vendor info by id
         * @param {Number} vendorId - Vendor id
         * @param {Object} options
         * @returns {Promise} {name: String, address: String, createTime: Number, isValid: Boolean}
         * * name: Vendor name
         * * address: Vendor address
         * * createTime: Create time: UTC timestamp(s)
         * * isValid: Vendor is valid or not
         */

    }, {
        key: 'getVendor',
        value: function getVendor(vendorId, options) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.contract.getVendor(vendorId, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            name: res[0],
                            address: res[1],
                            createTime: res[2],
                            isValid: res[3]
                        });
                    }
                });
            });
        }

        /**
         * Get vendor info by vendor address
         * @param {String} address - Vendor address
         * @param {Object} options
         * @returns {Promise} {name: String, address: String, createTime: Number, isValid: Boolean}
         * * name: Vendor name
         * * address: Vendor address
         * * createTime: Create time: UTC timestamp(s)
         * * isValid: Vendor is valid or not
         */

    }, {
        key: 'getVendorByAddress',
        value: function getVendorByAddress(address, options) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.contract.getVendorByAddress(address, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            name: res[0],
                            address: address,
                            createTime: res[2],
                            isValid: res[3]
                        });
                    }
                });
            });
        }

        /**
         * Get all supported tokens ids
         * @param {Number} offset - The begin id, if id = 0 search from the begin
         * @param {Number} limit - The limit of one page
         * @param {Object} options
         * @returns {Promise} {tokenIds: Number, nextVendorId: Number}
         * * tokenIds: Token ids
         * * nextVendorId: The next id of vendor, if id = 0 the next vendor is null
         */

    }, {
        key: 'supportedTokens',
        value: function supportedTokens(offset, limit, options) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.contract.supportedTokens(offset, limit, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            tokenIds: res[0],
                            nextVendorId: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Get token information by token id
         * @param {Number} tokenId - Token id
         * @param {Object} options
         * @returns {Promise} {symbole: String, name: String, decimal: Number, address: String}
         * * symbole: Token symbole
         * * name: Token name
         * * decimal: Token decimal
         * * address: Token address
         */

    }, {
        key: 'getToken',
        value: function getToken(tokenId, options) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                _this5.contract.getToken(tokenId, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else if (res) {
                        resolve({
                            symbole: res[0],
                            name: res[1],
                            decimal: res[2],
                            address: res[3]
                        });
                    }
                });
            });
        }

        /**
         * Update the base URI of token
         * @param {String} uri - The base URI of token
         * @param {Object} options
         * @returns {Promise} {tx: String, uri: String}
         * * tx: Transaction address
         * * uri: The base URI of token
         */

    }, {
        key: 'updateBaseTokenURI',
        value: function updateBaseTokenURI(uri, options) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
                _this6.contract.updateBaseTokenURI(uri, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this6.contract.TokenBaseURIChanged(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    uri: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Add vendor
         * @param {String} address - Vendor address
         * @param {String} name - Vendor name
         * @param {Object} options 
         * @returns {Promise} {tx: String, address: String, name: String}
         * * tx: Transaction address
         * * address: Vendor address
         * * name: Vendor name
         */

    }, {
        key: 'addVendor',
        value: function addVendor(address, name, options) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                _this7.contract.addVendor(address, name, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this7.contract.VendorAdded(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    address: res[0],
                                    name: res[1]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Remove vendor by vendor address
         * @param {String} address - Vendor address
         * @param {Object} options
         * @returns {Promise} {tx: String, address: String}
         * * tx: Transaction address
         * * address: Vendor address
         */

    }, {
        key: 'removeVendorByAddress',
        value: function removeVendorByAddress(address, options) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
                _this8.contract.removeVendorByAddress(address, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this8.contract.VendorRemoved(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    address: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Remove vendor by vendor id
         * @param {Number} vendorId - Vendor id
         * @param {Object} options
         * @returns {Promise} {tx: String, address: String}
         * * tx: Transaction address
         * * address: Vendor address
         */

    }, {
        key: 'removeVendorById',
        value: function removeVendorById(vendorId, options) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
                _this9.contract.removeVendorById(vendorId, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this9.contract.VendorRemoved(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    address: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Make vendor valid or invalid
         * @param {Number} vendorId - Vendor id
         * @param {Boolean} valid - Vendor is valid or not
         * @param {Object} options
         * @returns {Promise} {tx: String, address: String, valid: Boolean}
         * * tx: Transaction address
         * * address: Vendor address
         * * valid: Vendor is valid or not
         */

    }, {
        key: 'makeVendorValid',
        value: function makeVendorValid(vendorId, valid, options) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
                _this10.contract.makeVendorValid(vendorId, valid, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this10.contract.VendorValid(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    address: res[0],
                                    valid: res[1]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Add token
         * @param {String} contractAddress - Token contract address
         * @param {Object} options
         * @returns {Promise} {tx: String, address: String}
         * * tx: Transaction address
         * * address: Token contract address
         */

    }, {
        key: 'addToken',
        value: function addToken(contractAddress, options) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
                _this11.contract.addToken(contractAddress, {}, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this11.contract.TokenAdded(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    address: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Remove token
         * @param {Number} tokenId - Token id
         * @param {Object} options
         * @returns {Promise} {tx: String, id: Number}
         * * tx: Transaction address
         * * id: Token id
         */

    }, {
        key: 'removeToken',
        value: function removeToken(tokenId, options) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
                _this12.contract.removeToken(tokenId, {}, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this12.contract.TokenRemoved(function (err, res) {
                            event.stopWatching();

                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    id: res[0]
                                });
                            }
                        });
                    }
                });
            });
        }
    }]);

    return RoomNightAdmin;
}();

var ABI$2 = [{
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
  "constant": false,
  "inputs": [{
    "name": "_rnid",
    "type": "uint256"
  }, {
    "name": "_isRefund",
    "type": "bool"
  }],
  "name": "applyRefund",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_vendor",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_rnid",
    "type": "uint256"
  }],
  "name": "Refund",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_customer",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_rnid",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "_isRefund",
    "type": "bool"
  }],
  "name": "ApplyRefund",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_customer",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_vendor",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_rpid",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "_dates",
    "type": "uint256[]"
  }, {
    "indexed": false,
    "name": "_token",
    "type": "uint256"
  }],
  "name": "BuyInBatch",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_operator",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_approved",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "constant": false,
  "inputs": [{
    "name": "_approved",
    "type": "address"
  }, {
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_vendorId",
    "type": "uint256"
  }, {
    "name": "_rpid",
    "type": "uint256"
  }, {
    "name": "_dates",
    "type": "uint256[]"
  }, {
    "name": "_token",
    "type": "uint256"
  }],
  "name": "buyInBatch",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": true,
  "stateMutability": "payable",
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
    "name": "_rnid",
    "type": "uint256"
  }],
  "name": "refund",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_tokenId",
    "type": "uint256"
  }, {
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_operator",
    "type": "address"
  }, {
    "name": "_approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_tokenIds",
    "type": "uint256[]"
  }],
  "name": "transferFromInBatch",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
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
  "constant": false,
  "inputs": [],
  "name": "withdrawBalance",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
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
    "name": "_tokenAddress",
    "type": "address"
  }],
  "name": "withdrawToken",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_token",
    "type": "uint256"
  }],
  "name": "withdrawTokenId",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
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
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_rnid",
    "type": "uint256"
  }],
  "name": "isRefundApplied",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "_name",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "pure",
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
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
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
    "name": "_rnid",
    "type": "uint256"
  }],
  "name": "roomNight",
  "outputs": [{
    "name": "_vendorId",
    "type": "uint256"
  }, {
    "name": "_rpid",
    "type": "uint256"
  }, {
    "name": "_token",
    "type": "uint256"
  }, {
    "name": "_price",
    "type": "uint256"
  }, {
    "name": "_timestamp",
    "type": "uint256"
  }, {
    "name": "_date",
    "type": "uint256"
  }, {
    "name": "_ipfs",
    "type": "bytes32"
  }, {
    "name": "_name",
    "type": "string"
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
  }, {
    "name": "_isVendor",
    "type": "bool"
  }],
  "name": "roomNightsOfOwner",
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
  "inputs": [{
    "name": "interfaceID",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "_symbol",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RoomNightCustomer
 * @class
 */

var RoomNightCustomer = function () {
    function RoomNightCustomer(web3, contractAddress, options) {
        _classCallCheck$2(this, RoomNightCustomer);

        this.web3 = web3;

        this.contract = this.web3.eth.contract(ABI$2).at(contractAddress);
    }

    /**
     * Convert IPFS address from base58 to hex format(begin with 0x)
     * @param {String} ipfs IPFS address with base58 encoded
     * @returns {String} IPFS with hex format(begin with 0x)
     */


    _createClass$2(RoomNightCustomer, [{
        key: 'ipfsBase58ToHex',
        value: function ipfsBase58ToHex(ipfs) {
            var ipfsBuffer = bs58.decode(ipfs);
            var ipfsHexString = ipfsBuffer.toString('hex');
            if (ipfsHexString.length != 68) {
                return null;
            }
            ipfsHexString = '0x' + ipfsHexString.slice(4);
            return ipfsHexString;
        }

        /**
         * Conver IPFS address from hex format to base58 format
         * @param {String} ipfs IPFS address with hex format
         * @returns {String} IPFS with base58 format
         */

    }, {
        key: 'ipfsHexToBase58',
        value: function ipfsHexToBase58(ipfs) {
            ipfs = ipfs.replace('0x', '');
            if (ipfs.length != 64) {
                return null;
            }
            var ipfsBuffer = Buffer.from('1220' + ipfs, 'hex');
            return bs58.encode(ipfsBuffer);
        }

        /**
         * The name of current room night token
         * @returns {Promise} {String} The name of current room night token 
         */

    }, {
        key: 'name',
        value: function name() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.contract.name(function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * The symbol of current room night token
         * @returns {Promise} {String} The symbol of current room night token
         */

    }, {
        key: 'symbol',
        value: function symbol() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.contract.symbol(function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * The URI of token's information
         * @param {Number} tokenId Token id
         * @returns {Promise} {String} The URI of token. E.g: http://ipfs.tripiochina.cn/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8
         */

    }, {
        key: 'tokenURI',
        value: function tokenURI(tokenId) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.contract.tokenURI(tokenId, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * The balance of any address
         * @param {String} owner The owner address of some token
         * @returns {Promise} {BigNumber} The token balance
         */

    }, {
        key: 'balanceOf',
        value: function balanceOf(owner) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.contract.balanceOf(owner, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * Get the owner of any token
         * @param {Number} tokenId The room night token id
         * @returns {Promise} {String} The token's owner address
         */

    }, {
        key: 'ownerOf',
        value: function ownerOf(tokenId) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
                _this5.contract.ownerOf(tokenId, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * Get the approved address for a single room night token
         * @param {Number} tokenId The room night token id
         * @returns {Promise} {String} The approved address for this token, or the zero address if there is none
         */

    }, {
        key: 'getApproved',
        value: function getApproved(tokenId) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
                _this6.contract.getApproved(tokenId, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * Query if an address is an authorized operator for another address
         * @param {String} owner The address that owns the token
         * @param {String} operator The address that acts on behalf of the owner
         * @returns {Promise} {Boolean} True if operator is an approved `operator` for `owner`, false otherwise
         */

    }, {
        key: 'isApprovedForAll',
        value: function isApprovedForAll(owner, operator) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
                _this7.contract.isApprovedForAll(owner, operator, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * Whether the token is in refund applications
         * @param {Number} rnid The room night token id
         * @returns {Promise} {Boolean} True if token in refund applications, false otherwise
         */

    }, {
        key: 'isRefundApplied',
        value: function isRefundApplied(rnid) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
                _this8.contract.isRefundApplied(rnid, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }

        /**
         * Get the room night infomation in detail
         * @param {Number} rnid The room night token id
         * @returns {Promise} {vendorId: BigNumber, rateplanId: BigNumber, tokenId: BigNumber, price: BigNumber, timestamp: BigNumber, date: BigNumber, ipfs: Hex String, rateplanName: String}
         * * vendorId: Vendor id
         * * rateplanId: Rateplan id
         * * tokenId: ERC2.0 Token id
         * * price: ERC2.0 price of RP
         * * timestamp: Create time: UTC timestamp(s)
         * * date: Order date E.g: 20180621
         * * ipfs: The IPFS's address of rateplan's desc(Hex String)
         * * rateplanName: Rateplan name
         */

    }, {
        key: 'roomNight',
        value: function roomNight(rnid) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
                _this9.contract.roomNight(rnid, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({
                            vendorId: res[0],
                            rateplanId: res[1],
                            tokenId: res[2],
                            price: res[3],
                            timestamp: res[4],
                            date: res[5],
                            ipfs: _this9.ipfsHexToBase58(res[6]),
                            rateplanName: res[7]
                        });
                    }
                });
            });
        }

        /**
         * Get all the room nights of the msg.sender(Customer or Vendor)
         * @param {Number} from The begin id, if id = 0 search from the begin
         * @param {Number} limit The limit of one page
         * @param {Boolean} isVendor Is vendor or not
         * @param {Dict} options {from: msg.sender}
         * @returns {Promise} {roomnightIds: BigNumber|Array, nextId: BigNumber}
         * * roomnightIds: Room night token ids
         * * nextId: The next id of token, if id = 0 the next token is null
         */

    }, {
        key: 'roomNightsOfOwner',
        value: function roomNightsOfOwner(from, limit, isVendor, options) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
                _this10.contract.roomNightsOfOwner(from, limit, isVendor, {
                    from: options.from
                }, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({
                            roomnightIds: res[0],
                            nextId: res[1]
                        });
                    }
                });
            });
        }

        /**
         * Transfers the ownership of an room night token from one address to another address.
         * When transfer is complete, this function checks if _to is a smart contract (code size > 0). 
         * If so, it calls onERC721Received on _to and throws if the return value is not bytes4(keccak256("onERC721Received(address,uint256,bytes)")).
         * @param {String} from The current owner of the room night token
         * @param {String} to The new owner
         * @param {Number} tokenId The token to transfer
         * @param {Promise} {tx: String, from: BigNumber, to: BigNumber, tokenId: BigNumber}
         * * tx: Transaction number
         * * from: The current owner of the room night token
         * * to: The new owner
         * * tokenId: The token to transfer
         */

    }, {
        key: 'safeTransferFrom',
        value: function safeTransferFrom(from, to, tokenId) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
                _this11.contract.safeTransferFrom(from, to, tokenId, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this11.contract.Transfer(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    from: res[0],
                                    to: res[1],
                                    tokenId: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Transfers the ownership of an room night token from one address to another address
         * @param {String} from The current owner of the room night token
         * @param {String} to The new owner
         * @param {Number} tokenId The token to transfer
         * @param {Promise} {tx: String, from: BigNumber, to: BigNumber, tokenId: BigNumber}
         * * tx: Transaction number
         * * from: The current owner of the room night token
         * * to: The new owner
         * * tokenId: The token to transfer
         */

    }, {
        key: 'transferFrom',
        value: function transferFrom(from, to, tokenId) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
                _this12.contract.transferFrom(from, to, tokenId, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this12.contract.Transfer(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    from: res[0],
                                    to: res[1],
                                    tokenId: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Transfers the ownership of tokens from one address to another address
         * @param {String} from The current owner of the room night token
         * @param {String} to The new owner
         * @param {Number|Array} tokenIds The tokens to transfer
         * @param {Promise} {tx: String, from: BigNumber, to: BigNumber, tokenIds: Number|Array}
         * * tx: Transaction number
         * * from: The current owner of the room night token
         * * to: The new owner
         * * tokenIds: The token to transfer
         */

    }, {
        key: 'transferFromInBatch',
        value: function transferFromInBatch(from, to, tokenIds) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
                _this13.contract.transferFromInBatch(from, to, tokenIds, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this13.contract.Transfer(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    from: res[0],
                                    to: res[1],
                                    tokenIds: tokenIds
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Set or reaffirm the approved address for an room night token
         * @param {String} approved The new approved token controller
         * @param {Number} tokenId The token to approve
         * @param {Promise} {tx: String, owner: String, approved: String, tokenId: BigNumber}
         * * tx: Transaction number
         * * owner: The current owner of the room night token
         * * approved: The new approved token controller
         * * tokenId: The token to approve
         */

    }, {
        key: 'approve',
        value: function approve(approved, tokenId) {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
                _this14.contract.approve(approved, tokenId, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this14.contract.Approval(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    owner: res[0],
                                    approved: res[1],
                                    tokenId: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Enable or disable approval for a third party ("operator") to manage all of msg.sender's assets
         * @param {String} operator The new approved token controller
         * @param {Boolean} approved The token to approve
         * @param {Promise} {tx: String, owner: String, operator: String, approved: Boolean}
         * * tx: Transaction number
         * * owner: The current owner of the room night token
         * * operator: The new approved token controller
         * * approved: The token to approve
         */

    }, {
        key: 'setApprovalForAll',
        value: function setApprovalForAll(operator, approved) {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
                _this15.contract.setApprovalForAll(operator, approved, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this15.contract.ApprovalForAll(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    owner: res[0],
                                    operator: res[1],
                                    approved: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * By room nigth in batch through ETH(`token` == 0) or other digital token(`token` != 0)
         * @param {Number} vendorId The vendor Id
         * @param {Number} rpid The vendor's rate plan id
         * @param {Number|Array} dates The booking dates
         * @param {Number} token The digital currency token
         * @param {Promise} {tx: String, customer: String, vendor: String, rpid: BigNumber, dates: Number|Array, token: BigNumber}
         * * tx: Transaction number
         * * customer: The customer address
         * * vendor: Then vendor address
         * * rpid: The rateplan id
         * * dates: The booking dates
         * * token: The digital currency token
         */

    }, {
        key: 'buyInBatch',
        value: function buyInBatch(vendorId, rpid, dates, token) {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
                _this16.contract.buyInBatch(vendorId, rpid, dates, token, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this16.contract.BuyInBatch(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    customer: res[0],
                                    vendor: res[1],
                                    rpid: res[2],
                                    dates: dates,
                                    token: res[4]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Apply room night refund
         * @param {Number} vendorId The vendor Id
         * @param {Number} rnid Room night token id
         * @param {Boolean} isRefund if true the `rnid` can refund else not
         * @param {Promise} {tx: String, customer: String, rnid: BigNumber, isRefund: Boolean}
         * * tx: Transaction number
         * * customer: The customer address
         * * rnid: The rateplan id
         * * isRefund: if true the `rnid` can refund else not
         */

    }, {
        key: 'applyRefund',
        value: function applyRefund(vendorId, rnid, isRefund) {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
                _this17.contract.applyRefund(vendorId, rnid, isRefund, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this17.contract.ApplyRefund(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    customer: res[0],
                                    rnid: res[1],
                                    isRefund: res[2]
                                });
                            }
                        });
                    }
                });
            });
        }

        /**
         * Refund through ETH or other digital token, give the room night ETH/TOKEN to customer and take back inventory
         * @param {Number} rnid Room night token id
         * @param {Promise} {tx: String, vendor: String, rnid: BigNumber}
         * * tx: Transaction number
         * * vendor: Then vendor address
         * * rnid: Room night token id
         */

    }, {
        key: 'refund',
        value: function refund(rnid) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
                _this18.contract.refund(rnid, function (err, tx) {
                    if (err) {
                        reject(err);
                    } else {
                        var event = _this18.contract.Refund(function (err, res) {
                            event.stopWatching();
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    tx: tx,
                                    vendor: res[0],
                                    rnid: res[1]
                                });
                            }
                        });
                    }
                });
            });
        }
    }]);

    return RoomNightCustomer;
}();

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * Tripio
 * @class
 */

var Tripio = function () {
    /**
     * Create a Tripio.
     * @param {Web3} web3 - The Web3.
     */
    function Tripio(web3, options) {
        _classCallCheck$3(this, Tripio);

        console.log('Hello Tripio!');

        var env = this.initEnv(options ? options.env : 'main');

        var _web3 = new Web3(new Web3.providers.HttpProvider(env.host));
        // this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // if (typeof window.web3 !== 'undefined') {
        //     this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // }
        // else {
        //     this.web3 = window.web3;
        // }

        this.roomNightVendor = new RoomNightVendor(_web3, env.contract.rnVendor);
        this.roomNightAdmin = new RoomNightAdmin(_web3, env.contract.rnAdmin);
        this.roomNightCustomer = new RoomNightCustomer(_web3, env.contract.rnCustomer);
    }

    _createClass$3(Tripio, [{
        key: 'initEnv',
        value: function initEnv(env) {
            var map = {
                main: {
                    host: 'http://eth.tripiochina.cn',
                    contract: {
                        rnAdmin: '0x45A4C11105F6d0Ba19A8e848450A9fA3642c4fBa',
                        rnVendor: '0xa11C24A774dEbcCf53Da7152964d7C7DAd960fa1',
                        rnCustomer: '0x605FdEBd3b51eb671723cce98EB5D7B227B04fd0'
                    }
                },
                ropsten: {
                    host: 'https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57',
                    contract: {
                        rnAdmin: '0x1E212155EF1197cC42B8A8D5dDffF6Dc4C584CE7',
                        rnVendor: '0x6A9C0fDAa9361b44eeE09ad0d0304ec941173361',
                        rnCustomer: '0xcBf788b40d94CBa28052e870298334dCA837143a'
                    }
                }
            };

            return map[env] || map.main;
        }
    }]);

    return Tripio;
}();

module.exports = Tripio;
