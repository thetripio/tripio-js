import Web3 from 'web3';
import RoomNightVendor from '../../src/room-night/vendor';
import to from 'await-to-js';

describe('create RoomNightVendor', () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));

    let vendor = new RoomNightVendor(web3, '0x6A9C0fDAa9361b44eeE09ad0d0304ec941173361');

    test('RoomNightVendor inventoriesOfDate', async () => {

        let [inventories, err] = await to(vendor.inventoriesOfDate(1, 3, [20180610, 20180611]));

        if (err) {
            console.log(err);
        }
        else {
            console.log(inventories);
        }
    }, 30000);

});