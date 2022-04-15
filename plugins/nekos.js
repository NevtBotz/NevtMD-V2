let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('http://nekos.life/api/v2/img/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nyaa', '© Nevtbot', '➡️ Next', `${usedPrefix + command}`, m,)
}
handler.help = ['neko2']
handler.tags = ['nsfw']
handler.command = /^(neko2)$/i
handler.premium = true
handler.limit = true

module.exports = handler
