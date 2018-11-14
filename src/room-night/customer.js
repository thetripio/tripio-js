import ABI from '../abis/roomnight-customer';
import VABI from '../abis/roomnight-vendor';
import TABI from '../abis/roomnight-token';
import AABI from '../abis/roomnight-admin';
import bs58 from 'bs58';
import { Buffer } from 'buffer';

/**
 * RoomNightCustomer
 * @class
 */
class RoomNightCustomer {
    constructor(web3, contractAddress, vendorAddress, adminAddress, options) {
        this.web3 = web3;
        this.contractAddress = contractAddress;
        this.contract = this.web3.eth.contract(ABI).at(contractAddress);
        this.vendorContract = this.web3.eth.contract(VABI).at(vendorAddress);
        this.adminContract =  this.web3.eth.contract(AABI).at(adminAddress);
    }

    /**
     * Convert IPFS address from base58 to hex format(begin with 0x)
     * @param {String} ipfs IPFS address with base58 encoded
     * @returns {String} IPFS with hex format(begin with 0x)
     */
    ipfsBase58ToHex(ipfs) {
        let ipfsBuffer = bs58.decode(ipfs)
        var ipfsHexString = ipfsBuffer.toString('hex');
        if(ipfsHexString.length != 68) {
            return null;
        }
        ipfsHexString =  '0x' + ipfsHexString.slice(4);
        return ipfsHexString
    }

    /**
     * Conver IPFS address from hex format to base58 format
     * @param {String} ipfs IPFS address with hex format
     * @returns {String} IPFS with base58 format
     */
    ipfsHexToBase58(ipfs) {
        ipfs = ipfs.replace('0x', '');
        if(ipfs.length != 64) {
            return null;
        }
        let ipfsBuffer = Buffer.from('1220' + ipfs, 'hex');
        return bs58.encode(ipfsBuffer);
    }

    /**
     * 
     * @param {token} token 
     * @returns {Promise} {Contract instance}
     */
    _getTokenContractInstance(token) {
        return new Promise((resolve, reject) => {
            this.adminContract.getToken(token, (err, res) => {
                if(err) {
                    reject(err);
                }else {
                    let tokenContract = this.web3.eth.contract(TABI).at(res[3]);
                    resolve(tokenContract);
                }
            });
        });
    }
    
