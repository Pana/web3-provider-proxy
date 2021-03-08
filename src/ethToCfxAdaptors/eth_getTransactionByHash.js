const Adaptor = require('../JsonRPCAdaptor');
const format = require('../format');
const util = require('../util');

/**
 * eth method: eth_getTransactionByHash
 * cfx method: cfx_getTransactionByHash
 * 
 * inputs example:
 * 
 * outputs example:
 Object - A transaction object, or null when no transaction was found:

    blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending.
    blockNumber: QUANTITY - block number where this transaction was in. null when its pending.
    from: DATA, 20 Bytes - address of the sender.
    gas: QUANTITY - gas provided by the sender.
    gasPrice: QUANTITY - gas price provided by the sender in Wei.
    hash: DATA, 32 Bytes - hash of the transaction.
    input: DATA - the data send along with the transaction.
    nonce: QUANTITY - the number of transactions made by the sender prior to this one.
    to: DATA, 20 Bytes - address of the receiver. null when its a contract creation transaction.
    transactionIndex: QUANTITY - integer of the transactions index position in the block. null when its pending.
    value: QUANTITY - value transferred in Wei.
    v: QUANTITY - ECDSA recovery id
    r: DATA, 32 Bytes - ECDSA signature r
    s: DATA, 32 Bytes - ECDSA signature s
 */
async function outputAdaptor(response) {
  if (!response || !response.result) return;
  format.formatTransaction(response.result);
}

module.exports = new Adaptor(util.asyncEmptyFn, outputAdaptor);