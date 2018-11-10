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
     * Get Vendor ids by page
     * @param {Number} offset - The begin id, if id = 0 search from the begin
     * @param {Number} limit - The limit of one page
     * @param {Object} options
     * @returns {Promise} {vendorIds: Number, nextVendorId: Number }
     * * vendorIds: Vendor ids, 
     * * nextVendorId: The next id of vendor, if id = 0 the next vendor is null
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
     * Get the vendor info by id
     * @param {Number} vendorId - Vendor id
     * @param {Object} options
     * @returns {Promise} {name: String, address: String, createTime: Number, isValid: Boolean}
     * * name: Vendor name
     * * address: Vendor address
     * * createTime: Create time: UTC timestamp(s)
     * * isValid: Vendor is valid or not
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
     * Get vendor info by vendor address
     * @param {String} address - Vendor address
     * @param {Object} options
     * @returns {Promise} {name: String, address: String, createTime: Number, isValid: Boolean}
     * * name: Vendor name
     * * address: Vendor address
     * * createTime: Create time: UTC timestamp(s)
     * * isValid: Vendor is valid or not
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
     * Get all supported tokens ids
     * @param {Number} offset - The begin id, if id = 0 search from the begin
     * @param {Number} limit - The limit of one page
     * @param {Object} options
     * @returns {Promise} {tokenIds: Number, nextVendorId: Number}
     * * tokenIds: Token ids
     * * nextVendorId: The next id of vendor, if id = 0 the next vendor is null
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
     * Get token information by token id
     * @param {Number} tokenId - Token id
     * @param {Object} options
     * @returns {Promise} {symbole: String, name: String, decimal: Number, address: String}
     * * symbole: Token symbole
     * * name: Token name
     * * decimal: Token decimal
     * * address: Token address
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

    /**
     * Update the base URI of token
     * @param {String} uri - The base URI of token
     * @param {Object} options
     * @returns {Promise} {String}
     */
    updateBaseTokenURI(uri, options) {

        return new Promise((resolve, reject) => {
            this.contract.updateBaseTokenURI(uri, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.TokenBaseURIChanged((err, res) => {
                        event.stopWatching();
                        
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

    /**
     * Add vendor
     * @param {String} address - Vendor address
     * @param {String} name - Vendor name
     * @param {Object} options 
     * @returns {Promise} {vendor: String, name: String}
     * * vendor: Vendor index
     * * name: Vendor name
     */
    addVendor(address, name, options) {

        return new Promise((resolve, reject) => {
            this.contract.addVendor(address, name, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.VendorAdded((err, res) => {
                        event.stopWatching();

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

    /**
     * Remove vendor by vendor address
     * @param {String} address - Vendor address
     * @param {Object} options
     * @returns {Promise} {String}
     */
    removeVendorByAddress(address, options) {

        return new Promise((resolve, reject) => {
            this.contract.removeVendorByAddress(address, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.VendorRemoved((err, res) => {
                        event.stopWatching();

                        if(err) {
                            reject(err);
                        }
                        else {
                            resolve(res[0]);
                        }
                    })
                }
            });
        });
    }

    /**
     * Remove vendor by vendor id
     * @param {Number} vendorId - Vendor id
     * @param {Object} options
     * @returns {Promise} {String}
     */
    removeVendorById(vendorId, options) {

        return new Promise((resolve, reject) => {
            this.contract.removeVendorById(vendorId, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.VendorRemoved((err, res) => {
                        event.stopWatching();

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

    /**
     * Make vendor valid or invalid
     * @param {Number} vendorId - Vendor id
     * @param {Boolean} valid - Vendor is valid or not
     * @param {Object} options
     * @returns {Promise} {vendorId: String, valid: Boolean}
     */
    makeVendorValid(vendorId, valid, options) {

        return new Promise((resolve, reject) => {
            this.contract.makeVendorValid(vendorId, valid, {}, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.VendorValid((err, res) => {
                        event.stopWatching();

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve({
                                vendorId: res[0],
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
     * @returns {Promise} {String}
     */
    addToken(contractAddress, options) {

        return new Promise((resolve, reject) => {
            this.contract.addToken(contractAddress, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.TokenAdded((err, res) => {
                        event.stopWatching();

                        if (err) {
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

    /**
     * Remove token
     * @param {Number} tokenId - Token id
     * @param {Object} options
     * @returns {Promise} {Number}
     */
    removeToken(tokenId, options) {

        return new Promise((resolve, reject) => {
            this.contract.removeToken(tokenId, {}, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    let event = this.contract.TokenRemoved((err, res) => {
                        event.stopWatching();

                        if (err) {
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
}

export default RoomNightAdmin;