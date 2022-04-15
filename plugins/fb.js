/*let scraper = require('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
  await m.reply('Loading...')
  let res = await scraper.facebookdl(args[0])
  let data = res.result.filter(v => /true/.test(v.isVideo) && /mp4/.test(v.ext))
  await conn.sendFile(m.chat, data[1].url, '', `HD: ${data[0].url}`, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true

module.exports = handler*/


let fetch = require('node-fetch')

let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
   
    let json = await res.json()
    if (!json.status) throw json
    await m.reply('Sedang di proses..')
    await conn.sendFile(m.chat, json.data[1].url, json.data[1].url, wm, m)
}
handler.help = ['fb2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook|)(dl|download)?(er)?(2)?)$/i
handler.limit = true
handler.group = true

module.exports = handler
