import Web3 from 'web3';
import RoomNightVendor from './room-night/vendor';
import RoomNightAdmin from './room-night/admin';
import RoomNightCustomer from './room-night/customer';

/** 
 * Tripio
 * @class
 * 
 */
class Tripio {
    /**
     * Create a Tripio.
     * @param {Web3} web3 - The Web3.
     */
    constructor(web3, options) {
        console.log('Hello Tripio!');

        let env = this.initEnv(options ? options.env : 'main');

        //let _web3 = new Web3(new Web3.providers.HttpProvider(env.host));
        // this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        if (web3) {
            this.web3 = web3;
        }
        else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(env.host));
        }

        this.roomNightVendor = new RoomNightVendor(this.web3, env.contract.rnVendor);
        this.roomNightAdmin = new RoomNightAdmin(this.web3, env.contract.rnAdmin);
        this.roomNightCustomer = new RoomNightCustomer(this.web3, env.contract.rnCustomer, env.contract.rnVendor, env.contract.rnAdmin);
    }

    initEnv(env) {
        let map = {
            main: {
                host: 'http://eth.tripiochina.cn',
                contract: {
                    rnAdmin: '0x45A4C11105F6d0Ba19A8e848450A9fA3642c4fBa',
                    rnVendor: '0xa11C24A774dEbcCf53Da7152964d7C7DAd960fa1',
                    rnCustomer: '0x605FdEBd3b51eb671723cce98EB5D7B227B04fd0'
                }
            },
            ropsten: {
                host: 'https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57',
                contract: {
                    rnAdmin: '0x0D53Ca8D45072c29fA45A3854685ff80ce95E8b2',
                    rnVendor: '0x8ce76Ec4F7D39B274a87123730870309B6F708e5',
                    rnCustomer: '0x8A1f185EFC5c2a9a5F7A92894d74f4F6e17d42F1'
                }
            }
        };

        return map[env] || map.main;
    }
    
}

export default Tripio;
