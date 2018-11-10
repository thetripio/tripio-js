import ABI from '../abis/roomnight-customer';
import bs58 from 'bs58';

/**
 * RoomNightCustomer
 * @class
 */
class RoomNightCustomer {
    constructor(web3, contractAddress, options) {
        this.web3 = web3;
        
        this.contract = this.web3.eth.contract(ABI).at(contractAddress);
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

    
    buyInBatch() {
        console.log('buyInBatch!');
    }
}

export default RoomNightCustomer;