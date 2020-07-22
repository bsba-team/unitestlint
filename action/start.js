const text =
    `<b>Welcome to BSBA™: Unister Assistant!</b>` + `\n` +
    `\n` +
    `This bot helps you to manage with information about BSBA team.` + `\n` +
    `With the help of this bot you can do:` + `\n` +
    `\n` +
    `<code>* Check current status of the team</code>` + `\n` +
    `<code>* Check the members & their statuses</code>` + `\n` +
    `<code>* Check status of minecraft servers</code>` + `\n` +
    `\n` +
    `<i>In order to see full detailed usage information of the bot, press the button below.</i>`

export const start = (ctx) => {
    ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: `Show detailed information`, callback_data: `help` }
                ]
            ]
        }
    })
}