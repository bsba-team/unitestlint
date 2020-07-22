import { Bot } from "./deps.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") as string);

bot.on("text", (ctx) => {
    if (ctx.message?.text === "/start") {
        ctx.reply("hello, world");
    }
});

bot.launch();