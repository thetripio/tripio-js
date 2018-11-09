import Tripio from '../src/index';
import to from 'await-to-js';

describe('create tripio', () => {

    let tripio = new Tripio(null, {
        env: 'ropsten'
    });

    test('room night admin getVendorIds', async () => {

        console.log(typeof tripio.roomNightAdmin);
    }, 30000);

});