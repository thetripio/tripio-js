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
     * @return {Promise}
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
     * @return {Promise}
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
        return new Promise();
    }

    updateInventories(rpid, dates, inventory, options) {

    }

    updateBasePrice(rpid, tokens, prices, inventory, options) {

    }

    createRatePlan(name, ipfs, options) {

    }

    removeRatePlan(rpid, options) {

    }

    modifyRatePlan(rpid, name, ipfs, options) {

    }
}

export default RoomNightVendor;