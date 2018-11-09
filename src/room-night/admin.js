import ABI from '../abis/roomnight-admin';

/** 
 * RoomNightAdmin
 * @class
 */
class RoomNightAdmin {
    constructor(web3) {
        this.web3 = web3;
        
        this.contract = this.web3.eth.contract(ABI).at('0x1E212155EF1197cC42B8A8D5dDffF6Dc4C584CE7');
    }

    /**
     * getVendorIds
     * @param {Number} offset
     * @param {Number} limit
     * @return {Promise}
     */
    getVendorIds(offset, limit) {

        return new Promise((resolve, reject) => {
            this.contract.getVendorIds(offset, limit, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    /**
     * getVendor
     * @param {Number} vendorId
     * @return {Promise}
     */
    getVendor(vendorId) {
        
        return new Promise((resolve, reject) => {
            this.contract.getVendor(vendorId, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
                
            });
        });
    }

    /**
     * getVendorByAddress
     * @param {String} address
     * @return {Promise}
     */
    getVendorByAddress(address) {

        return new Promise((resolve, reject) => {
            this.contract.getVendorByAddress(address, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    /**
     * supportedTokens
     * @param {Number} offset 
     * @param {Number} limit
     * @return {Promise}
     */
    supportedTokens(offset, limit) {

        return new Promise((resolve, reject) => {
            this.contract.supportedTokens(offset, limit, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }

    /**
     * getToken
     * @param {Number} tokenId
     * @return {Promise}
     */
    getToken(tokenId) {

        return new Promise((resolve, reject) => {
            this.contract.getToken(tokenId, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
}

export default RoomNightAdmin;