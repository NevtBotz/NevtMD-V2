const hxz = require("hxz-api")
let handler = async(m, { conn, args, usedPrefix, command }) => {
let p = await  hxz.ttdownloader(args[0])
const { nowm, wm, audio } = p
// made by aine
 conn.sendFile(m.chat, nowm, 'tiktok.mp4', `*© Nevt*`, m)
}
handler.help = ['tiktoknowm <url>']
handler.tags = ['downloader']

handler.command = /^(tik|tt|tiktoknowm)$/i
handler.premium = true
handler.limit = true

module.exports = handler
