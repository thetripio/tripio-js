import ABI from '../abis/roomnight-vendor';
import Utils from '../utils/index';

/** 
 * RoomNightVendor
 * @class
 */
class RoomNightVendor {
    constructor(web3, contractAddress, options) {
        this.web3 = web3;

        this.contract = this.web3.eth.contract(ABI).at(contractAddress);
    }

    /**
     * Get inventories of dates
     * @param {Number} vendorId - Vendor id
     * @param {Number} rpid - Rateplan id
     * @param {Number} dates - Dates E.g: [20180610,20180611]
     * @param {Object} options
     * @returns {Promise}
     */
    inventoriesOfDate(vendorId, rpid, dates, options) {
        return new Promise((resolve, reject) => {
            this.contract.inventoriesOfDate(vendorId, rpid, dates, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
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
    pricesOfDate(vendorId, rpid, dates, token, options) {
        return new Promise((resolve, reject) => {
            this.contract.pricesOfDate(vendorId, rpid, dates, token, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
                    resolve(res);
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
    priceOfDate(vendorId, rpid, date, token, options) {
        return new Promise((resolve, reject) => {
            this.contract.priceOfDate(vendorId, rpid, date, token, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
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
    ratePlansOfVendor(vendorId, offset, limit, options) {
        return new Promise((resolve, reject) => {
            this.contract.ratePlansOfVendor(vendorId, offset, limit, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
                    resolve({
                        rateplanIds: res[0],
                        nextRateplanId:res[1]
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
    ratePlanOfVendor(vendorId, rpid, options) {
        return new Promise((resolve, reject) => {
            this.contract.ratePlanOfVendor(vendorId, rpid, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
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
    pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options) {
        return new Promise((resolve, reject) => {
            this.contract.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
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
    updatePrices(rpid, dates, inventory, tokens, prices, options) {

        return new Promise((resolve, reject) => {
            this.contract.updatePrices(rpid, dates, inventory, tokens, prices, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanPriceChanged((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                rpid: res[0]
                            });
                        }
                    })
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
    updateInventories(rpid, dates, inventory, options) {

        return new Promise((resolve, reject) => {
            this.contract.updateInventories(rpid, dates, inventory, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanInventoryChanged((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                rpid: res[0]
                            });
                        }
                    })
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
    updateBasePrice(rpid, tokens, prices, inventory, options) {
        
        return new Promise((resolve, reject) => {
            this.contract.updateBasePrice(rpid, tokens, prices, inventory, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanBasePriceChanged((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                rpid: res[0]
                            });
                        }
                    })
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
    createRatePlan(name, ipfs, options) {
        var ipfsHexString = Utils.ipfsBase58ToHex(ipfs);

        return new Promise((resolve, reject) => {
            this.contract.createRatePlan(name, ipfsHexString, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanCreated((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                vendorId: res[0],
                                name: res[1],
                                ipfs: res[2]
                            });
                        }
                    })
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
    removeRatePlan(rpid, options) {

        return new Promise((resolve, reject) => {
            this.contract.removeRatePlan(rpid, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanRemoved((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                vendorId: res[0],
                                rpid: res[1]
                            });
                        }
                    })
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
    modifyRatePlan(rpid, name, ipfs, options) {
        var ipfsHexString = Utils.ipfsBase58ToHex(ipfs);

        return new Promise((resolve, reject) => {
            this.contract.modifyRatePlan(rpid, name, ipfsHexString, {
                from: options.from
            }, (err, tx) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.RatePlanModified((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                tx,
                                vendorId: res[0],
                                rpid: res[1],
                                name: res[2],
                                ipfs: res[3]
                            });
                        }
                    })
                }
            });
        });

    }
}

export default RoomNightVendor;