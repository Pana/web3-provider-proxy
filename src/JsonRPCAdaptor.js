const defaultMethodAdaptor = require('./defaultMethodAdaptor');
const util = require('./util');

class JsonRPCAdapter {
  constructor(inputAdaptor = util.asyncEmptyFn, outputAdaptor = util.asyncEmptyFn, methodAdaptor = defaultMethodAdaptor) {
    this.inputAdaptor = inputAdaptor;
    this.outputAdaptor = outputAdaptor;
    this.methodAdaptor = methodAdaptor;
  }

  async adaptInput(payload) {
    payload.method = this.methodAdaptor(payload.method, payload.params);
    await this.inputAdaptor(payload.params);
  }

  async adaptOutput(data) {
    await this.outputAdaptor(data);
    return data;
  }
}

module.exports = JsonRPCAdapter;