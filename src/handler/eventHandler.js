const path = require("path");
const fs = require("fs");

const EventHandler = (client, dir) => {
  try {
    if (!client) throw Error(`Missing Arguments: Client`);

    const eventDir = path.join(__dirname, dir);
    const eventFiles = fs.readdirSync(eventDir).filter((f) => f.endsWith('.js'))
    eventFiles.forEach((file) => {
      const filePath = path.join(eventDir, file);
      const checkDir = fs.statSync(filePath);

      if (checkDir.isDirectory()) {
        const filesArray = fs
          .readdirSync(filePath)
          .map((f) => path.join(filePath, f))
          .filter((f) => f.endsWith(".js"));
        filesArray.forEach((dirFile) => {
          const { event, once, callback } = require(dirFile);
          const handler = (...args) => callback(...args, client);

          if (once) {
            client.once(event, handler);
          } else {
            client.on(event, handler);
          }
        });
      } else {
        const { event, once, callback } = require(filePath);
        const handler = (...args) => callback(...args, client);

        if (once) {
          client.once(event, handler);
        } else {
          client.on(event, handler);
        }
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  EventHandler,
};
