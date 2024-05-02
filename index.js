const { linkFilter } = require("./src/automod/linkFilter");
const { EmbedJsonParser } = require('./src/misc/embed/json-parser')
const { userTemplate } = require('./src/misc/templates/user-template')
class XMod {
  linkFilter(msg) {
    linkFilter(msg);
  }

  EmbedJsonParser (json) {
    EmbedJsonParser(json)
  }


}


module.exports = {
  XMod
};

