//import ABI from '../abis/vendor';

/** 
 * RoomNightVendor
 * @class
 */
class RoomNightVendor {
    constructor(web3) {
        this.web3 = web3;
    }

    /**
     * Get price and inventory of date.
     * @param {Number} vendorId.
     * @param {Number} rpid.
     * @return {Promise}
     */
    priceOfDate(vendorId, rpid) {
        console.log('priceOfDate!');
    }
}

export default RoomNightVendor;