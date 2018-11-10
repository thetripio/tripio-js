<a name="RoomNightVendor"></a>

## RoomNightVendor
RoomNightVendor

**Kind**: global class  

* [RoomNightVendor](#RoomNightVendor)
    * [.inventoriesOfDate(vendorId, rpid, options)](#RoomNightVendor+inventoriesOfDate) ⇒ <code>Promise</code>
    * [.pricesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor+pricesOfDate) ⇒ <code>Promise</code>
    * [.priceOfDate(vendorId, rpid, date, token, options)](#RoomNightVendor+priceOfDate) ⇒ <code>Promise</code>
    * [.ratePlansOfVendor(vendorId, offset, limit, options)](#RoomNightVendor+ratePlansOfVendor) ⇒ <code>Promise</code>
    * [.ratePlanOfVendor(vendorId, rpid, options)](#RoomNightVendor+ratePlanOfVendor) ⇒ <code>Promise</code>
    * [.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor+pricesAndInventoriesOfDate) ⇒ <code>Promise</code>

<a name="RoomNightVendor+inventoriesOfDate"></a>

### roomNightVendor.inventoriesOfDate(vendorId, rpid, options) ⇒ <code>Promise</code>
Get inventories of dates

**Kind**: instance method of [<code>RoomNightVendor</code>](#RoomNightVendor)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| rpid | <code>Number</code> | Rateplan id |
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

