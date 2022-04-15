const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; NevtGanz;;;'
                    + 'FN: NevtGanz\n' // full name
                    + 'ORG:Nevt;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281805450249:+62 818-0545-0249\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Owner Nevt', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler