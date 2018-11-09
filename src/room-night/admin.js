import ABI from '../abis/roomnight-admin';

export default class RoomNightAdmin {
    constructor(web3) {
        this.web3 = web3;
        
        this.contract = this.web3.eth.contract(ABI).at('0x1E212155EF1197cC42B8A8D5dDffF6Dc4C584CE7');
    }

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

    getToken() {
        //this.web3


        console.log('getToken!');
    }
}