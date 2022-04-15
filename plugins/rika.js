let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.url) throw 'Error!'
  conn.sendFile(m.chat, json.result.url, '', 'Follow ig sya yh kak @NevtzGanz', m)
}
handler.help = ['rika']
handler.tags = ['gachasupan']
handler.command = /^(rika)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
