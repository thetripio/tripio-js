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
    constructor(web3, options) {
        console.log('Hello Tripio!');

        let env = this.initEnv(options ? options.env : 'main');

        let _web3 = new Web3(new Web3.providers.HttpProvider(env.host));
        // this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // if (typeof window.web3 !== 'undefined') {
        //     this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));
        // }
        // else {
        //     this.web3 = window.web3;
        // }

        this.roomNightVendor = new RoomNightVendor(_web3, env.contract.rnVendor);
        this.roomNightAdmin = new RoomNightAdmin(_web3, env.contract.rnAdmin);
        this.roomNightCustomer = new RoomNightCustomer(_web3, env.contract.rnCustomer);
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
                    rnAdmin: '0x1E212155EF1197cC42B8A8D5dDffF6Dc4C584CE7',
                    rnVendor: '0x6A9C0fDAa9361b44eeE09ad0d0304ec941173361',
                    rnCustomer: '0xcBf788b40d94CBa28052e870298334dCA837143a'
                }
            }
        };

        return map[code] || map.main;
    }
    
}

export default Tripio;