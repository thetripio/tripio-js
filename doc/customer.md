<a name="RoomNightCustomer"></a>

## RoomNightCustomer
RoomNightCustomer

**Kind**: global class  

* [RoomNightCustomer](#RoomNightCustomer)
    * [.ipfsBase58ToHex(ipfs)](#RoomNightCustomer+ipfsBase58ToHex) ⇒ <code>String</code>
    * [.ipfsHexToBase58(ipfs)](#RoomNightCustomer+ipfsHexToBase58) ⇒ <code>String</code>
    * [._getTokenContractInstance(token)](#RoomNightCustomer+_getTokenContractInstance) ⇒ <code>Promise</code>
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
    * [.safeTransferFrom(from, to, tokenId, data, {tx:)](#RoomNightCustomer+safeTransferFrom)
    * [.transferFrom(from, to, tokenId, {tx:)](#RoomNightCustomer+transferFrom)
    * [.transferFromInBatch(from, to, tokenIds, {tx:)](#RoomNightCustomer+transferFromInBatch)
    * [.approve(approved, tokenId, {tx:)](#RoomNightCustomer+approve)
    * [.setApprovalForAll(operator, approved, {tx:)](#RoomNightCustomer+setApprovalForAll)
    * [.buyInBatch(vendorId, rpid, dates, token, options, {tx:)](#RoomNightCustomer+buyInBatch)
    * [.applyRefund(rnid, isRefund, options, {tx:)](#RoomNightCustomer+applyRefund)
    * [.refund(rnid, options, {tx:)](#RoomNightCustomer+refund)

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

<a name="RoomNightCustomer+_getTokenContractInstance"></a>

### roomNightCustomer.\_getTokenContractInstance(token) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  
**Returns**: <code>Promise</code> - {Contract instance}  

| Param | Type |
| --- | --- |
| token | <code>token</code> | 

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

<a name="RoomNightCustomer+safeTransferFrom"></a>

### roomNightCustomer.safeTransferFrom(from, to, tokenId, data, {tx:)
Transfers the ownership of an room night token from one address to another address.
When transfer is complete, this function checks if _to is a smart contract (code size > 0). 
If so, it calls onERC721Received on _to and throws if the return value is not bytes4(keccak256("onERC721Received(address,uint256,bytes)")).

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>String</code> | The current owner of the room night token |
| to | <code>String</code> | The new owner |
| tokenId | <code>Number</code> | The token to transfer |
| data | <code>String</code> | Additional data with no specified format, sent in call to `to` |
| {tx: | <code>Promise</code> | String, from: BigNumber, to: BigNumber, tokenId: BigNumber} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenId: The token to transfer |

<a name="RoomNightCustomer+transferFrom"></a>

### roomNightCustomer.transferFrom(from, to, tokenId, {tx:)
Transfers the ownership of an room night token from one address to another address

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>String</code> | The current owner of the room night token |
| to | <code>String</code> | The new owner |
| tokenId | <code>Number</code> | The token to transfer |
| {tx: | <code>Promise</code> | String, from: BigNumber, to: BigNumber, tokenId: BigNumber} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenId: The token to transfer |

<a name="RoomNightCustomer+transferFromInBatch"></a>

### roomNightCustomer.transferFromInBatch(from, to, tokenIds, {tx:)
Transfers the ownership of tokens from one address to another address

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>String</code> | The current owner of the room night token |
| to | <code>String</code> | The new owner |
| tokenIds | <code>Number</code> \| <code>Array</code> | The tokens to transfer |
| {tx: | <code>Promise</code> | String, from: BigNumber, to: BigNumber, tokenIds: Number|Array} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenIds: The token to transfer |

<a name="RoomNightCustomer+approve"></a>

### roomNightCustomer.approve(approved, tokenId, {tx:)
Set or reaffirm the approved address for an room night token

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| approved | <code>String</code> | The new approved token controller |
| tokenId | <code>Number</code> | The token to approve |
| {tx: | <code>Promise</code> | String, owner: String, approved: String, tokenId: BigNumber} * tx: Transaction number * owner: The current owner of the room night token * approved: The new approved token controller * tokenId: The token to approve |

<a name="RoomNightCustomer+setApprovalForAll"></a>

### roomNightCustomer.setApprovalForAll(operator, approved, {tx:)
Enable or disable approval for a third party ("operator") to manage all of msg.sender's assets

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| operator | <code>String</code> | The new approved token controller |
| approved | <code>Boolean</code> | The token to approve |
| {tx: | <code>Promise</code> | String, owner: String, operator: String, approved: Boolean} * tx: Transaction number * owner: The current owner of the room night token * operator: The new approved token controller * approved: The token to approve |

<a name="RoomNightCustomer+buyInBatch"></a>

### roomNightCustomer.buyInBatch(vendorId, rpid, dates, token, options, {tx:)
By room nigth in batch through ETH(`token` == 0) or other digital token(`token` != 0)

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>Number</code> | The vendor Id |
| rpid | <code>Number</code> | The vendor's rate plan id |
| dates | <code>Number</code> \| <code>Array</code> | The booking dates |
| token | <code>Number</code> | The digital currency token |
| options | <code>Dict</code> | {from: msg.sender} |
| {tx: | <code>Promise</code> | String, customer: String, vendor: String, rpid: BigNumber, dates: Number|Array, token: BigNumber} * tx: Transaction number * customer: The customer address * vendor: Then vendor address * rpid: The rateplan id * dates: The booking dates * token: The digital currency token |

<a name="RoomNightCustomer+applyRefund"></a>

### roomNightCustomer.applyRefund(rnid, isRefund, options, {tx:)
Apply room night refund

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| rnid | <code>Number</code> | Room night token id |
| isRefund | <code>Boolean</code> | if true the `rnid` can refund else not |
| options | <code>Dict</code> | {from: msg.sender} |
| {tx: | <code>Promise</code> | String, customer: String, rnid: BigNumber, isRefund: Boolean} * tx: Transaction number * customer: The customer address * rnid: The rateplan id * isRefund: if true the `rnid` can refund else not |

<a name="RoomNightCustomer+refund"></a>

### roomNightCustomer.refund(rnid, options, {tx:)
Refund through ETH or other digital token, give the room night ETH/TOKEN to customer and take back inventory

**Kind**: instance method of [<code>RoomNightCustomer</code>](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| rnid | <code>Number</code> | Room night token id |
| options | <code>Dict</code> | {from: msg.sender} |
| {tx: | <code>Promise</code> | String, vendor: String, rnid: BigNumber} * tx: Transaction number * vendor: Then vendor address * rnid: Room night token id |

