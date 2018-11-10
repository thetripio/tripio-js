import ABI from '../abis/roomnight-admin';

/** 
 * RoomNightAdmin
 * @class
 */
class RoomNightAdmin {
    constructor(web3, contractAddress, options) {
        this.web3 = web3;
        
        this.contract = this.web3.eth.contract(ABI).at(contractAddress);
    }

    /**
     * getVendorIds
     * @param {Number} offset
     * @param {Number} limit
     * @return {Promise}
     */
    getVendorIds(offset, limit, options) {

        return new Promise((resolve, reject) => {
            this.contract.getVendorIds(offset, limit, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else if(res) {
                    resolve({
                        vendorIds :res[0],
                        nextVendorId: res[1]
                    });
                }
            });
        });
    }

    /**
     * getVendor
     * @param {Number} vendorId
     * @return {Promise}
     */
    getVendor(vendorId, options) {
        
        return new Promise((resolve, reject) => {
            this.contract.getVendor(vendorId, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if(res) {
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
     * getVendorByAddress
     * @param {String} address
     * @return {Promise}
     */
    getVendorByAddress(address, options) {

        return new Promise((resolve, reject) => {
            this.contract.getVendorByAddress(address, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
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
     * supportedTokens
     * @param {Number} offset 
     * @param {Number} limit
     * @return {Promise}
     */
    supportedTokens(offset, limit, options) {

        return new Promise((resolve, reject) => {
            this.contract.supportedTokens(offset, limit, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res) {
                    resolve({
                        tokenIds: res[0],
                        nextVendorId: res[1]
                    });
                }
            });
        });
    }

    /**
     * getToken
     * @param {Number} tokenId
     * @return {Promise}
     */
    getToken(tokenId, options) {

        return new Promise((resolve, reject) => {
            this.contract.getToken(tokenId, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else if(res) {
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

    updateBaseTokenURI(uri, options) {
        return new Promise((resolve, reject) => {
            this.contract.updateBaseTokenURI(uri, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    this.contract.TokenBaseURIChanged((err, res) => {
                        if(err) {
                            reject(err);
                        }
                        else {
                            resolve(res[0]);
                        }
                    });
                }
            });
        });
    }

    addVendor(vendor, name, options) {
        return new Promise((resolve, reject) => {
            this.contract.addVendor(vendor, name, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    this.contract.VendorAdded((err, res) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                vendor: res[0],
                                name: res[1]
                            });
                        }
                    });
                }
            })
        });
    }
}

export default RoomNightAdmin;