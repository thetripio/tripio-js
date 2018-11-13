import bs58 from 'bs58';

export default {
    /**
     * Convert IPFS address from base58 to hex format(begin with 0x)
     * @param {String} ipfs IPFS address with base58 encoded
     * @returns {String} IPFS with hex format(begin with 0x)
     */
    ipfsBase58ToHex: function(ipfs) {
        let ipfsBuffer = bs58.decode(ipfs)
        var ipfsHexString = ipfsBuffer.toString('hex');
        if (ipfsHexString.length != 68) {
            return null;
        }
        ipfsHexString = '0x' + ipfsHexString.slice(4);
        return ipfsHexString
    }
}