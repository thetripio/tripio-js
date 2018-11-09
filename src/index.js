import Web3 from 'web3';
import RoomNightVendor from './room-night/vendor';
import RoomNightAdmin from './room-night/admin';
import RoomNightCustomer from './room-night/customer';

/** 
 * Tripio
 * @class
 */
class Tripio {
    /**
     * Create a Tripio.
     * @param {Web3} web3 - The Web3.
     */
    constructor() {
        console.log('Hello Tripio!');

        let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // if (typeof window.web3 !== 'undefined') {
        //     this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // }
        // else {
        //     this.web3 = window.web3;
        // }

        this.roomNightVendor = new RoomNightVendor(web3);
        this.roomNightAdmin = new RoomNightAdmin(web3);
        this.roomNightCustomer = new RoomNightCustomer(web3);
    }
}

export default Tripio;