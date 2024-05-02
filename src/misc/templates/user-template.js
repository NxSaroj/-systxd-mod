const userTemplate = (value, { userTemplate }) => {
    if (!value) throw new Error('Missing Argument: value')
    if (!userTemplate) throw new Error('Missing Argument: userTemplate')

    if (typeof userTemplate !== 'string') {
        throw new Error(`Error: UserTemplate Must Be An String`)
    }

    if (value == 'interaction') {
        const templates = userTemplate
        .replace(`{user.mention}`, `<@${interaction.user.id}>`)
        .replace(`{user.id}`, `${interaction.user.id}`)
        .replace(`{user.mention}`, `<@${interaction.user.id}>`)
        return templates
    } else {
        const templates = userTemplate
        .replace(`{user.mention}`, `<@${message.user.id}>`)
        .replace(`{user.id}`, `${message.user.id}`)
        .replace(`{user.mention}`, `<@${message.user.id}>`)
        return templates
    }
}

module.exports = {
    userTemplate
}