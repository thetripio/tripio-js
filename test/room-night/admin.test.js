import Web3 from 'web3';
import RoomNightAdmin from '../../src/room-night/admin';

describe('create RoomNightAdmin', () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));

    let roomNightAdmin = new RoomNightAdmin(web3, '0x0D53Ca8D45072c29fA45A3854685ff80ce95E8b2');

    test('RoomNightAdmin getVendorIds', async () => {

        let vendors = await roomNightAdmin.getVendorIds(0, 100);
        expect(vendors.vendorIds.length).toBeGreaterThan(0);
    }, 30000);

    test('RoomNightAdmin getVendor', async () => {

        let vendor = await roomNightAdmin.getVendor(1);
        expect(vendor.address).toBe('0x262bab6a90aa1741390c4a3ec58855c81d9728e1');
    }, 30000);

    test('RoomNightAdmin getVendorByAddress', async () => {

        let vendor = await roomNightAdmin.getVendorByAddress('0x0b3cbb67ebafbf6c9d8d17f5db1bada4b2cffc5a');
        expect(vendor.address).toBe('0x0b3cbb67ebafbf6c9d8d17f5db1bada4b2cffc5a');
    }, 30000);

    test('RoomNightAdmin supportedTokens', async () => {

        let tokens = await roomNightAdmin.supportedTokens(0, 10);
        expect(tokens.tokenIds.length).toBeGreaterThan(0);
    }, 30000);

    test('RoomNightAdmin getToken', async () => {

        let token = await roomNightAdmin.getToken(1);
        expect(token.symbole).toBe('TRIO');
    }, 30000);

});