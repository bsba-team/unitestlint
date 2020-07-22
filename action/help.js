const text =
    `<b>List of available commands:</b>` + `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` + `\n` +
    `/minecraft - <code>check server status</code>` + `\n` +
    `/admins - <code>get infos about admins</code>` + `\n` +
    `/repos - <code>get infos about repos</code>` + `\n` +
    `/join - <code>request to join our organisation</code>` + `\n`
    // `\n` +
    // `<i>In order to our inline mode, switch to inline mode ` +
    // `by typing: @bsba_bot and then start typing something there.</i>`

export const help = (ctx) => {
    ctx.reply(text, {
        parse_mode: "HTML"
    })
}