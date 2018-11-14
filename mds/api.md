## Classes

<dl>
<dt><a href="#RoomNightAdmin">RoomNightAdmin</a></dt>
<dd><p>RoomNightAdmin</p>
</dd>
<dt><a href="#RoomNightCustomer">RoomNightCustomer</a></dt>
<dd><p>RoomNightCustomer</p>
</dd>
<dt><a href="#RoomNightVendor">RoomNightVendor</a></dt>
<dd><p>RoomNightVendor</p>
</dd>
</dl>


<br /><br /><br />

<a id="RoomNightAdmin"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    RoomNightAdmin</h5>RoomNightAdmin

**Kind**: global class  

* [RoomNightAdmin](#RoomNightAdmin)
    * [.getVendorIds(offset, limit, options)](#RoomNightAdmin_getVendorIds) ⇒ Promise
    * [.getVendor(vendorId, options)](#RoomNightAdmin_getVendor) ⇒ Promise
    * [.getVendorByAddress(address, options)](#RoomNightAdmin_getVendorByAddress) ⇒ Promise
    * [.supportedTokens(offset, limit, options)](#RoomNightAdmin_supportedTokens) ⇒ Promise
    * [.getToken(tokenId, options)](#RoomNightAdmin_getToken) ⇒ Promise
    * [.updateBaseTokenURI(uri, options)](#RoomNightAdmin_updateBaseTokenURI) ⇒ Promise
    * [.addVendor(address, name, options)](#RoomNightAdmin_addVendor) ⇒ Promise
    * [.removeVendorByAddress(address, options)](#RoomNightAdmin_removeVendorByAddress) ⇒ Promise
    * [.removeVendorById(vendorId, options)](#RoomNightAdmin_removeVendorById) ⇒ Promise
    * [.makeVendorValid(vendorId, valid, options)](#RoomNightAdmin_makeVendorValid) ⇒ Promise
    * [.addToken(contractAddress, options)](#RoomNightAdmin_addToken) ⇒ Promise
    * [.removeToken(tokenId, options)](#RoomNightAdmin_removeToken) ⇒ Promise


<br /><br /><br />

<a id="RoomNightAdmin_getVendorIds"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.getVendorIds(offset, limit, options) ⇒ Promise</h5>Get Vendor ids by page

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {vendorIds: Number, nextVendorId: Number }
* vendorIds: Vendor ids, 
* nextVendorId: The next id of vendor, if id = 0 the next vendor is null  

| Param | Type | Description |
| --- | --- | --- |
| offset | Number | The begin id, if id = 0 search from the begin |
| limit | Number | The limit of one page |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_getVendor"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.getVendor(vendorId, options) ⇒ Promise</h5>Get the vendor info by id

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {name: String, address: String, createTime: Number, isValid: Boolean}
* name: Vendor name
* address: Vendor address
* createTime: Create time: UTC timestamp(s)
* isValid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_getVendorByAddress"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.getVendorByAddress(address, options) ⇒ Promise</h5>Get vendor info by vendor address

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {name: String, address: String, createTime: Number, isValid: Boolean}
* name: Vendor name
* address: Vendor address
* createTime: Create time: UTC timestamp(s)
* isValid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| address | String | Vendor address |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_supportedTokens"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.supportedTokens(offset, limit, options) ⇒ Promise</h5>Get all supported tokens ids

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tokenIds: Number, nextVendorId: Number}
* tokenIds: Token ids
* nextVendorId: The next id of vendor, if id = 0 the next vendor is null  

| Param | Type | Description |
| --- | --- | --- |
| offset | Number | The begin id, if id = 0 search from the begin |
| limit | Number | The limit of one page |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_getToken"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.getToken(tokenId, options) ⇒ Promise</h5>Get token information by token id

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {symbole: String, name: String, decimal: Number, address: String}
* symbole: Token symbole
* name: Token name
* decimal: Token decimal
* address: Token address  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | Number | Token id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_updateBaseTokenURI"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.updateBaseTokenURI(uri, options) ⇒ Promise</h5>Update the base URI of token

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, uri: String}
* tx: Transaction address
* uri: The base URI of token  

| Param | Type | Description |
| --- | --- | --- |
| uri | String | The base URI of token |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_addVendor"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.addVendor(address, name, options) ⇒ Promise</h5>Add vendor

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, address: String, name: String}
* tx: Transaction address
* address: Vendor address
* name: Vendor name  

| Param | Type | Description |
| --- | --- | --- |
| address | String | Vendor address |
| name | String | Vendor name |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_removeVendorByAddress"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.removeVendorByAddress(address, options) ⇒ Promise</h5>Remove vendor by vendor address

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, address: String}
* tx: Transaction address
* address: Vendor address  

| Param | Type | Description |
| --- | --- | --- |
| address | String | Vendor address |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_removeVendorById"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.removeVendorById(vendorId, options) ⇒ Promise</h5>Remove vendor by vendor id

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, address: String}
* tx: Transaction address
* address: Vendor address  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_makeVendorValid"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.makeVendorValid(vendorId, valid, options) ⇒ Promise</h5>Make vendor valid or invalid

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, address: String, valid: Boolean}
* tx: Transaction address
* address: Vendor address
* valid: Vendor is valid or not  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| valid | Boolean | Vendor is valid or not |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_addToken"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.addToken(contractAddress, options) ⇒ Promise</h5>Add token

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, address: String}
* tx: Transaction address
* address: Token contract address  

| Param | Type | Description |
| --- | --- | --- |
| contractAddress | String | Token contract address |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightAdmin_removeToken"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightAdmin.removeToken(tokenId, options) ⇒ Promise</h5>Remove token

**Kind**: instance method of [`RoomNightAdmin`](#RoomNightAdmin)  
**Returns**: Promise - {tx: String, id: Number}
* tx: Transaction address
* id: Token id  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | Number | Token id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightCustomer"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    RoomNightCustomer</h5>RoomNightCustomer

**Kind**: global class  

* [RoomNightCustomer](#RoomNightCustomer)
    * [.ipfsBase58ToHex(ipfs)](#RoomNightCustomer_ipfsBase58ToHex) ⇒ String
    * [.ipfsHexToBase58(ipfs)](#RoomNightCustomer_ipfsHexToBase58) ⇒ String
    * [._getTokenContractInstance(token)](#RoomNightCustomer__getTokenContractInstance) ⇒ Promise
    * [.name()](#RoomNightCustomer_name) ⇒ Promise
    * [.symbol()](#RoomNightCustomer_symbol) ⇒ Promise
    * [.tokenURI(tokenId)](#RoomNightCustomer_tokenURI) ⇒ Promise
    * [.balanceOf(owner)](#RoomNightCustomer_balanceOf) ⇒ Promise
    * [.ownerOf(tokenId)](#RoomNightCustomer_ownerOf) ⇒ Promise
    * [.getApproved(tokenId)](#RoomNightCustomer_getApproved) ⇒ Promise
    * [.isApprovedForAll(owner, operator)](#RoomNightCustomer_isApprovedForAll) ⇒ Promise
    * [.isRefundApplied(rnid)](#RoomNightCustomer_isRefundApplied) ⇒ Promise
    * [.roomNight(rnid)](#RoomNightCustomer_roomNight) ⇒ Promise
    * [.roomNightsOfOwner(from, limit, isVendor, options)](#RoomNightCustomer_roomNightsOfOwner) ⇒ Promise
    * [.safeTransferFrom(from, to, tokenId, data, {tx:)](#RoomNightCustomer_safeTransferFrom)
    * [.transferFrom(from, to, tokenId, {tx:)](#RoomNightCustomer_transferFrom)
    * [.transferFromInBatch(from, to, tokenIds, {tx:)](#RoomNightCustomer_transferFromInBatch)
    * [.approve(approved, tokenId, {tx:)](#RoomNightCustomer_approve)
    * [.setApprovalForAll(operator, approved, {tx:)](#RoomNightCustomer_setApprovalForAll)
    * [.buyInBatch(vendorId, rpid, dates, token, options, {tx:)](#RoomNightCustomer_buyInBatch)
    * [.applyRefund(rnid, isRefund, options, {tx:)](#RoomNightCustomer_applyRefund)
    * [.refund(rnid, options, {tx:)](#RoomNightCustomer_refund)


<br /><br /><br />

<a id="RoomNightCustomer_ipfsBase58ToHex"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.ipfsBase58ToHex(ipfs) ⇒ String</h5>Convert IPFS address from base58 to hex format(begin with 0x)

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: String - IPFS with hex format(begin with 0x)  

| Param | Type | Description |
| --- | --- | --- |
| ipfs | String | IPFS address with base58 encoded |


<br /><br /><br />

<a id="RoomNightCustomer_ipfsHexToBase58"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.ipfsHexToBase58(ipfs) ⇒ String</h5>Conver IPFS address from hex format to base58 format

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: String - IPFS with base58 format  

| Param | Type | Description |
| --- | --- | --- |
| ipfs | String | IPFS address with hex format |


<br /><br /><br />

<a id="RoomNightCustomer__getTokenContractInstance"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.\_getTokenContractInstance(token) ⇒ Promise</h5>**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {Contract instance}  

| Param | Type |
| --- | --- |
| token | token | 


<br /><br /><br />

<a id="RoomNightCustomer_name"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.name() ⇒ Promise</h5>The name of current room night token

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {String} The name of current room night token  

<br /><br /><br />

<a id="RoomNightCustomer_symbol"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.symbol() ⇒ Promise</h5>The symbol of current room night token

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {String} The symbol of current room night token  

<br /><br /><br />

<a id="RoomNightCustomer_tokenURI"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.tokenURI(tokenId) ⇒ Promise</h5>The URI of token's information

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {String} The URI of token. E.g: http://ipfs.tripiochina.cn/api/v0/cat/Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | Number | Token id |


<br /><br /><br />

<a id="RoomNightCustomer_balanceOf"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.balanceOf(owner) ⇒ Promise</h5>The balance of any address

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {BigNumber} The token balance  

| Param | Type | Description |
| --- | --- | --- |
| owner | String | The owner address of some token |


<br /><br /><br />

<a id="RoomNightCustomer_ownerOf"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.ownerOf(tokenId) ⇒ Promise</h5>Get the owner of any token

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {String} The token's owner address  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | Number | The room night token id |


<br /><br /><br />

<a id="RoomNightCustomer_getApproved"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.getApproved(tokenId) ⇒ Promise</h5>Get the approved address for a single room night token

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {String} The approved address for this token, or the zero address if there is none  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | Number | The room night token id |


<br /><br /><br />

<a id="RoomNightCustomer_isApprovedForAll"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.isApprovedForAll(owner, operator) ⇒ Promise</h5>Query if an address is an authorized operator for another address

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {Boolean} True if operator is an approved `operator` for `owner`, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| owner | String | The address that owns the token |
| operator | String | The address that acts on behalf of the owner |


<br /><br /><br />

<a id="RoomNightCustomer_isRefundApplied"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.isRefundApplied(rnid) ⇒ Promise</h5>Whether the token is in refund applications

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {Boolean} True if token in refund applications, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| rnid | Number | The room night token id |


<br /><br /><br />

<a id="RoomNightCustomer_roomNight"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.roomNight(rnid) ⇒ Promise</h5>Get the room night infomation in detail

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {vendorId: BigNumber, rateplanId: BigNumber, tokenId: BigNumber, price: BigNumber, timestamp: BigNumber, date: BigNumber, ipfs: Hex String, rateplanName: String}
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
| rnid | Number | The room night token id |


<br /><br /><br />

<a id="RoomNightCustomer_roomNightsOfOwner"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.roomNightsOfOwner(from, limit, isVendor, options) ⇒ Promise</h5>Get all the room nights of the msg.sender(Customer or Vendor)

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  
**Returns**: Promise - {roomnightIds: BigNumber|Array, nextId: BigNumber}
* roomnightIds: Room night token ids
* nextId: The next id of token, if id = 0 the next token is null  

| Param | Type | Description |
| --- | --- | --- |
| from | Number | The begin id, if id = 0 search from the begin |
| limit | Number | The limit of one page |
| isVendor | Boolean | Is vendor or not |
| options | Dict | {from: msg.sender} |


<br /><br /><br />

<a id="RoomNightCustomer_safeTransferFrom"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.safeTransferFrom(from, to, tokenId, data, {tx:)</h5>Transfers the ownership of an room night token from one address to another address.
When transfer is complete, this function checks if _to is a smart contract (code size > 0). 
If so, it calls onERC721Received on _to and throws if the return value is not bytes4(keccak256("onERC721Received(address,uint256,bytes)")).

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | String | The current owner of the room night token |
| to | String | The new owner |
| tokenId | Number | The token to transfer |
| data | String | Additional data with no specified format, sent in call to `to` |
| {tx: | Promise | String, from: BigNumber, to: BigNumber, tokenId: BigNumber} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenId: The token to transfer |


<br /><br /><br />

<a id="RoomNightCustomer_transferFrom"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.transferFrom(from, to, tokenId, {tx:)</h5>Transfers the ownership of an room night token from one address to another address

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | String | The current owner of the room night token |
| to | String | The new owner |
| tokenId | Number | The token to transfer |
| {tx: | Promise | String, from: BigNumber, to: BigNumber, tokenId: BigNumber} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenId: The token to transfer |


<br /><br /><br />

<a id="RoomNightCustomer_transferFromInBatch"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.transferFromInBatch(from, to, tokenIds, {tx:)</h5>Transfers the ownership of tokens from one address to another address

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| from | String | The current owner of the room night token |
| to | String | The new owner |
| tokenIds | Number \| Array | The tokens to transfer |
| {tx: | Promise | String, from: BigNumber, to: BigNumber, tokenIds: Number|Array} * tx: Transaction number * from: The current owner of the room night token * to: The new owner * tokenIds: The token to transfer |


<br /><br /><br />

<a id="RoomNightCustomer_approve"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.approve(approved, tokenId, {tx:)</h5>Set or reaffirm the approved address for an room night token

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| approved | String | The new approved token controller |
| tokenId | Number | The token to approve |
| {tx: | Promise | String, owner: String, approved: String, tokenId: BigNumber} * tx: Transaction number * owner: The current owner of the room night token * approved: The new approved token controller * tokenId: The token to approve |


<br /><br /><br />

<a id="RoomNightCustomer_setApprovalForAll"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.setApprovalForAll(operator, approved, {tx:)</h5>Enable or disable approval for a third party ("operator") to manage all of msg.sender's assets

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| operator | String | The new approved token controller |
| approved | Boolean | The token to approve |
| {tx: | Promise | String, owner: String, operator: String, approved: Boolean} * tx: Transaction number * owner: The current owner of the room night token * operator: The new approved token controller * approved: The token to approve |


<br /><br /><br />

<a id="RoomNightCustomer_buyInBatch"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.buyInBatch(vendorId, rpid, dates, token, options, {tx:)</h5>By room nigth in batch through ETH(`token` == 0) or other digital token(`token` != 0)

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | The vendor Id |
| rpid | Number | The vendor's rate plan id |
| dates | Number \| Array | The booking dates |
| token | Number | The digital currency token |
| options | Dict | {from: msg.sender} |
| {tx: | Promise | String, customer: String, vendor: String, rpid: BigNumber, dates: Number|Array, token: BigNumber} * tx: Transaction number * customer: The customer address * vendor: Then vendor address * rpid: The rateplan id * dates: The booking dates * token: The digital currency token |


<br /><br /><br />

<a id="RoomNightCustomer_applyRefund"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.applyRefund(rnid, isRefund, options, {tx:)</h5>Apply room night refund

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| rnid | Number | Room night token id |
| isRefund | Boolean | if true the `rnid` can refund else not |
| options | Dict | {from: msg.sender} |
| {tx: | Promise | String, customer: String, rnid: BigNumber, isRefund: Boolean} * tx: Transaction number * customer: The customer address * rnid: The rateplan id * isRefund: if true the `rnid` can refund else not |


<br /><br /><br />

<a id="RoomNightCustomer_refund"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightCustomer.refund(rnid, options, {tx:)</h5>Refund through ETH or other digital token, give the room night ETH/TOKEN to customer and take back inventory

**Kind**: instance method of [`RoomNightCustomer`](#RoomNightCustomer)  

| Param | Type | Description |
| --- | --- | --- |
| rnid | Number | Room night token id |
| options | Dict | {from: msg.sender} |
| {tx: | Promise | String, vendor: String, rnid: BigNumber} * tx: Transaction number * vendor: Then vendor address * rnid: Room night token id |


<br /><br /><br />

<a id="RoomNightVendor"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    RoomNightVendor</h5>RoomNightVendor

**Kind**: global class  

* [RoomNightVendor](#RoomNightVendor)
    * [.inventoriesOfDate(vendorId, rpid, dates, options)](#RoomNightVendor_inventoriesOfDate) ⇒ Promise
    * [.pricesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor_pricesOfDate) ⇒ Promise
    * [.priceOfDate(vendorId, rpid, date, token, options)](#RoomNightVendor_priceOfDate) ⇒ Promise
    * [.ratePlansOfVendor(vendorId, offset, limit, options)](#RoomNightVendor_ratePlansOfVendor) ⇒ Promise
    * [.ratePlanOfVendor(vendorId, rpid, options)](#RoomNightVendor_ratePlanOfVendor) ⇒ Promise
    * [.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options)](#RoomNightVendor_pricesAndInventoriesOfDate) ⇒ Promise
    * [.updatePrices(rpid, dates, inventory, tokens, prices, options)](#RoomNightVendor_updatePrices) ⇒ Promise
    * [.updateInventories(rpid, dates, inventory, options)](#RoomNightVendor_updateInventories) ⇒ Promise
    * [.updateBasePrice(rpid, tokens, prices, inventory, options)](#RoomNightVendor_updateBasePrice) ⇒ Promise
    * [.createRatePlan(name, ipfs, options)](#RoomNightVendor_createRatePlan) ⇒ Promise
    * [.removeRatePlan(rpid, options)](#RoomNightVendor_removeRatePlan) ⇒ Promise
    * [.modifyRatePlan(rpid, name, ipfs, options)](#RoomNightVendor_modifyRatePlan) ⇒ Promise


<br /><br /><br />

<a id="RoomNightVendor_inventoriesOfDate"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.inventoriesOfDate(vendorId, rpid, dates, options) ⇒ Promise</h5>Get inventories of dates

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| rpid | Number | Rateplan id |
| dates | Number | Dates E.g: [20180610,20180611] |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_pricesOfDate"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.pricesOfDate(vendorId, rpid, dates, token, options) ⇒ Promise</h5>Get prices of dates

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| rpid | Number | Rateplan id |
| dates | Number | Dates E.g: [20180610,20180611] |
| token | Number | Token id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_priceOfDate"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.priceOfDate(vendorId, rpid, date, token, options) ⇒ Promise</h5>Get price and inventory of date

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {inventory: Number, price: Number}
* inventory: Inventory
* price: Price  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| rpid | Number | Rateplan id |
| date | Number | Date E.g: 20180630 |
| token | Number | Token id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_ratePlansOfVendor"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.ratePlansOfVendor(vendorId, offset, limit, options) ⇒ Promise</h5>Get rateplans of vendor by vendor id

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {rateplanIds: Number, nextRateplanId: Number}
* rateplanIds: Rateplan ids
* nextRateplanId: The next id of rateplan, if id = 0 the next rateplan is null  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| offset | Number | The begin id, if id = 0 search from the begin |
| limit | Number | The limit of one page |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_ratePlanOfVendor"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.ratePlanOfVendor(vendorId, rpid, options) ⇒ Promise</h5>Get rateplan information by vendor id and rateplan id

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {name: String, createTime: Number, ipfsAddress: String}
* name: Rateplan name
* createTime: Create time: UTC timestamp(s)
* ipfsAddress: IPFS file address  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| rpid | Number | Rateplan id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_pricesAndInventoriesOfDate"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.pricesAndInventoriesOfDate(vendorId, rpid, dates, token, options) ⇒ Promise</h5>Get prices and inventories by vendor id, rateplan id, dates, token id

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {prices: Array, inventorys: Array}
* prices: Prices
* inventorys: Inventories  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | Number | Vendor id |
| rpid | Number | Rateplan Id |
| dates | Array | Date E.g: [20180610,20180611] |
| token | Number | Token id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_updatePrices"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.updatePrices(rpid, dates, inventory, tokens, prices, options) ⇒ Promise</h5>Update prices and inventory of rateplan

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | Number | Rateplan Id |
| dates | Array | Date E.g: [20180610,20180611] |
| inventory | Number | Inventory |
| tokens | Array | Token ids |
| prices | Array | Prices of tokens |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_updateInventories"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.updateInventories(rpid, dates, inventory, options) ⇒ Promise</h5>Update inventories of rateplan

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | Number | Rateplan Id |
| dates | Array | Date E.g: [20180610,20180611] |
| inventory | Number | Inventory |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_updateBasePrice"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.updateBasePrice(rpid, tokens, prices, inventory, options) ⇒ Promise</h5>Update the base price of all rateplans

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, rpid: Number}
* tx: Transaction address
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | Number | Rateplan Id |
| tokens | Array | Token ids |
| prices | Array | Prices of tokens |
| inventory | Number | Inventory |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_createRatePlan"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.createRatePlan(name, ipfs, options) ⇒ Promise</h5>Create new rateplan

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, vendorId: String, name: String, ipfs: String}
* tx: Transaction address
* vendorId: Vendor Id
* name: Rateplan name
* ipfs: The IPFS's address of rateplan's desc  

| Param | Type | Description |
| --- | --- | --- |
| name | String | Rateplan name |
| ipfs | String | The IPFS's address of rateplan's desc |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_removeRatePlan"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.removeRatePlan(rpid, options) ⇒ Promise</h5>Remove rateplan

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, vendorId: String, rpid: Number}
* tx: Transaction address
* vendorId: Vendor Id
* rpid: Rateplan Id  

| Param | Type | Description |
| --- | --- | --- |
| rpid | Number | Rateplan Id |
| options | Object |  |


<br /><br /><br />

<a id="RoomNightVendor_modifyRatePlan"></a>

<h5 style="margin: 10px 0px; border-width: 1px 0px; padding: 5px; border-style: solid;">
    roomNightVendor.modifyRatePlan(rpid, name, ipfs, options) ⇒ Promise</h5>Modify rateplan

**Kind**: instance method of [`RoomNightVendor`](#RoomNightVendor)  
**Returns**: Promise - {tx: String, vendorId: String, rpid: Number, name: String, ipfs: String}
* tx: Transaction address
* vendorId: Vendor Id
* rpid: Rateplan Id
* name: Rateplan name
* ipfs: The IPFS's address of rateplan's desc  

| Param | Type |
| --- | --- |
| rpid | Number | 
| name | String | 
| ipfs | String | 
| options | Object | 

