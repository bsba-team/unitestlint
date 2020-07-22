(async () => {
    if (await fetch('github.com'))
        await console.log("GitHub is reachable!");
    else
        await console.log("GitHub is not reachable!")

    if (await fetch('api.telegram.org'))
        await console.log("Telegram API is reachable!");
    else
        await console.log("Telegram API is not reachable!")
})();