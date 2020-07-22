export const repos = (ctx) => {
    const fetches = await fetch("https://api.github.com/orgs/bsba-team/repos")
    const keyboard = Object.values(fetches).map((obj) => [`${obj["name"]}`, `repo_${obj["name"]}`])
    await ctx.replyWithPhoto({source: `./assets/repo.png`}, {
        caption: `<b>Choose the project you would like to interact with:</b>`,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [keyboard]
        }
    })
}