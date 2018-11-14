# Tripio.js

# Tripio.js

## Install

```
yarn add tripio
Or
npm install tripio
```

## Usage

Our SDK relies on MetaMask wallet environment, please select Chrome browser and install [MetaMask](https://metamask.io/) plugin!

```
import Tripio from 'tripio';

let tripio = new Tripio(web3, { env: 'ropsten' });

// async/await
let vendors = await tripio.roomNightAdmin.getVendorIds(0, 100);

// Promise
tripio.roomNightAdmin.getVendorIds(0, 100).then(res => {
    let vendors = res;
}, err => {

});
```

## API

* [TripioRoomNightAdmin](./mds/admin.md)
* [TripioRoomNightVendor](./mds/vendor.md)
* [TripioRoomNightCustomer](./mds/customer.md)