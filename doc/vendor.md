<a name="RoomNightVendor"></a>

## RoomNightVendor
RoomNightVendor

**Kind**: global class  

* [RoomNightVendor](#RoomNightVendor)
    * [.inventoriesOfDate(vendorId, rpid, options)](#RoomNightVendor+inventoriesOfDate) ⇒ <code>Promise</code>
    * [.pricesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor+pricesOfDate) ⇒ <code>Promise</code>

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

