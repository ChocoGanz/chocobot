const { WAConnection: _WAConnection, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange,MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { color, bgcolor } = require('./lib/color.js')
const fs = require("fs")
const figlet = require("figlet")
const choco = new WAConnection

require('./choco.js')
nocache('./choco.js', module => console.log(`${module} is now updated!`))

async function starts() {
    choco.logger.level = 'warn'
    choco.version = [2, 2142, 12]
    choco.browserDescription = [ 'CHOCO', 'EDGE', '3.0' ]
    choco.autoReconnect = ReconnectMode.onConnectionLost
    console.log(color(figlet.textSync('Choco Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: false
	}), 'blue'))
    choco.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan this qr code!'))
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
        ownerNumber = ['6283894905341@s.whatsapp.net','6288225066473@s.whatsapp.net']
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