import ABI from '../abis/roomnight-vendor';

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


    updatePrices(rpid, dates, inventory, tokens, prices, options) {

        return new Promise((resolve, reject) => {
            this.contract.updatePrices(rpid, dates, inventory, tokens, prices, {}, (err, tx) => {
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

    updateInventories(rpid, dates, inventory, options) {

        return new Promise((resolve, reject) => {
            this.contract.updateInventories(rpid, dates, inventory, {}, (err, tx) => {
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

    updateBasePrice(rpid, tokens, prices, inventory, options) {

        return new Promise((resolve, reject) => {
            this.contract.updateBasePrice(rpid, tokens, prices, inventory, {}, (err, tx) => {
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

    createRatePlan(name, ipfs, options) {

        return new Promise((resolve, reject) => {
            this.contract.createRatePlan(name, ipfs, {}, (err, tx) => {
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

    removeRatePlan(rpid, options) {

        return new Promise((resolve, reject) => {
            this.contract.removeRatePlan(rpid, {}, (err, tx) => {
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

    modifyRatePlan(rpid, name, ipfs, options) {

        return new Promise((resolve, reject) => {
            this.contract.modifyRatePlan(rpid, name, ipfs, {}, (err, tx) => {
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