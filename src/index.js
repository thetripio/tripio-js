import RoomNightVendor from './room-night/vendor';
import RoomNightAdmin from './room-night/admin';
import RoomNightCustomer from './room-night/customer';

export default class Tripio {
    constructor() {
        console.log('Hello Tripio!');

        let web3 = 'xx';
        this.roomNightVendor = new RoomNightVendor(web3);
        this.roomNightAdmin = new RoomNightAdmin(web3);
        this.roomNightCustomer = new RoomNightCustomer(web3);
    }
}