<a name="RoomNightCustomer"></a>

## RoomNightCustomer
RoomNightCustomer

**Kind**: global class  

* [RoomNightCustomer](#RoomNightCustomer)
    * [.ipfsBase58ToHex(ipfs)](#RoomNightCustomer+ipfsBase58ToHex) ⇒ <code>String</code>
    * [.ipfsHexToBase58(ipfs)](#RoomNightCustomer+ipfsHexToBase58) ⇒ <code>String</code>
    * [.name()](#RoomNightCustomer+name) ⇒ <code>Promise</code>
    * [.symbol()](#RoomNightCustomer+symbol) ⇒ <code>Promise</code>
    * [.tokenURI(tokenId)](#RoomNightCustomer+tokenURI) ⇒ <code>Promise</code>
    * [.balanceOf(owner)](#RoomNightCustomer+balanceOf) ⇒ <code>Promise</code>
    * [.ownerOf(tokenId)](#RoomNightCustomer+ownerOf) ⇒ <code>Promise</code>
    * [.getApproved(tokenId)](#RoomNightCustomer+getApproved) ⇒ <code>Promise</code>
    * [.isApprovedForAll(owner, operator)](#RoomNightCustomer+isApprovedForAll) ⇒ <code>Promise</code>
    * [.isRefundApplied(rnid)](#RoomNightCustomer+isRefundApplied) ⇒ <code>Promise</code>
    * [.roomNight(rnid)](#RoomNightCustomer+roomNight) ⇒ <code>Promise</code>
    * [.roomNightsOfOwner(from, limit, isVendor, options)](#RoomNightCustomer+roomNightsOfOwner) ⇒ <code>Promise</code>

<a name="RoomNightCustomer+ipfsBase58ToHex"></a>

### roomNightCustomer.ipfsBase58ToHex(ipfs) ⇒ <code>String</code>
Convert IPFS address from base58 to hex format(begin with 0x)

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>String</code> - IPFS with hex format(begin with 0x)  

| Param | Type | Description |
| --- | --- | --- |
| ipfs | <code>String</code> | IPFS address with base58 encoded |

<a name="RoomNightCustomer+ipfsHexToBase58"></a>

### roomNightCustomer.ipfsHexToBase58(ipfs) ⇒ <code>String</code>
Conver IPFS address from hex format to base58 format

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>String</code> - IPFS with base58 format  

| Param | Type | Description |
| --- | --- | --- |
| ipfs | <code>String</code> | IPFS address with hex format |

<a name="RoomNightCustomer+name"></a>

### roomNightCustomer.name() ⇒ <code>Promise</code>
The name of current room night token

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {String} The name of current room night token  
<a name="RoomNightCustomer+symbol"></a>

### roomNightCustomer.symbol() ⇒ <code>Promise</code>
The symbol of current room night token

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {String} The symbol of current room night token  
<a name="RoomNightCustomer+tokenURI"></a>

### roomNightCustomer.tokenURI(tokenId) ⇒ <code>Promise</code>
The URI of token's information

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {String} The URI of token. E.g: http://ipfs.tripiochina.cn/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>Number</code> | Token id |

<a name="RoomNightCustomer+balanceOf"></a>

### roomNightCustomer.balanceOf(owner) ⇒ <code>Promise</code>
The balance of any address

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {BigNumber} The token balance  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>String</code> | The owner address of some token |

<a name="RoomNightCustomer+ownerOf"></a>

### roomNightCustomer.ownerOf(tokenId) ⇒ <code>Promise</code>
Get the owner of any token

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {String} The token's owner address  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>Number</code> | The room night token id |

<a name="RoomNightCustomer+getApproved"></a>

### roomNightCustomer.getApproved(tokenId) ⇒ <code>Promise</code>
Get the approved address for a single room night token

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {String} The approved address for this token, or the zero address if there is none  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>Number</code> | The room night token id |

<a name="RoomNightCustomer+isApprovedForAll"></a>

### roomNightCustomer.isApprovedForAll(owner, operator) ⇒ <code>Promise</code>
Query if an address is an authorized operator for another address

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {Boolean} True if operator is an approved `operator` for `owner`, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>String</code> | The address that owns the token |
| operator | <code>String</code> | The address that acts on behalf of the owner |

<a name="RoomNightCustomer+isRefundApplied"></a>

### roomNightCustomer.isRefundApplied(rnid) ⇒ <code>Promise</code>
Whether the token is in refund applications

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {Boolean} True if token in refund applications, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| rnid | <code>Number</code> | The room night token id |

<a name="RoomNightCustomer+roomNight"></a>

### roomNightCustomer.roomNight(rnid) ⇒ <code>Promise</code>
Get the room night infomation in detail

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {vendorId: BigNumber, rateplanId: BigNumber, tokenId: BigNumber, price: BigNumber, timestamp: BigNumber, date: BigNumber, ipfs: Hex String, rateplanName: String}
* vendorId: Vendor id
* rateplanId: Rateplan id
* tokenId: ERC2.0 Token id
* price: ERC2.0 price of RP
* timestamp: Create time: UTC timestamp(s)
* date: Order date E.g: 20180621
* ipfs: The IPFS's address of rateplan's desc(Hex String)
* rateplanName: Rateplan name  

| Param | Type | Description |
| --- | --- | --- |
| rnid | <code>Number</code> | The room night token id |

<a name="RoomNightCustomer+roomNightsOfOwner"></a>

### roomNightCustomer.roomNightsOfOwner(from, limit, isVendor, options) ⇒ <code>Promise</code>
Get all the room nights of the msg.sender(Customer or Vendor)

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {roomnightIds: BigNumber|Array, nextId: BigNumber}
* roomnightIds: Room night token ids
* nextId: The next id of token, if id = 0 the next token is null  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Number</code> | The begin id, if id = 0 search from the begin |
| limit | <code>Number</code> | The limit of one page |
| isVendor | <code>Boolean</code> | Is vendor or not |
| options | <code>Dict</code> | {from: msg.sender} |

