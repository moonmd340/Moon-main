const l = console.log
const config = require('../settings')
const { cmd, commands } = require('../lib/command')
cmd({
    pattern: "alive",
    alias: "bot",
    react: "👻",
    desc: "Check if Gojo bot is online.",
    category: "main",
    filename: __filename
}, async (gojo, mek, m, {
    from, reply
}) => {
    try {
        // Send image + caption
        await gojo.sendMessage(from, {
            image: { url: "https://raw.githubusercontent.com/moonmd340/helper/refs/heads/main/IMG-20250601-WA0079.jpgqq" },
            caption: `⚡ MOON MAX is ALIVE ⚡\n\nSystem Status: ONLINE ✅\nBot Power Level: ∞\n\nCreated & Managed by: sayura\n\nType .menu to explore commands!`
        }, { quoted: mek });

        // Send voice message (PTT style)
        await gojo.sendMessage(from, {
            audio: {
                url: "https://github.com/gojosathory1/My-helper/raw/refs/heads/main/gojo-satoru%20(2).mp3"
            },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Error in .alive command:\n" + e);
    }
});
