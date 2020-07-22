import { Bot } from "https://deno.land/x/telegram/mod.ts"
import { token, environment, domain, port } from "./config.js"

export const bot = new Bot(token)

bot.launch()