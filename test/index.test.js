import Tripio from '../src/index';

describe('create tripio', () => {

     //tripio.roomNightVendor
    let tripio = new Tripio({
        web3: ''
    });

    test('room night', () => {

        tripio.roomNightVendor.priceOfDate();
        tripio.roomNightAdmin.getToken();
    });

});