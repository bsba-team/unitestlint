import { start } from "./start.js";
import { help } from "./help.js";
import { bot } from "../core/bot.js";

bot.on("text", (ctx) => {
    if (ctx.message?.text === '/start' || ctx.message?.text === 'start') {
        start(ctx)
    } else if (ctx.message?.text === '/help' || ctx.message?.text === 'help') {
        help(ctx)
    }
});