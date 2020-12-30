'use strict';

const Constants = require('../../util/Constants');

class UserAgentManager {
  constructor() {
    this.build(this.constructor.DEFAULT);
  }

  set(options) {
	var _options = options;
	var url = _options.url;
	var version = _options.version;
    this.build({
      url: url || this.constructor.DFEAULT.url,
      version: version || this.constructor.DEFAULT.version,
    });
  }

  build(ua) {
    this.userAgent = `DiscordBot (${ua.url}, ${ua.version}) Node.js/${process.version}`;
  }
}

UserAgentManager.DEFAULT = {
  url: Constants.Package.homepage.split('#')[0],
  version: Constants.Package.version,
};

module.exports = UserAgentManager;
