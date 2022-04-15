/*let handler = async (m, { conn, text, participants }) => {
if(!text && !m.quoted) throw 'masukkan nomor yang ingin di tambahkan'

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

await conn.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
handler.help = ['add','+'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(add|+)$/i

handler.owner = false
handler.group = true
handler.botAdmin = true


module.exports = handler*/


let handler = async (m, { conn, text, usedPrefix }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*❏ ADD NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}add @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}add 6289654360447*`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ ADD NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}add @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}add 6289654360447*`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ ADD NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}add @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}add 6289654360447*`, m) 
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
  
	 await conn.groupParticipantsUpdate(m.chat, [user], "add")
	//if (response[user] == 408) throw `Nomor tersebut telah keluar baru² ini\nHanya bisa masuk melalui ${usedPrefix}link`
 	
 	conn.reply(m.chat, `Berhasil Menambahkan @${number}`, null, {contextInfo: {
    mentionedJid: [user]
 	}})
 }
}
handler.help = ['add <@user>']
handler.tags = ['group']
handler.command = /^add$/i
handler.owner = false

module.exports = handler
