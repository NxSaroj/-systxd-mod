const linkFilter = (message) => {
    if (!message) {
        throw new Error(`Missing Argument: Message`)
        return;
    }
    if (message.includes('https://') || message.includes('http://') || message.includes('discord.gg/') || message.includes('www.')) {
        return {
            response: true
        }
    } else {
        return {
            response: false
        }
    }
}

module.exports = {
    linkFilter
}