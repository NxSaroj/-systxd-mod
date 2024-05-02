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

  userTemplate(value, { userTemplate }) {
    userTemplate(value, { userTemplate })
  }
}


module.exports = {
  XMod
};

const { userTemplate } = new XMod()

userTemplate('interaction', {
  userTemplate: ''
})