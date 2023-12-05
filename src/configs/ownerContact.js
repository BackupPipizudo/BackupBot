const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Meu Programador\n' // full name
            + 'ORG:𝑩𝑨𝑪𝑲𝑼𝑷-𝑩𝑶𝑻;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=5586981892542:+55 86 98189-2542\n' // WhatsApp ID + phone number
            + 'END:VCARD'

module.exports = vcard