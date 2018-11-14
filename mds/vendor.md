<a name="RoomNightVendor"></a>

## RoomNightVendor
RoomNightVendor

**Kind**: global class  

* [RoomNightVendor](#RoomNightVendor)
    * [.inventoriesOfDate(vendorId, rpid, dates, options)](#RoomNightVendor+inventoriesOfDate) ⇒ <code>Promise</code>
    * [.pricesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor+pricesOfDate) ⇒ <code>Promise</code>
    * [.priceOfDate(vendorId, rpid, date, token, options)](#RoomNightVendor+priceOfDate) ⇒ <code>Promise</code>
    * [.ratePlansOfVendor(vendorId, offset, limit, options)](#RoomNightVendor+ratePlansOfVendor) ⇒ <code>Promise</code>
    * [.ratePlanOfVendor(vendorId, rpid, options)](#RoomNightVendor+ratePlanOfVendor) ⇒ <code>Promise</code>
    * [.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor+pricesAndInventoriesOfDate) ⇒ <code>Promise</code>
    * [.updatePrices(rpid, dates, inventory, tokens, prices, options)](#RoomNightVendor+updatePrices) ⇒ <code>Promise</code>
    * [.updateInventories(rpid, dates, inventory, options)](#RoomNightVendor+updateInventories) ⇒ <code>Promise</code>
    * [.updateBasePrice(rpid, tokens, prices, inventory, options)](#RoomNightVendor+updateBasePrice) ⇒ <code>Promise</code>
    * [.createRatePlan(name, ipfs, options)](#RoomNightVendor+createRatePlan) ⇒ <code>Promise</code>
    * [.removeRatePlan(rpid, options)](#RoomNightVendor+removeRatePlan) ⇒ <code>Promise</code>
    * [.modifyRatePlan(rpid, name, ipfs, options)](#RoomNightVendor+modifyRatePlan) ⇒ <code>Promise</code>

<a name="RoomNightVendor+inventoriesOfDate"></a>

### roomNightVendor.inventoriesOfDate(vendorId, rpid, dates, options) ⇒ <code>Promise</code>
Get inventories of dates

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan id |
| dates | <code>Number</code> | Dates E.g: [20180610,20180611] |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+pricesOfDate"></a>

### roomNightVendor.pricesOfDate(vendorId, rpid, dates, token, options) ⇒ <code>Promise</code>
Get prices of dates

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan id |
| dates | <code>Number</code> | Dates E.g: [20180610,20180611] |
| token | <code>Number</code> | Token id |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+priceOfDate"></a>

### roomNightVendor.priceOfDate(vendorId, rpid, date, token, options) ⇒ <code>Promise</code>
Get price and inventory of date

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {inventory: Number, price: Number}
* inventory: Inventory
* price: Price  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan id |
| date | <code>Number</code> | Date E.g: 20180630 |
| token | <code>Number</code> | Token id |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+ratePlansOfVendor"></a>

### roomNightVendor.ratePlansOfVendor(vendorId, offset, limit, options) ⇒ <code>Promise</code>
Get rateplans of vendor by vendor id

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {rateplanIds: Number, nextRateplanId: Number}
* rateplanIds: Rateplan ids
* nextRateplanId: The next id of rateplan, if id = 0 the next rateplan is null  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| offset | <code>Number</code> | The begin id, if id = 0 search from the begin |
| limit | <code>Number</code> | The limit of one page |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+ratePlanOfVendor"></a>

### roomNightVendor.ratePlanOfVendor(vendorId, rpid, options) ⇒ <code>Promise</code>
Get rateplan information by vendor id and rateplan id

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {name: String, createTime: Number, ipfsAddress: String}
* name: Rateplan name
* createTime: Create time: UTC timestamp(s)
* ipfsAddress: IPFS file address  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan id |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+pricesAndInventoriesOfDate"></a>

### roomNightVendor.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options) ⇒ <code>Promise</code>
Get prices and inventories by vendor id, rateplan id, dates, token id

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {prices: Array, inventorys: Array}
* prices: Prices
* inventorys: Inventories  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan Id |
| dates | <code>Array</code> | Date E.g: [20180610,20180611] |
| token | <code>Number</code> | Token id |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+updatePrices"></a>

### roomNightVendor.updatePrices(rpid, dates, inventory, tokens, prices, options) ⇒ <code>Promise</code>
Update prices and inventory of rateplan

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | <code>Number</code> | Rateplan Id |
| dates | <code>Array</code> | Date E.g: [20180610,20180611] |
| inventory | <code>Number</code> | Inventory |
| tokens | <code>Array</code> | Token ids |
| prices | <code>Array</code> | Prices of tokens |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+updateInventories"></a>

### roomNightVendor.updateInventories(rpid, dates, inventory, options) ⇒ <code>Promise</code>
Update inventories of rateplan

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | <code>Number</code> | Rateplan Id |
| dates | <code>Array</code> | Date E.g: [20180610,20180611] |
| inventory | <code>Number</code> | Inventory |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+updateBasePrice"></a>

### roomNightVendor.updateBasePrice(rpid, tokens, prices, inventory, options) ⇒ <code>Promise</code>
Update the base price of all rateplans

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | <code>Number</code> | Rateplan Id |
| tokens | <code>Array</code> | Token ids |
| prices | <code>Array</code> | Prices of tokens |
| inventory | <code>Number</code> | Inventory |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+createRatePlan"></a>

### roomNightVendor.createRatePlan(name, ipfs, options) ⇒ <code>Promise</code>
Create new rateplan

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, vendorId: String, name: String, ipfs: String}
* tx: Transaction address
* vendorId: Vendor Id
* name: Rateplan name
* ipfs: The IPFS's address of rateplan's desc  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Rateplan name |
| ipfs | <code>String</code> | The IPFS's address of rateplan's desc |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+removeRatePlan"></a>

### roomNightVendor.removeRatePlan(rpid, options) ⇒ <code>Promise</code>
Remove rateplan

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, vendorId: String, rpid: Number}
* tx: Transaction address
* vendorId: Vendor Id
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | <code>Number</code> | Rateplan Id |
| options | <code>Object</code> |  |

<a name="RoomNightVendor+modifyRatePlan"></a>

### roomNightVendor.modifyRatePlan(rpid, name, ipfs, options) ⇒ <code>Promise</code>
Modify rateplan

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  
**Returns**: <code>Promise</code> - {tx: String, vendorId: String, rpid: Number, name: String, ipfs: String}
* tx: Transaction address
* vendorId: Vendor Id
* rpid: Rateplan Id
* name: Rateplan name
* ipfs: The IPFS's address of rateplan's desc  

| Param | Type |
| --- | --- |
| rpid | <code>Number</code> | 
| name | <code>String</code> | 
| ipfs | <code>String</code> | 
| options | <code>Object</code> | 

