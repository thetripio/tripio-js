import Web3 from 'web3';
import RoomNightCustomer from '../../src/room-night/customer';
import to from 'await-to-js';

describe('create RoomNightCustomer', () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));

    let customer = new RoomNightCustomer(web3, '0x8A1f185EFC5c2a9a5F7A92894d74f4F6e17d42F1');

    let account = '0x262bab6a90aa1741390c4a3ec58855c81d9728e1';
    let account0 = '0x0000000000000000000000000000000000000000';

    test('RoomNightCustomer name', async () => {
        let name = await customer.name();
        expect(name).toBe('Tripio Room Night');
    }, 30000);

    test('RoomNightCustomer symbol', async() => {
        let symbol = await customer.symbol();
        expect(symbol).toBe('TRN');
    }, 30000);

    test('RoomNightCustomer tokenURI', async() => {
        let tokenURI = await customer.tokenURI(1);
        expect(tokenURI).toBe('http://ipfs.tripiochina.cn/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8');
    }, 30000);

    test('RoomNightCustomer balanceOf', async() => {
        let balance = await customer.balanceOf(account);
        expect(balance.toNumber()).toBe(1);
    }, 30000);

    test('RoomNightCustomer ownerOf', async() => {
        let owner = await customer.ownerOf(1);
        expect(owner).toBe(account);
    }, 30000);

    test('RoomNightCustomer getApproved', async() => {
        let approvedAddress = await customer.getApproved(1);
        expect(approvedAddress).toBe(account0);
    }, 30000);

    test('RoomNightCustomer isApprovedForAll', async() => {
        let isApproved = await customer.isApprovedForAll(account, account);
        expect(isApproved).toBe(false);
    }, 30000);

    test('RoomNightCustomer isRefundApplied', async() => {
        let isRefundApplied = await customer.isRefundApplied(1);
        expect(isRefundApplied).toBe(false);
    });

    test('RoomNightCustomer roomNight', async() => {
        let roomnight = await customer.roomNight(1);
        expect(roomnight.vendorId.toNumber()).toBe(1);
        expect(roomnight.rateplanId.toNumber()).toBe(1);
        expect(roomnight.tokenId.toNumber()).toBe(1);
        expect(roomnight.price.toNumber()).toBe(1000000);
        expect(roomnight.date.toNumber()).toBe(20181111);
        expect(roomnight.ipfs).toBe('Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8');
        expect(roomnight.rateplanName).toBe('Kirn-Test');
    })

    test('RoomNightCustomer roomNightsOfOwner', async() => {
        let result = await customer.roomNightsOfOwner(0, 10, false, {'from': account});
        expect(result.roomnightIds.length).toBe(1);
        expect(result.nextId.toNumber()).toBeGreaterThanOrEqual(0);
    }, 30000);
});