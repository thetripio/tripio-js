import Tripio from '../src/index';
import to from 'await-to-js';

describe('create tripio', () => {

    let tripio = new Tripio();

    test('room night admin', async () => {

        let [vendors, err] = await to(tripio.roomNightAdmin.getVendorIds(0, 100));

        if(err) {
            console.log(err);
        }
        else {
            console.log(vendors);
        }

        expect(3).toBe(vendors.length);
    });

});