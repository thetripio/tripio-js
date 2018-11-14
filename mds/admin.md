<a name="RoomNightAdmin"></a>

## RoomNightAdmin
RoomNightAdmin

**Kind**: global class  

* [RoomNightAdmin](#RoomNightAdmin)
    * [.getVendorIds(offset, limit, options)](#RoomNightAdmin+getVendorIds) ⇒ <code>Promise</code>
    * [.getVendor(vendorId, options)](#RoomNightAdmin+getVendor) ⇒ <code>Promise</code>
    * [.getVendorByAddress(address, options)](#RoomNightAdmin+getVendorByAddress) ⇒ <code>Promise</code>
    * [.supportedTokens(offset, limit, options)](#RoomNightAdmin+supportedTokens) ⇒ <code>Promise</code>
    * [.getToken(tokenId, options)](#RoomNightAdmin+getToken) ⇒ <code>Promise</code>
    * [.updateBaseTokenURI(uri, options)](#RoomNightAdmin+updateBaseTokenURI) ⇒ <code>Promise</code>
    * [.addVendor(address, name, options)](#RoomNightAdmin+addVendor) ⇒ <code>Promise</code>
    * [.removeVendorByAddress(address, options)](#RoomNightAdmin+removeVendorByAddress) ⇒ <code>Promise</code>
    * [.removeVendorById(vendorId, options)](#RoomNightAdmin+removeVendorById) ⇒ <code>Promise</code>
    * [.makeVendorValid(vendorId, valid, options)](#RoomNightAdmin+makeVendorValid) ⇒ <code>Promise</code>
    * [.addToken(contractAddress, options)](#RoomNightAdmin+addToken) ⇒ <code>Promise</code>
    * [.removeToken(tokenId, options)](#RoomNightAdmin+removeToken) ⇒ <code>Promise</code>

<a name="RoomNightAdmin+getVendorIds"></a>

### roomNightAdmin.getVendorIds(offset, limit, options) ⇒ <code>Promise</code>
Get Vendor ids by page

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {vendorIds: Number, nextVendorId: Number }
* vendorIds: Vendor ids, 
* nextVendorId: The next id of vendor, if id = 0 the next vendor is null  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>Number</code> | The begin id, if id = 0 search from the begin |
| limit | <code>Number</code> | The limit of one page |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+getVendor"></a>

### roomNightAdmin.getVendor(vendorId, options) ⇒ <code>Promise</code>
Get the vendor info by id

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {name: String, address: String, createTime: Number, isValid: Boolean}
* name: Vendor name
* address: Vendor address
* createTime: Create time: UTC timestamp(s)
* isValid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+getVendorByAddress"></a>

### roomNightAdmin.getVendorByAddress(address, options) ⇒ <code>Promise</code>
Get vendor info by vendor address

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {name: String, address: String, createTime: Number, isValid: Boolean}
* name: Vendor name
* address: Vendor address
* createTime: Create time: UTC timestamp(s)
* isValid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | Vendor address |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+supportedTokens"></a>

### roomNightAdmin.supportedTokens(offset, limit, options) ⇒ <code>Promise</code>
Get all supported tokens ids

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tokenIds: Number, nextVendorId: Number}
* tokenIds: Token ids
* nextVendorId: The next id of vendor, if id = 0 the next vendor is null  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>Number</code> | The begin id, if id = 0 search from the begin |
| limit | <code>Number</code> | The limit of one page |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+getToken"></a>

### roomNightAdmin.getToken(tokenId, options) ⇒ <code>Promise</code>
Get token information by token id

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {symbole: String, name: String, decimal: Number, address: String}
* symbole: Token symbole
* name: Token name
* decimal: Token decimal
* address: Token address  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>Number</code> | Token id |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+updateBaseTokenURI"></a>

### roomNightAdmin.updateBaseTokenURI(uri, options) ⇒ <code>Promise</code>
Update the base URI of token

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, uri: String}
* tx: Transaction address
* uri: The base URI of token  

| Param | Type | Description |
| --- | --- | --- |
| uri | <code>String</code> | The base URI of token |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+addVendor"></a>

### roomNightAdmin.addVendor(address, name, options) ⇒ <code>Promise</code>
Add vendor

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, address: String, name: String}
* tx: Transaction address
* address: Vendor address
* name: Vendor name  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | Vendor address |
| name | <code>String</code> | Vendor name |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+removeVendorByAddress"></a>

### roomNightAdmin.removeVendorByAddress(address, options) ⇒ <code>Promise</code>
Remove vendor by vendor address

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, address: String}
* tx: Transaction address
* address: Vendor address  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | Vendor address |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+removeVendorById"></a>

### roomNightAdmin.removeVendorById(vendorId, options) ⇒ <code>Promise</code>
Remove vendor by vendor id

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, address: String}
* tx: Transaction address
* address: Vendor address  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+makeVendorValid"></a>

### roomNightAdmin.makeVendorValid(vendorId, valid, options) ⇒ <code>Promise</code>
Make vendor valid or invalid

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, address: String, valid: Boolean}
* tx: Transaction address
* address: Vendor address
* valid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | Vendor id |
| valid | <code>Boolean</code> | Vendor is valid or not |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+addToken"></a>

### roomNightAdmin.addToken(contractAddress, options) ⇒ <code>Promise</code>
Add token

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, address: String}
* tx: Transaction address
* address: Token contract address  

| Param | Type | Description |
| --- | --- | --- |
| contractAddress | <code>String</code> | Token contract address |
| options | <code>Object</code> |  |

<a name="RoomNightAdmin+removeToken"></a>

### roomNightAdmin.removeToken(tokenId, options) ⇒ <code>Promise</code>
Remove token

**Kind**: instance method of [<code>RoomNightAdmin</code>](#RoomNightAdmin)  
**Returns**: <code>Promise</code> - {tx: String, id: Number}
* tx: Transaction address
* id: Token id  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>Number</code> | Token id |
| options | <code>Object</code> |  |

