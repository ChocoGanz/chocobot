const { WAConnection: _WAConnection, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange,MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { color, bgcolor } = require('./lib/color')
const fs = require("fs")
const CFonts = require('cfonts')
const figlet = require("figlet")
const choco = new WAConnection

const imgFake = fs.readFileSync('./media/fake.jpg')
const fakeThumb = fs.readFileSync('/sdcard/Download/TextPro.me_161bad7b825ffc.jpg')

require('./choco.js')
nocache('./choco.js', module => console.log(`${module} is now updated!`))

async function starts() {
	console.clear()
    choco.logger.level = 'warn'
    choco.version = [2, 2142, 12]
    choco.browserDescription = [ 'CHOCO', 'EDGE', '3.0' ]
    choco.autoReconnect = ReconnectMode.onConnectionLost
    CFonts.say('Choco Bot', {
        colors: ['#f2aa4c'],
        font: 'block',
        align: 'center',
    })
    console.log(color("                 Made with @ChocoGanz\n\n", 'green'))
    choco.on('qr', () => {
        console.log(color('[','blue'), color('SCAN','red'), color(']','blue'), color(' Scan this qr code!'))
    })
    fs.existsSync('./session.json') && choco.loadAuthInfo('./session.json')
    choco.on('credentials-updated', () => {
        console.log('[SYSTEM]  credentials updated!')
        })
    choco.on('connecting', () => {
        console.log('[SYSTEM]  Connecting...')
    })
    choco.on('open', () => {
        console.log('[SYSTEM]  Connected')
    })
    choco.on('ws-close', () => {
        console.log('[SYSTEM]  Connection lost, trying to reconnect.')
        })
    choco.on('close', async () => {
        console.log('[SYSTEM]  Disconnected.')
        })
    await choco.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(choco.base64EncodedAuthInfo(), null, '\t'))
         
    choco.on (`CB:action,,battery`, json => {
    const batteryLevelStr = json[2][0][1].value
    const batterylevel = parseInt (batteryLevelStr)
    console.log ("battery level: " + batterylevel + "%")
    })
    
    choco.on ('CB:Conn,pushname', json => {
    const pushname = json[1].pushname
    choco.user.name = pushname // update on choco too
    console.log ("Name updated: " + pushname)
    })
    
    // the presence update is fetched and called here
    //choco.on ('CB:Presence', json => console.log(json.id + " presence is " + json.type))
    //await choco.requestPresenceUpdate ("6288225066473@c.us") // request the update
    
    choco.on ('message-new', async m => {
    if (!m.message) return // if there is no text or media message
    const messageType = Object.keys (m.message)[0]// get what type of message it is -- text, image, video
    // if the message is not a text message
    if (messageType !== MessageType.text && messageType !== MessageType.extendedText) {
        const buffer = await choco.downloadMediaMessage(m) // to decrypt & use as a buffer
        const savedFilename = await choco.downloadAndSaveMediaMessage (m) // to decrypt & save to file
        console.log(m.key.remoteJid + " sent media, saved at: " + savedFilename)
    }
    })
    
    choco.on('group-update', async (anu) => {
    	console.log(anu)
        const qtd = { key: { remoteJid: "0@s.whatsapp.net", fromMe: false }, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AsxMWm5LKfSXpX6LR7n40IKWWjKazoWJP9MJ1bFXbMKU.enc", "fileSha256": "ckPnwWFvhtoc0BjCUfI7m/S+eDBAG080mNk46qTefTY=", "fileEncSha256": "PVLLueC8bLiqrk4T919wSrwSN7KYmM6MqSI0DwWkPQI=", "mediaKey": "OoOhc4tY091ZHwl5Zgqt6AtQk1z2rDr2Jb8RDlUbmiY=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/35446154_1601917370162387_3377393116695326260_n.enc?ccb=11-4&oh=01_AVwas7KdGdcMBnG2MtdjghzckomzahX3gLCsZmqYKaBgvg&oe=61E0B324", "fileLength": "50000000000", "mediaKeyTimestamp": "1639621068", "isAnimated": false }}}
     if (anu.announce == "true") {
     	choco.sendMessage(anu.jid, "𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲\n\nAdmin grup telah mengubah setelan grup agar hanya admin yang dapat mengirim pesan", MessageType.text, { quoted: qtd, sendEphemeral: true, contextInfo: { externalAdReply: { title: "Group Closed", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: imgFake, sourceUrl: "" }}})
     } else if (anu.announce == "false") {
     	choco.sendMessage(anu.jid, "𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻\n\nAdmin grup telah mengubah setelan grup agar semua peserta dapat mengirim pesan", MessageType.text, { quoted: qtd, sendEphemeral: true, contextInfo: { externalAdReply: { title: "Group Closed", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: imgFake, sourceUrl: "" }}})
     } else if (anu.restrict == "true") {
     	choco.sendMessage(anu.jid, "𝗖𝗵𝗮𝗻𝗴𝗲 𝗘𝗱𝗶𝘁 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗳𝗼\n\nAdmin grup telah mengubah setelan grup agar hanya admin yang dapat mengubah info grup", MessageType.text, { quoted: qtd, sendEphemeral: true, contextInfo: { externalAdReply: { title: "Group Closed", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: imgFake, sourceUrl: "" }}})
     } else if (anu.restrict == "false") {
     	choco.sendMessage(anu.jid, "𝗖𝗵𝗮𝗻𝗴𝗲 𝗘𝗱𝗶𝘁 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗳𝗼\n\nAdmin grup telah mengubah setelan grup agar semua peserta dapat mengubah info grup", MessageType.text, { quoted: qtd, sendEphemeral: true, contextInfo: { externalAdReply: { title: "Group Closed", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: imgFake, sourceUrl: "" }}})
     } else if (!anu.desc == '') {
     	owns = `${anu.descOwner.split('@')[0]}@s.whatsapp.net`
         choco.sendMessage(anu.jid, `𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲\n\n@${owns.split("@")[0]} grup telah mengubah deskripsi grup\n• Deskripsi yang baru : ${anu.desc}`, MessageType.text, { quoted: qtd, sendEphemeral: true, contextInfo: { mentionedJid: [owns], externalAdReply: { title: "Group Closed", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: imgFake, sourceUrl: "" }}})
     }
    })
    
    choco.on('group-participants-update', async (anu) => {
    	console.log(anu)
        const orng = `${anu.participants}`
        const qtz = { key: { remoteJid: "0@s.whatsapp.net", fromMe: false }, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AsxMWm5LKfSXpX6LR7n40IKWWjKazoWJP9MJ1bFXbMKU.enc", "fileSha256": "ckPnwWFvhtoc0BjCUfI7m/S+eDBAG080mNk46qTefTY=", "fileEncSha256": "PVLLueC8bLiqrk4T919wSrwSN7KYmM6MqSI0DwWkPQI=", "mediaKey": "OoOhc4tY091ZHwl5Zgqt6AtQk1z2rDr2Jb8RDlUbmiY=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/35446154_1601917370162387_3377393116695326260_n.enc?ccb=11-4&oh=01_AVwas7KdGdcMBnG2MtdjghzckomzahX3gLCsZmqYKaBgvg&oe=61E0B324", "fileLength": "50000000000", "mediaKeyTimestamp": "1639621068", "isAnimated": false }}}
        if (anu.action == "add") {
        	choco.sendMessage(anu.jid, `@${orng.split("@")[0]} telah bergabung di grup, berikan sapaan kepada dia`, MessageType.text, { quoted: qtz, sendEphemeral: true, contextInfo: { mentionedJid: [orng], externalAdReply: { title: "𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗠𝗲𝘀𝘀𝗮𝗴𝗲", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: fakeThumb, sourceUrl: "" }}})
        } else if (anu.action == "remove") {
        	choco.sendMessage(anu.jid, `@${orng.split("@")[0]} telah meninggalkan grup, berikan salam kepada dia`, MessageType.text, { quoted: qtz, sendEphemeral: true, contextInfo: { mentionedJid: [orng], externalAdReply: { title: "𝗟𝗲𝗮𝘃𝗲 𝗠𝗲𝘀𝘀𝗮𝗴𝗲", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: fakeThumb, sourceUrl: "" }}})
        } else if (anu.action == "promote") {
        	choco.sendMessage(anu.jid, `@${orng.split("@")[0]} telah menjadi admin di grup, berikan ucapan selamat kepada dia`, MessageType.text, { quoted: qtz, sendEphemeral: true, contextInfo: { mentionedJid: [orng], externalAdReply: { title: "𝗣𝗿𝗼𝗺𝗼𝘁𝗲 𝗠𝗲𝘀𝘀𝗮𝗴𝗲", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: fakeThumb, sourceUrl: "" }}})
        } else if (anu.action == "demote") {
        	choco.sendMessage(anu.jid, `@${orng.split("@")[0]} telah menjadi member di grup, berikan ejekan kepada dia`, MessageType.text, { quoted: qtz, sendEphemeral: true, contextInfo: { mentionedJid: [orng], externalAdReply: { title: "𝗗𝗲𝗺𝗼𝘁𝗲 𝗠𝗲𝘀𝘀𝗮𝗴𝗲", body: "𝐶ℎ𝑜𝑐𝑜𝑏𝑜𝑡", previewType: "PHOTO", jpegThumbnail: fakeThumb, sourceUrl: "" }}})
        }
    })
    
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of chats!
    choco.on('chats-received', async ({ hasNewChats }) => {
        console.log(`you have ${choco.chats.length} chats, new chats available: ${hasNewChats}`)

        const unread = await choco.loadAllUnreadMessages ()
        console.log ("you have " + unread.length + " unread messages")
    })
    
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of contacts!
    choco.on('contacts-received', () => {
        console.log('you have ' + Object.keys(choco.contacts).length + ' contacts')
    })
    
    // `chatUpdate` is a partial object, containing the updated properties of the chat
    // received a new message
    choco.on('chat-update', async (mek) => {
        require('./choco.js')(choco, mek)
        ownerNumber = ['6283894905341@s.whatsapp.net','6288225066473@s.whatsapp.net','62882250664733@s.whatsapp.net']
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

// run in main file
starts()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors