const { EmbedBuilder } = require("discord.js");

const EmbedJsonParser = (json) => {
  if (!json) throw new Error('Missing Argument: JSON')
  const embed = new EmbedBuilder();
  if (json.title) {
    try {
      embed.setTitle(json.title);
    } catch (error) {
      throw Error(err);
    }
  }
  if (json.description) {
    try {
      embed.setDescription(json.description);
    } catch (error) {
      throw Error(error);
    }
  }
  if (json.fields) {
    json.fields.forEach((field) => {
      try {
        embed.addFields({
          name: field.name,
          value: field.value,
          inline: field.inline,
        });
      } catch (error) {
        throw Error(error);
      }
    });
  }
  if (json.author) {
    try {
      embed.setAuthor({
        name: json.author.name,
        iconURL: json.author.icon_url,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  if (json.footer) {
    try {
      embed.setFooter({
        text: json.footer.text,
        iconURL: json.footer.icon_url,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  return embed;
};

module.exports = {
  EmbedJsonParser,
};
