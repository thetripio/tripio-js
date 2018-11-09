import Web3 from 'web3';
import RoomNightAdmin from '../../src/room-night/admin';
import to from 'await-to-js';

describe('create RoomNightAdmin', () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));

    let roomNightAdmin = new RoomNightAdmin(web3);

    test('RoomNightAdmin getVendorIds', async () => {

        let [vendors, err] = await to(roomNightAdmin.getVendorIds(0, 100));

        if (err) {
            console.log(err);
        }
        else {
            console.log(vendors);
        }
    }, 30000);

    test('RoomNightAdmin getVendor', async () => {

        let [vendor, err] = await to(roomNightAdmin.getVendor(1));

        if (err) {
            console.log(err);
        }
        else {
            console.log(vendor);
        }
    }, 30000);

    test('RoomNightAdmin getVendorByAddress', async () => {

        let [vendor, err] = await to(roomNightAdmin.getVendorByAddress('0x0b3cbb67ebafbf6c9d8d17f5db1bada4b2cffc5a'));

        if (err) {
            console.log(err);
        }
        else {
            console.log(vendor);
        }
    }, 30000);

    test('RoomNightAdmin supportedTokens', async () => {

        let [tokens, err] = await to(roomNightAdmin.supportedTokens(0, 10));

        if (err) {
            console.log(err);
        }
        else {
            console.log(tokens);
        }
    }, 30000);

    test('RoomNightAdmin getToken', async () => {

        let [token, err] = await to(roomNightAdmin.getToken(1));

        if (err) {
            console.log(err);
        }
        else {
            console.log(token);
        }
    }, 30000);

});