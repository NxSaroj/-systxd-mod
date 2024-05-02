# @systxd/x-mod

**A DiscordJS Package That Your Bot Needs!**

## How to Install? 
```bash
npm i @systxd/x-mod
```

## Guide for JSON-PARSER

```js
const { XMod } = require('@systxd/x-mod')
const { EmbedJsonParser } = new XMod()

const json_data = JSON.stringify({
    // ....Your JSON, You can also collect json from message using collectors
})

const embed = EmbedJsonParser(json_data)

interaction.reply({
    embeds: [embed]
})

```

## Guide for Link Filter

```js
const { XMod } = require('@systxd/x-mod')
const { linkFilter } = new XMod()

const isLinkIncluded = linkFilter('messageContent')
if (isLinkIncluded.response == true) {
    // .. That message includes a link!
}
```