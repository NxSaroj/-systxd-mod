const { linkFilter } = require("./src/automod/linkFilter");
const { EmbedJsonParser } = require('./src/misc/embed/json-parser')
const { userTemplate } = require('./src/misc/templates/user-template')
const { EventHandler } = require('./src/handler/eventHandler')
class XMod {
  linkFilter(msg) {
    linkFilter(msg);
  }

  EmbedJsonParser (json) {
    EmbedJsonParser(json)
  }

  userTemplate(value, { userTemplate }) {
    userTemplate(value, { userTemplate })
  }

  
}

class XHandler {
  constructor ({ client, eventsPath }) {
    EventHandler(client, eventsPath)
  }
}

module.exports = {
  XMod,
  XHandler
};

