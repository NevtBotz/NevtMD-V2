//KALAU MAU BCGC REPLY PESAN YANG MAU DI BC
//KALAU GAK PAKE REPLY MASIH ERROR
/*let handler = async (m, { conn, text, participants }) => {
const {delay} = require("@adiwajshing/baileys")

async function f(){
let getGroups = await conn.groupFetchAllParticipating()

let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])

let anu = groups.map(v => v.id)

m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)

for (let i of anu) {

await delay(100)

conn.copyNForward(i, m.quoted.fakeObj, true)

}

m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group Chat`)

}

return f()
}
handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc)$/i

handler.owner = true

module.exports = handler*/

let handler = async (m, { conn,isOwner, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    for (let i of anu) {
    await delay(500)
    conn.reply(i, `*BROADCAST GROUP*\n${pesan}\n*©RriiBot*`).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

module.exports = handler

