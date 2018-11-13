import Web3 from 'web3';
import RoomNightVendor from '../../src/room-night/vendor';

describe('create RoomNightVendor', () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9WfBzi6QFGrAWBYZKq57'));

    let vendor = new RoomNightVendor(web3, '0x6A9C0fDAa9361b44eeE09ad0d0304ec941173361');

    test('RoomNightVendor inventoriesOfDate', async () => {

        let inventories = await vendor.inventoriesOfDate(2, 1, [20181111, 20181112]);
        console.log('inventories');
        console.log(inventories);
    }, 30000);

    test('RoomNightVendor pricesOfDate', async() => {

        let prices = await vendor.pricesOfDate(2, 1, [20181111, 20181112], 0);
        console.log('prices');
        console.log(prices);
    }, 30000);

    test('RoomNightVendor priceOfDate', async () => {

        let price = await vendor.priceOfDate(1, 3, 20180610, 0);
        console.log(price);
    }, 30000);

    test('RoomNightVendor ratePlansOfVendor', async () => {

        let ratePlans = await vendor.ratePlansOfVendor(1, 0, 10);
        console.log(ratePlans);
    }, 30000);

    test('RoomNightVendor ratePlanOfVendor', async () => {

        let ratePlan = await vendor.ratePlanOfVendor(1, 3);
        console.log(ratePlan);
    }, 30000);

    test('RoomNightVendor pricesAndInventoriesOfDate', async () => {

        let prices = await vendor.pricesAndInventoriesOfDate(1, 3, [20180610, 20180611], 0);
        console.log(prices);
    }, 30000);

});