    /**
     * The name of current room night token
     * @returns {Promise} {String} The name of current room night token 
     */
    name() {
        return new Promise((resolve, reject) => {
            this.contract.name((err, res) => {
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
     * The symbol of current room night token
     * @returns {Promise} {String} The symbol of current room night token
     */
    symbol() {
        return new Promise((resolve, reject) => {
            this.contract.symbol((err, res) => {
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
     * The URI of token's information
     * @param {Number} tokenId Token id
     * @returns {Promise} {String} The URI of token. E.g: http://ipfs.tripiochina.cn/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8
     */
    tokenURI(tokenId) {
        return new Promise((resolve, reject) => {
            this.contract.tokenURI(tokenId, (err, res) => {
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
     * The balance of any address
     * @param {String} owner The owner address of some token
     * @returns {Promise} {BigNumber} The token balance
     */
    balanceOf(owner) {
        return new Promise((resolve, reject) => {
            this.contract.balanceOf(owner, (err, res) => {
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
     * Get the owner of any token
     * @param {Number} tokenId The room night token id
     * @returns {Promise} {String} The token's owner address
     */
    ownerOf(tokenId) {
        return new Promise((resolve, reject) => {
            this.contract.ownerOf(tokenId, (err, res) => {
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
     * Get the approved address for a single room night token
     * @param {Number} tokenId The room night token id
     * @returns {Promise} {String} The approved address for this token, or the zero address if there is none
     */
    getApproved(tokenId) {
        return new Promise((resolve, reject) => {
            this.contract.getApproved(tokenId, (err, res) => {
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
     * Query if an address is an authorized operator for another address
     * @param {String} owner The address that owns the token
     * @param {String} operator The address that acts on behalf of the owner
     * @returns {Promise} {Boolean} True if operator is an approved `operator` for `owner`, false otherwise
     */
    isApprovedForAll(owner, operator) {
        return new Promise((resolve, reject) => {
            this.contract.isApprovedForAll(owner, operator, (err, res) => {
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
     * Whether the token is in refund applications
     * @param {Number} rnid The room night token id
     * @returns {Promise} {Boolean} True if token in refund applications, false otherwise
     */
    isRefundApplied(rnid) {
        return new Promise((resolve, reject) => {
            this.contract.isRefundApplied(rnid, (err, res) => {
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
    roomNight(rnid) {
        return new Promise((resolve, reject) => {
            this.contract.roomNight(rnid, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve({
                        vendorId :res[0],
                        rateplanId: res[1],
                        tokenId: res[2],
                        price: res[3],
                        timestamp: res[4],
                        date: res[5],
                        ipfs: this.ipfsHexToBase58(res[6]),
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
    roomNightsOfOwner(from, limit, isVendor, options) {
        return new Promise((resolve, reject) => {
            this.contract.roomNightsOfOwner(from, limit, isVendor, {
                from: options.from
            }, (err, res) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve({
                        roomnightIds : res[0],
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
     * @param {String} data Additional data with no specified format, sent in call to `to`
     * @param {Promise} {tx: String, from: BigNumber, to: BigNumber, tokenId: BigNumber}
     * * tx: Transaction number
     * * from: The current owner of the room night token
     * * to: The new owner
     * * tokenId: The token to transfer
     */
    safeTransferFrom(from, to, tokenId, data) {
        return new Promise((resolve, reject) => {
            this.contract.safeTransferFrom(from, to, tokenId, data, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.Transfer((err, res) => {
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
    transferFrom(from, to, tokenId) {
        return new Promise((resolve, reject) => {
            this.contract.transferFrom(from, to, tokenId, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.Transfer((err, res) => {
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
     * @param {Number[]} tokenIds The tokens to transfer
     * @param {Promise} {tx: String, from: BigNumber, to: BigNumber, tokenIds: Number|Array}
     * * tx: Transaction number
     * * from: The current owner of the room night token
     * * to: The new owner
     * * tokenIds: The token to transfer
     */
    transferFromInBatch(from, to, tokenIds) {
        return new Promise((resolve, reject) => {
            this.contract.transferFromInBatch(from, to, tokenIds, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.Transfer((err, res) => {
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
    approve(approved, tokenId) {
        return new Promise((resolve, reject) => {
            this.contract.approve(approved, tokenId, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.Approval((err, res) => {
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
    setApprovalForAll(operator, approved) {
        return new Promise((resolve, reject) => {
            this.contract.setApprovalForAll(operator, approved, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.ApprovalForAll((err, res) => {
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
     * @param {Number[]} dates The booking dates
     * @param {Number} token The digital currency token
     * @param {Dict} options {from: msg.sender}
     * @param {Promise} {tx: String, customer: String, vendor: String, rpid: BigNumber, dates: Number|Array, token: BigNumber}
     * * tx: Transaction number
     * * customer: The customer address
     * * vendor: Then vendor address
     * * rpid: The rateplan id
     * * dates: The booking dates
     * * token: The digital currency token
     */
    buyInBatch(vendorId, rpid, dates, token, options) {
        let self = this;
        let _buy = function(value) {
            return new Promise((resolve, reject) => {
                self.contract.buyInBatch(vendorId, rpid, dates, token, {from: options.from, value: value}, (err, tx) => {
                    if(err) {
                        reject(err);
                    }
                    else {
                        let event = self.contract.BuyInBatch((err, res) => {
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
        };
        
        return new Promise((resolve, reject) => {
            this.vendorContract.pricesOfDate(vendorId, rpid, dates, token,(err, prices) => {
                if(err) {
                    reject(err);
                }else {
                    var total = prices.reduce((left, right) => {
                        return left.plus(right);
                    });
                    resolve(total);
                }
            });
        }).then((total) => {
            if(token == 0) {
                // ETH Pay
                return _buy(total);
            }else {
                return this._getTokenContractInstance(token).then((contractInstance) => {
                    return new Promise((resolve, reject) => {
                        contractInstance.approve(this.contractAddress, total, {from: options.from}, (err, res) => {
                            if(err) {
                                reject(err);     
                            }else {
                                let event = contractInstance.Approval((err, res) => {
                                    event.stopWatching();
                                    if(err) {
                                        reject(err);
                                    }else {
                                        resolve(res);
                                    }
                                });
                            }
                        });
                    });
                }).then((res) => {
                    return _buy(0);
                });
            }
        });
    }

    /**
     * Apply room night refund
     * @param {Number} rnid Room night token id
     * @param {Boolean} isRefund if true the `rnid` can refund else not
     * @param {Dict} options {from: msg.sender}
     * @param {Promise} {tx: String, customer: String, rnid: BigNumber, isRefund: Boolean}
     * * tx: Transaction number
     * * customer: The customer address
     * * rnid: The rateplan id
     * * isRefund: if true the `rnid` can refund else not
     */
    applyRefund(rnid, isRefund, options) {
        return new Promise((resolve, reject) => {
            this.contract.applyRefund(rnid, isRefund,{
                    from: options.from
                }, (err, tx) => {
                if(err) {
                    reject(err);
                }
                else {
                    let event = this.contract.ApplyRefund((err, res) => {
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
     * @param {Dict} options {from: msg.sender}
     * @param {Promise} {tx: String, vendor: String, rnid: BigNumber}
     * * tx: Transaction number
     * * vendor: Then vendor address
     * * rnid: Room night token id
     */
    refund(rnid, options) {
        let self = this;
        let _refund = function(rnid, value) {
            return new Promise((resolve, reject) => {
                self.contract.refund(rnid, {from: options.from, value: value}, (err, tx) => {
                    if(err) {
                        reject(err);
                    }
                    else {
                        let event = self.contract.Refund((err, res) => {
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
        return this.roomNight(rnid).then((res) => {
            let tokenId = res.tokenId;
            let price = res.price;
            if (tokenId == 0) {
                // ETH 
                return _refund(rnid, price);
            }else {
                // ERC2.0
                return this._getTokenContractInstance(token).then((contractInstance) => {
                    return new Promise((resolve, reject) => {
                        contractInstance.approve(this.contractAddress, price, {from: options.from}, (err, res) => {
                            if(err) {
                                reject(err);     
                            }else {
                                let event = contractInstance.Approval((err, res) => {
                                    event.stopWatching();
                                    if(err) {
                                        reject(err);
                                    }else {
                                        resolve(res);
                                    }
                                });
                            }
                        });
                    });
                }).then((res) => {
                    return _refund(rnid, 0);
                });
            }
        });
    }
}

export default RoomNightCustomer;