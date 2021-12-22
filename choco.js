/*
this script is free for you guys, don't sell it, thank you
sorry if my script is not good
because I'm just learning
- Choco -
*/

const { WAConnection: _WAConnection, WAMessage, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, MessageType, Presence, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
//const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const ms = require('parse-ms')
const speed = require('performance-now')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const Crypto = require('crypto')
const googleS = require('google-it')
const { fromBuffer } = require('file-type')
const { exec } = require('child_process')
const FormData = require('form-data')
const xa = require('xfarr-api')

const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')

/*
Roboguru : +62 815-7815-0000
Whatsapp : +0
*/

const imgFake = fs.readFileSync('./media/fake.jpg')
const imgFake2 = fs.readFileSync('./media/fake2.jpg')
const imgFake3 = fs.readFileSync('./media/fake3.jpg')
const imgFake4 = fs.readFileSync('./media/fake4.jpg')
const imgFake5 = fs.readFileSync('./media/fake5.jpg')
const imgFake7 = fs.readFileSync('./media/fake7.jpg')
const imgFake8 = fs.readFileSync('./media/fake8.jpg')
const imgFake9 = fs.readFileSync('./media/fake9.jpg')

const fakeThumb = fs.readFileSync('./media/chothmb.jpg')
const fakeThumb2 = fs.readFileSync('./media/chothmb2.jpg')
const fakeThumb3 = fs.readFileSync('./media/chothmb3.jpg')

const gifFake = fs.readFileSync('./media/gif.mp4')

const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))

const namaBot = '𝘾𝙝𝙤𝙘𝙤 𝘽𝙤𝙩'
const nomorBot = '6288225066473'
const namaOwn = '𝘾𝙝𝙤𝙘𝙤'
const nomorOwn = '6288225066473'

totalHit = []

autoRead = true
autoOnline = true
limitawal = 10
public = false
multi = true
nopref = false
prefa = '/'
fake = '𝘾𝙃𝙊𝘾𝙊 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋'
cr = '@ᴄʜᴏᴄᴏɢᴇᴍᴢ'
setmenu = 'gif'

const XcodersApi = "7CLo5fYZvu"
const DapuhyApi = "chozkey"
const DehanApi = "TEMPEL"
const LeysApi = "dappakntlll"

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var days = Math.floor(seconds / (60 * 60 * 60));
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(days)}Hari ${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}

function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
 
function jsonformat(string) {
      return JSON.stringify(string, null, 2)
}

function randomNomor(angka){
      return Math.floor(Math.random() * angka) + 1
}
 
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

module.exports = choco = async (choco, mek) => {
	try {
		if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		global.prefix
		m = simple.smsg(choco, mek)
		const onlybot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage, listMessage } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const salam = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const cmd = (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        const tempBut = (type === 'templateButtonReplyMessage' && mek.message.templateButtonReplyMessage.selectedDisplayText) ? mek.message.templateButtonReplyMessage.selectedDisplayText : ''
        const buttonz = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        const body = (type === 'templateButtonReplyMessage' && mek.message.templateButtonReplyMessage.selectedDisplayText) ? mek.message.templateButtonReplyMessage.selectedDisplayText : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		totalHit.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const botNumber = choco.user.jid
		const isGroup = from.endsWith('@g.us')
		const isPrivate = from.endsWith('@s.whatsapp.net')
		const isStatus = from.endsWith('status@broadcast')
		const groupChat = choco.chats.array.filter(v => v.jid.endsWith('g.us'))
        const privatChat = choco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const sender = mek.key.fromMe ? choco.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? choco.user.jid : choco.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? choco.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await choco.chats.all()
		const groupMetadata = isGroup ? await choco.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isBotAdmins = groupAdmins.includes(botNumber) || false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
        
        mess = {
			wait: 'Loading...',
			success: 'Success',
			limitend: 'Maaf limit kamu hari ini telah habis\n\n*Limit di reset setiap jam 00:00 wib*',
			wrongQ: 'Masukkan query!',
			wrongL: 'Masukkan link yang ingin di download!',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Maaf fitur ini sedang error!\nError : '
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		
		var ase = new Date();
        var jamss = ase.getHours();
        switch(jamss){
                case 0: jamss = "Selamat Tengah Malam"; break;
                case 1: jamss = "Selamat Malam"; break;
                case 2: jamss = "Selamat Malam"; break;
                case 3: jamss = "Selamat Malam"; break;
                case 4: jamss = "Selamat Malam"; break;
                case 5: jamss = "Selamat Pagi"; break;
                case 6: jamss = "Selamat Pagi"; break;
                case 7: jamss = "Selamat Pagi"; break;
                case 8: jamss = "Selamat Pagi"; break;
                case 9: jamss = "Selamat Pagi"; break;
                case 10: jamss = "Selamat Pagi"; break;
                case 11: jamss = "Selamat Siang"; break;
                case 12: jamss = "Saatnya Zuhur"; break;
                case 13: jamss = "Selamat Siang"; break;
                case 14: jamss = "Selamat Siang"; break;
                case 15: jamss = "Saatnya Ashar"; break;
                case 16: jamss = "Selamat Sore"; break;
                case 17: jamss = "Selamat Sore"; break;
                case 18: jamss = "Saatnya Maghrib"; break;
                case 19: jamss = "Saatnya Isha"; break;
                case 20: jamss = "Selamat Malam"; break;
                case 21: jamss = "Selamat Malam"; break;
                case 22: jamss = "Selamat Malam"; break;
                case 23: jamss = "Selamat Malam"; break;
            }
            var tampilUcapan = "" + jamss;
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
            var tgl = new Date();
            detik = tgl.getSeconds();
            menit = tgl.getMinutes();
            jam = tgl.getHours();
	        var ampm = jam >= 12 ? 'PM' : 'AM';
	        var day = tgl.getDate()
	        bulan = tgl.getMonth()
	        var thisDay = tgl.getDay(),
	        thisDay = myDays[thisDay];
	        var yy = tgl.getYear()
	        var year = (yy < 1000) ? yy + 1900 : yy;
	        const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
		
	        const limitAdd = (sender) => {
               let position = false
               Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
               }
           }
           
           const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return choco.sendMessage(from,`Limit anda sudah habis\n\n*limit akan di reset setiap hari pukul 00:00 wib*`, text, { quoted: mek})
                            choco.sendMessage(from, `*「 LIMIT COUNT 」*\n\n• Sisa limit anda : ${limitCounts}\n\n*Limit akan di reset setiap hari pukul 00:00 wib*`, text, { quoted: mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        for (let i of _limit) {
                        	 if (i.id === sender) {
                         	let limitCounts = limitawal - i.limit
                             if (limitCounts <= 0 ) return choco.sendMessage(from, `*「 LIMIT COUNT 」*\n\n• Sisa limit anda : ${limitCounts}\n\n*Limit akan di reset setiap hari pukul 00:00 wib*`, text, { quoted : mek})
                        }}
                    }
		     }
				
             const isLimit = (sender) =>{ 
		     let position = false
             for (let i of _limit) {
             if (i.id === sender) {
         	let limits = i.limit
             if (limits >= limitawal ) {
              	  position = true
                    choco.sendMessage(from, `*Maaf ${pushname}, limit hari ini habis*\n\n*limit di reset setiap jam 00:00 wib*`, text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
                  }
              }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
                }
          }
          
          const flok = { key: { participant: "0@s.whatsapp.net"}, message: { liveLocationMessage: { caption: fake, thumbnail: imgFake }}}
          const fstick = {
             "key": {
	         "participant": `0@s.whatsapp.net`,
             "remoteJid": "status@broadcast",
             "fromMe": false
             },
                 "message": {
                 "stickerMessage": {
                      "isAnimated": false
                 }
          },
              "status": "PENDING"
          }
          const fvimg = {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": "©BotWhatsappBeta",
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": imgFake2,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
                            "viewOnce": true
                        }
                    }, "status": "DELIVERY_ACK"
                }
          const fvvid = {
	        key: { 
               fromMe: false,
	           participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
                },
	          message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': imgFake,
                 "viewOnce": true
                        }
                       }, "status": "SERVER_ACK"
	                  }
	         const imgP1 = {
					"url": "https://mmg.whatsapp.net/d/f/AkHhvVc4pK8VDyrvl8gsH9ujzMmgYfgMnNhWyiviOMhk.enc",
					"mimetype": "image/jpeg",
					"fileSha256": "ulfdNidYxaiOJjzx6U00EciPVSbVBfdGhVoyDp97LI4=",
					"fileLength": "37713",
					"height": 722,
					"width": 1280,
					"mediaKey": "2xt3mMKTs8kCGduSRXAn4QMuko5MQIPWU57wtFJbLTM=",
					"fileEncSha256": "OaQj2yUPR3HoEZ13shdGYUpYC4zs0UG9JGNlOP75qDA=",
					"mediaKeyTimestamp": "1633756448",
					"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIADAAMAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AONiJtNJh6KUhjBJxuU+WCc+gAI+nTmvkvar4YdrNvZq/Rd9FZ/Pvf26ivFwUdknG229nZLXRX/yZ/L9+1lq7+Lf2nvirr0jGaDTNWns1K4bzRpEFtpsEcYThhvUwoBklh1zljzxabcnZynU3vpGO1lJaaRaS3aXzTmo7NNJvkgrLu+VNxd31k7fJ6XP6LP+CevxY8Za94d03w74z+E2qeAbeLR9LuPD+rvqunarp+s2hhVIVmjsts2l3zRBZfsk6MNpILggrXwGKo4Khi5VKOL9vOVRqSlCUHSm5WerXvxatFS0belktT9dyTMMdisJCli8tqYSEKEfY1HUhVhVjyO14xalB2u3GSsl1vZL0/8Aau0j4SaxrdvYftBeP9ZsNK8V2N/4V8C/DzTNb1DR9HudSntrhptZ1OPR3t7zUJ44n3ST3850ywgIW4XEqADxuYyjiY4DDVa8cFTjUxNSFJeyoJSlLnqTbSUnyyaUve9y8bq9tZ5bltSrg/7XxsMPHGznSwOEdScZYibXJJRhT96SV4p3fs1zRva+v4Y/s6pJ4I/aZ+Dumykrc6b41GjyRNkTL/bejapoc6SDHUXMs8bggnzg4Y7QMfdUK6rUqGJTi/bRoy02XtFB3VumrW7227/lWKw8sJi6+FnfmwtatBrRS9yU4K6t8Xu2d/xbP6DJhvZ9ygEnPAzg9cE44PPJJ6Hp1x6KSsuvb9Dgk6jcvdacttVez3vZ76K/52R5x48uU0fwvf3bnatvp875B25KxErlgRgfLzjnr0OM8kd5Nb2dm9d7697/APBN+Zycmlp29X3tfTta5/J/qWtxa78RvGd9OwmjvNc1K980tndD9smvDJnPIy0WGJwSwxgnglBxgkr/AAy1WnvaK3fXy+Zjf31dtLdX1aSu+17W2emnzP6Pv2X/AINfEvwTJpvxc1vxvrsujPo8NjaeFmv5rrRNWtZfEVnqOja1LZyiO10q/wBP0Jbbw/BFYQN9otoprm6u5Z7mcSfm+PzChUw0MFSyujSrYetOpPMeZ+3rK/8ADeyUXLmdpOa+FwhBRu/2jJ8pr0q316tmuKrUauGVOnl7/wB1pwk01Vs9PaRiopckae8+aU3J2/VLWfgz4J+InizSPFPi3w5pOvaho1zHPoz6rZx3h0fUo4L+1F9p5mV1tLl7LVLyzkliCSS288sTsUbbXHKpib1sPTr16eHxbj9Yw8JyVKtOPwzqRTtJw2Tauo8yuk2e3JYagqFWWEw9TFYFyng8XOlCVehCS95Uptc0YyertKzdnZ2Vv5nfiRo3/CC/8FU7TwVGCLSy+NOg3tpAFOxbHXNUt/EFn5aDGEii11UUjcqmMHGN619/k6vl2FhdfupRorTVKnWlG3qklfb5bL8c4nTjnuKk1Z1k8RtZXq041W9/55vprZLsfvrc29rK0ioPJYANuwcc8cjOADz0Ax9MCvfk5Wk0tVeyt936u3ayR4dPWG3vXacrrz0su2nrvpY+W/2pdcHhv4LeNtXGPNtNDvzAGON1wYGS3UnsPOKBi3ygHnA5rlp39569Nt30su7127ByyjCb1Xu/d11TW+1tU9T+ROw1/wCxa5qLk8yQXFs5IBySIwx6dzFxnOQc4647KkbRTsnqtP0Xe7t22PNp1vecZNLlg2rq7t0vbdKzSXnZvv8A2tfs863b/Ef9kH4X+I7B/tKaj4O+H+p3Btv300dvbyaPc6xHFGpJkmijtru1kiUGQMXVVZ12H8tzCgqNXGUXB88K1RQ0TfLGpe61s7wbfW3a+/77lGLjisBldSMk/a4WhUlK1lrSu4u2qvJKKSs7baWP0C8KSKtxd3KpOLR1MkS3SiOTzREVZlib50BRFyHVTvB75Jzwc4rEc7gpwSl8dk+bldm9NGvNaW0306cwhKeHUbuM1KPwK65FJXi27xtpoul10P5gP2gorXXf+C0+hwWWJja6r4PvdQEYA2XGj+ALTWP3pGc+XDHZznn5uFPPB+1yHmeEcmrqWJc4u1layjJ733jL5q+5+V8Vyh/asIN6wwlCnUWvNzWU9X/KlOPVJJdFt+1Ny0isx5CsBjP8SgAcHHQ84I/livoT5xO6vB2itElprZX9e9z4r/bU8WeHtC+D/ia38QecyaloGrWtnDCAd17eRR6dBJJJI0cMccAvGkcu24KpaOKRwqnipv34xX2mra/ytd733/HU6H/DqX0i1Zv736Xvbf7z+Qe7uWW5upyeGmlCspHIyRwfTO4Z9sjk5HtVKa/dqy0SvZW+Hrpp+f5Hy85WdV6XjFxvfV3VuX/wK+q21P6Tf+CSv7RGq+Mf2dfEXwP0zVoIvH3ww1pLvw/p96GmGr+D9fvpL6BRCJoJJBpWrNd2bBH8qKNtPSX5JwK/NuNcFiMNifrmHjeOKoSUVdxh9apxjFqT6OUeSSurSfNfbT9m8KMyy/HQwuW5rUqU6WCxcI16lJKVVYCpUdXmpxe7g3Wg7LSEY7tpH7y+DNV8dW2n6jrfiy6jltILZHitl0ttPc3oibz0jWSWSZ0ZxkB2kV3lAhOxMH8+y/EZo1OeK5IRUk0oQUf8VneT5Ek7Xb3a0tyv+gONsLwRThgqPC1TEYipOMvrNarObg6d17JckqdO1Vu/MklZRjdNu7/nZ/Zk0fxf8W/+Cl3xm+LvirTp7aHQtX+LE9l56kt5ela9Z/DTw/aoH+eZINMtJbeGdB5ck+mXSI2YCi/s+S+zeX4P2avzYelUb0+OpB1J6LZpzldb7d0fyVnjqTzvM5VbK2KxNOCe/Jh5rD007a2aoxv0dnr1P2+vQVdR/Dtx9cevTuM+n5CvXatb0/z/AOG+R5ile6/ldtml2ur9NNO23r/NF/wUQ+Pnxb1jxGvw81/XNM0Yx2KXt/4N8Lyif+wU1BT9m0/xBrYQSajq8tttuLm1tXjsLeGW3kVJDMpE4XCt0/bVU7K/KnvK1pS5bfCm2o311i7JWDF4mKaw1Jpua5nLXRNWcWn1W6Vu/c/HKQSKzpJuXDNgHJOcgY5+oyMde3FepHllLmTu1bTTRJvTo7eh83XouMm3dNvZ97XfTa7+7TzPbv2cPjt4v/Zz+L/g/wCKvg24Rb/QtSih1CwuZpYtP1jQ7uRItU0rUjCHb7PcQ4lil8mc2d5b2t6kMslvGjcmZYKlmWEq4Ssnyyi5RlG/NGoruFSN7rmi7LT4o3XVnXkmPxOT5lh8dhmlKnJKpCTap1KU2lOnPR6Netmk0tD+3z9lL9rTwt+1V4S/tiWKw8N3+ngTt4TkuxdXrmEKgu3uVjitJoILnejRW5lkjk+yzzeVbXFk97+D51GpltV4ZXdOyXtWnaXSNnZpKys/Pm2sz+m8mxSzjDLFwjGnK9nR5k5QSupSb0Wkla26VpWs4n5vfGvxtoH7Bfxs8efFDW/D+s+OtF+NXiLTrTTpdI1LSoLrwhptiniPxFd20VtqEySXkV/r+p3sqw2wgt4pJVmublJDGtx+gcB4qeYUFgpu08JRjOE7OUKlJOKteK9yaukk/iWt76P8u49wUcqxlTM9Z0sdOMJwvadKr7zfLzNucJPnm1H4OZaWaPdPB37b37MXxGt7abSfit4a0e4mijdtN8YXL+EL+GaVVJtZD4hSws5po2fY39n3d7Azg+TPKg31+h4nLsTTTlGlKpr/AMu1dWV90veu/TZdT4GjjsNPVTjFfaVRuNu172trvr87H8qXi/xDqnjbxHr/AI98WX323WfEepXerzHJCvNdStI8mCzNFa2wxBZ24ciOBI4g2yNRWWMqRp8uHhZRpxUW2101steujb+VtScDRVWosXWabnzONPpu03Z9FrZdbXvozw7VrYtcmdeI3c7R/tEhTjgkHgHB/LmuelUto0/nppvv82n/AFfTGUYVHGabvGPK101b69Jf8Ed4f0O51nVLPT7WNpria+gTy49vnOXkjAWJWZB5hB+XdJGm7BLoMkb1a8YU7rVuDV38KVtNVrvfZXsnucFHCTqVoxs1apFOP2rN6Wve7as+1n8j9tP2Hfj18Pfgb8UNCvfHesab4G0Ox1rxDo3jWw1a7txcWun32j3MNqI9MsPMu7+K18QWsTH7Jp5GmJMtuZbiOWIWf5xnWTYjG05exoSxdSUE4yitOeFTRTc/dj+7k7XkuZpXUXq/1Xh3P8Fl8rVq0MHBVJwrc8teR0lbkUfekvawcr2927jdppHiH/BQP9rTSP2pfjBG3w50+8tPhz4StW0rwsl3E1reavNI5fUPE2pWrE/YVu3Hl6ZaXGLmCwjWSZILq7ubaP8AQeBuGnkWWzrVVGWNxzUqqgk40YQblCjCSV2+tRxbjKdoq6im/hOOeJlxBmEIYeU1gcFHkoupzKVapLldStKDfurRRpppSUE27OXKvjOyshbIpmm8ycjDEEhI8jDCMduerNyRyMcivvFF6trXWyfdbX00PhfaQuo31btprrf+vuP/2Q=="
			    }

const katalog = (teks) => {
res = choco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 5000, "message": teks, "thumbnail": imgFake, "status": 'INQUIRY', "surface": 'CATALOG', "sellerJid": '0@s.whatsapp.net',  "totalAmount1000": '1000000000', "totalCurrencyCode": 'IDR' }}, {quoted: fvimg})
choco.relayWAMessage(res)
}
const grupinv = (teks) => {
grup = choco.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Choco Bot Whatsapp`, "jpegThumbnail": imgFake2, "caption": teks}}, {quoted: fstick})
choco.relayWAMessage(grup)
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
choco.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await choco.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
choco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await choco.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
choco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await choco.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
choco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/*
mimetype for sending message type document

PDF : "application/pdf"
DOCX : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
XLSX : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
DOC : "application/msword"
EXCEL : "application/msexcel"
*/

///Button PDF
const sendButPdf = async (id, text1, desc1, gam, but = [], options = {}) => {
gam1 = gam
mhan = await choco.prepareMessage(from, gam1, document, { thumbnail: imgFake, mimetype: 'application/pdf', filename: 'Choco Bot Whatsapp', pageCount: 500, fileLength: '37713' })
const buttonMessage = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
choco.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Xlsx
const sendButXlsx = async (id, text1, desc1, gam, but = [], opt = {}) => {
choco.sendMessage(id, {
               contentText: text1,
               footerText: desc1,
               buttons: but,
               "headerType": "DOCUMENT", 
               "documentMessage": { 
               "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
               "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
               "title": "@Chocobot", 
               "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
               "fileLength": 50000000000, 
               "pageCount": 1000, 
               "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
               "fileName": "Choco Bot Whatsapp", 
               "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
               "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
               "mediaKeyTimestamp": "1634472176",
               "jpegThumbnail": gam}}, 
               MessageType.buttonsMessage,
               opt)
               }
///Button Docx
const sendButDocx = async (id, text1, desc1, gam, but = [], opt = {}) => {
choco.sendMessage(id, {
               contentText: text1,
               footerText: desc1,
               buttons: but,
               "headerType": "DOCUMENT", 
               "documentMessage": { 
               "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
               "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
               "title": "@Chocobot", 
               "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
               "fileLength": 50000000000, 
               "pageCount": 1000, 
               "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
               "fileName": "Choco Bot Whatsapp", 
               "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
               "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
               "mediaKeyTimestamp": "1634472176",
               "jpegThumbnail": gam}}, 
               MessageType.buttonsMessage,
               opt)
               }
///Button Doc
const sendButDoc = async (id, text1, desc1, gam, but = [], opt = {}) => {
choco.sendMessage(id, {
               contentText: text1,
               footerText: desc1,
               buttons: but,
               "headerType": "DOCUMENT", 
               "documentMessage": { 
               "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
               "mimetype": "application/msword",
               "title": "@Chocobot", 
               "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
               "fileLength": 50000000000, 
               "pageCount": 1000, 
               "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
               "fileName": "Choco Bot Whatsapp", 
               "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
               "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
               "mediaKeyTimestamp": "1634472176",
               "jpegThumbnail": gam}}, 
               MessageType.buttonsMessage,
               opt)
               }
///Button PPTX
const sendButPptx = async (id, text1, desc1, gam, but = [], opt = {}) => {
choco.sendMessage(id, {
               contentText: text1,
               footerText: desc1,
               buttons: but,
               "headerType": "DOCUMENT", 
               "documentMessage": { 
               "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
               "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
               "title": "@Chocobot", 
               "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
               "fileLength": 50000000000, 
               "pageCount": 1000, 
               "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
               "fileName": "Choco Bot Whatsapp", 
               "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
               "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
               "mediaKeyTimestamp": "1634472176",
               "jpegThumbnail": gam}}, 
               MessageType.buttonsMessage,
               opt)
               }
///Button Zip
const sendButZip = async (id, text1, desc1, gam, but = [], opt = {}) => {
choco.sendMessage(id, {
               contentText: text1,
               footerText: desc1,
               buttons: but,
               "headerType": "DOCUMENT", 
               "documentMessage": { 
               "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
               "mimetype": "application/zip",
               "title": "Choco-Bot", 
               "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
               "fileLength": 50000000000, 
               "pageCount": 1000, 
               "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
               "fileName": "Choco Bot Whatsapp", 
               "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
               "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
               "mediaKeyTimestamp": "1634472176",
               "jpegThumbnail": gam}}, 
               MessageType.buttonsMessage,
               opt)
               }
///Gif
const sendGif = async (id, text, but, opt) => {
	choco.sendMessageFromContent(id, { videoMessage: {
	"url": "https://mmg.whatsapp.net/d/f/Au15fKR7YGRI7RKIQngbXiOIYdhck3fj3EF6o_xBYEFp.enc",
	"mimetype": "video/mp4",
	"fileSha256": "+nIwYvigq83/rCsjMAZu7tvSFI/RWbqusttRrkUU3I8=",
	"fileLength": "500000000000",
	"seconds": 5000,
	"mediaKey": "EZlSsuXXuTLN/b++f2pRwsgK0jnP8epTNg7Bo0rltdc=",
	"caption": text,
	"gifPlayback": true,
	"fileEncSha256": "DRaOOzcrGsbpkCg7xxonDqnVnvUgSUv3buxenO1ctrs=",
	"gifAttribution": "GIPHY"
}}, opt).then(menz => {choco.sendMessage(from, { contentText: `Hai ${pushname}\n${salam}\n\nPlease select button below`, buttons: but, headerType: 1 }, MessageType.buttonsMessage, { quoted: menz, sendEphemeral: true})})
}
///Product
const sendProduct = async (id, text1, desc1) => {
	choco.sendMessageFromContent(id, {
		productMessage: {
			product: {
				productId: "123456789",
				productImage: { "url": "https://mmg.whatsapp.net/d/f/AtXv_6lCycn2XXbP9ZhrkuWAun8Tu5o4oETLhEd4sgu7.enc","mimetype": "image/jpeg","fileSha256": "tUCeLtJd7G5jjj7Gs/kRG5OYqD+9AGnMPNe52600uLI=","fileLength": "31583","height": 1067,"width": 1280,"mediaKey": "kobAdSBDUu+29cbRXJ/del6INP7/qPtXJNal693trR8=","fileEncSha256": "a+0Q3wlUIgGeLZbks4pfF5W4u0tJ65VcsvdV9hoZHHo=","jpegThumbnail": "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" },
				title: text1,
				description: desc1,
				currencyCode: "USD",
				priceAmount1000: "50000000",
				salePriceAmount1000: "5000",
				productImageCount: 5,
				url: "https://github.com/ChocoGanz/chocobot",
				retailerId: "@ChocoBot"
				},
				businessOwnerJid: "0@s.whatsapp.net"
				}}, { quoted: fvimg, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 999, isForwarded: true }})}

        const reply = (teks) => {
			choco.sendMessage(from, teks, text, { quoted: mek, sendEphemeral: 'chat', thumbnail: imgFake2, contextInfo: { mentionedJid: [sender] }})
		}
		const simir = (teks) => {
			choco.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks, option) => {
			choco.sendMessage(hehe, teks, text, option)
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? choco.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : choco.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        choco.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        choco.sendMessage(from, hasil, type, options).catch(e => {
        choco.sendMessage(from, { url : link }, type, options).catch(e => {
        reply
        console.log(e)
        })
        })
        })
        })
        }
        const sendMessFile = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return choco.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: mek})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return choco.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
            } else if(mime.split("/")[0] === "video"){
                return choco.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
            } else if(mime.split("/")[0] === "audio"){
                return choco.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: mek })
            } else {
                return choco.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					choco.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text.trim(), contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
			const sendMediaURL2 = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                    download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    choco.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
           const sendAudio = async(from, url) => {
           	await choco.sendMessage(from, { url: url }, // can send mp3, mp4, & ogg
               MessageType.audio, 
               { mimetype: Mimetype.mp4Audio } // some metadata (can't have caption in audio)
                )
           }
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await choco.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = imgFake2
				choco.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
            var objectString = JSON.stringify(objectPromise, null, 2)
            var parse = util.format(objectString)
            if (objectString == undefined) {
            parse = util.format(objectPromise)
            }
            return reply(parse)
            }
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
              } 
              
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 == "00:00:00"){
        limitawal = 10
        console.log("[INFO]  LIMIT TELAH DI RESET")
        }
        
		if (onlybot === true) return
		if (!public) {
		if (!isOwner && !mek.key.fromMe) return
		}
		
        if (budy.startsWith('$')){
        if (!mek.key.fromMe && !isOwner) return
        qur = budy.slice(2)
        exec(qur, (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) {
        reply(stdout)
        }
        })
        }
        if (budy.startsWith('=>')){
        if (!isOwner && !mek.key.fromMe) return
        var konsol = budy.slice(3)
        Return = (sul) => {
        var sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined){
        bang = util.format(sul)
        }
        return reply(bang)
        }
        try {
        reply(util.format(eval(`;(async () => { ${konsol} })()`)))
        console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
        } catch(e){
        reply(String(e))
        }
        }
        
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		/*
		available = 'available', // "online"
        composing = 'composing', // "typing..."
        recording = 'recording', // "recording..."
        paused = 'paused' // stopped typing, back to "online"
        */
        
        const sendRecord = async () => {
        	await choco.updatePresence(from, Presence.recording)
            await sleep(8000)
            await choco.updatePresence(from, Presence.paused)
            await sleep(1000)
            await choco.updatePresence(from, Presence.available)
            }
        
        if (autoOnline) { await choco.updatePresence(from, Presence.available) }
        if (autoRead) { await choco.chatRead(from) }
		
		if (!isGroup && isCmd) choco.updatePresence(from, Presence.composing), console.log('[\x1b[1;32mEXEC\x1b[1;37m]', color(time, 'green'), color(body, 'orange'), color('from', 'cyan'), color(sender.split('@')[0], 'red'), color('args :', 'brown'), color(args.length, 'blue'))
    	if (!isGroup && !isCmd) sendRecord(), console.log('[\x1b[1;31mTEXT\x1b[1;37m]', time, color(budy), color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    	if (isCmd && isGroup) choco.updatePresence(from, Presence.composing), console.log('[\x1b[1;32mEXEC\x1b[1;37m]', time, color(body, 'orange'), 'from', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'green'), 'args :', color(args.length, 'blue'))
        if (!isCmd && isGroup) sendRecord(), console.log('[\x1b[1;31mTEXT\x1b[1;37m]', time, color(budy), color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		
		switch (command) {
			
			/*
            Banyak fitur yang pakai rest api dapuhy
            Jika mau apikey nya silahkan regrist di  " api.dapuhy.ga "
            */
			
			case 'menu':
			stst = await choco.getStatus(`${sender.split('@')[0]}@c.us`)
			stst = stst.status == 401 ? '' : stst.status
			owB = "6283894905341@s.whatsapp.net"
			menu = 
`Hai ${pushname}
${tampilUcapan}

✘⃝🕊️ • Jam : ${time2} WIB
✘⃝🕊️ • Hari : ${thisDay}
✘⃝🕊️ • Tanggal : ${ini_tanggal}

_*USER INFO*_
✘⃝🕊️ •  Nama : ${pushname}
✘⃝🕊️ •  Nomor : ${senderNumber}
✘⃝🕊️ •  Bio : ${stst}

_*BOT INFO*_
✘⃝🕊️ •  Owner : @${owB.split("@")[0]}
✘⃝🕊️ •  Prefix : Multi Prefix
✘⃝🕊️ •  Total Chat : ${totalchat.length}
✘⃝🕊️ •  Total Hit : ${totalHit.length}

_*MY INFO*_
✘⃝🕊️ •  WhatsApp : https://cutt.ly/wachoco
✘⃝🕊️ •  Github : https://github.com/ChocoGanz
✘⃝🕊️ •  Youtube : https://cutt.ly/AYoQIJI
✘⃝🕊️ •  Gmail : chocoganz250@gmail.com
`
            mhan = await choco.prepareMessage(from, imgFake3, document, { mimetype: "application/msexcel", filename: "Choco Bot Whatsapp", thumbnail: imgFake8, pageCount: 200 })
            buttons = [
                                 {buttonId: '.allmenu', buttonText: {displayText: 'MENU'}, type: 1},
                                 {buttonId: '.sc', buttonText: {displayText: 'SCRIPT'}, type: 1}
                              ]
            buttonMessage = { contentText: menu, footerText: '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', buttons: buttons, documentMessage: mhan.message.documentMessage, headerType: "DOCUMENT" }
            if (setmenu === 'docexcel') {
            choco.sendMessage(from, buttonMessage, MessageType.buttonsMessage, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'docpdf') {
            sendButPdf(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'docdocx') {
            sendButDocx(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'docxlsx') {
            sendButXlsx(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'docdoc') {
            sendButDoc(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'docpptx') {
            sendButPptx(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'doczip') {
            sendButZip(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'location') {
            sendButLocation(from, menu, '║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', imgFake8, buttons, { quoted: fvimg, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            } else if (setmenu === 'gif') {
            sendGif(from, menu+'\n\n║▌│█║▌│ █║▌│█│║▌\n\n𝑴𝒂𝒅𝒆 𝑾𝒊𝒕𝒉 𝑪𝒉𝒐𝒄𝒐', buttons, { quoted: fvvid, thumbnail: fakeThumb, contextInfo: { mentionedJid: [sender, owB] }, sendEphemeral: true })
            }
			break
            
            // Settings
            case 'setmenu':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            if (args.length < 1) return reply("Silahkan pilih menu nya\n\n• excel\n• pdf\n• xlsx\n• docx\n• doc\n• pptx\n• zip\n• location")
            if (q === "excel") {
            	setmenu = 'docexcel'
            } else if (q === 'pdf') {
            	setmenu = 'docpdf'
            } else if (q === 'xlsx') {
            	setmenu = 'docxlsx'
            } else if (q === 'docx') {
            	setmenu = 'docdocx'
            } else if (q === 'doc') {
            	setmenu = 'docdoc'
            } else if (q === 'pptx') {
            	setmenu = 'docpptx'
            } else if (q === 'zip') {
            	setmenu = 'doczip'
            } else if (q === 'location') {
            	setmenu = 'location'
            } else if (q === 'gif') {
            	setmenu = 'gif'
            }
            reply(`Sukses change menu to ${q}`)
            break
            case 'setprefix':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            if (args.length < 1) return sendButMessage(from, `\`\`\`「 PREFIX SETTING 」\`\`\``, `Silahkan pilih salah satu`, [
           {
            buttonId: `setprefix multi`,
            buttonText: {
              displayText: `Multi Prefix`,
            },
            type: 1,
            },
           {
            buttonId: `setprefix nopref`,
            buttonText: {
              displayText: `No Prefix`,
            },
            type: 1,
            }
            ], {quoted: fvimg})
            if (q === 'multi'){
              multi = true
              nopref = false
              reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
            break
			
			case 'public':
			public = true
			reply("Sukses mengaktifkan mode public")
			break
			case 'self':
			public = false
			reply("Sukses mengaktifkan mode self")
			break
			case 'owner':
			case 'creator':
            case 'developer':
		    case 'author':
            ctc = []
            for (let i of ownerNumber) {
            vname = choco.contacts[i] != undefined ? choco.contacts[i].vname || choco.contacts[i].notify : undefined
            ctc.push({ "displayName": `Developer Choco Bot`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Kontak;;;\nFN:${vname ? `${vname}` : `${choco.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` })}
            choco.sendMessage(from, { "displayName": `Creator Choco Bot`, "contacts": ctc }, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 999, isForwarded: true }})
            break
			case 'tes':
			runtime = process.uptime()
			reply(`*Choco Bot Active!*\nRuntime : ${kyun(runtime)}`)
			break
			case 'runtime':
			reply("Choco Bot telah active selama : "+ kyun(process.uptime()))
			break
			case 'speed':
			case 'ping':
			const timestampi = speed();
			const latensyi = speed() - timestampi
			reply(`Speed: ${latensyi.toFixed(4)} Second`)
			break
			case 'source':
			case 'script':
			case 'sc':
			choco.sendMessage(from, "_*SOURCE CHOCO BOT*_\n\n• https://github.com/ChocoGanz/chocobot", extendedText, { contextInfo: { externalAdReply: { title: "Source Choco Bot", previewType: "PHOTO", sourceUrl: "https://github.com/ChocoGanz/chocobot" }}})
			break
			
			case 'getphotoprofil':
			case 'getpp':
			id = ""
			ppUrl = await choco.getProfilePicture (id) // leave empty to get your own
            buff = await getBuffer(ppUrl)
            choco.sendMessage(from, buff, image, {quoted: mek})
            break
			case 'getstatus':
			case 'getbio':
		    id = ""
			status = await choco.getStatus (id) // leave empty to get your own status
            reply(status)
            break
            case 'updatepp':
            case 'uppp':
            jid = from // can be your own too
            img = fs.readFileSync ('./media/fake5.jpg') // can be PNG also
            await choco.updateProfilePicture (jid, img)
            reply("Sukses update pp")
            break
            
            case 'buggc':
            case 'bug':
            let WA_DEFAULT_EPHEMERAL = require("@adiwajshing/baileys")
            await choco.toggleDisappearingMessages(from, 
            WA_DEFAULT_EPHEMERAL // this is 1 week in seconds -- how long you want messages to appear for
            ) 
            // will automatically send as a disappearing message
            await choco.sendMessage(from, 'Hello poof!', MessageType.text)
            // turn off disappearing messages
            await choco.toggleDisappearingMessages(from, 0)
            break
            
            case 'join':
            if (!isOwner) return reply(mess.only.ownerB)
            await choco.acceptInvite(body.slice(5)).then((response) => 
            reply("joined to: " + response.gid))
            break
            case 'linkgrup':
            case 'linkgc':
            if (!isGroup) return reply(mess.only.group)
            if (!isBotAdmins) return reply(mess.only.Badmin)
            choco.groupInviteCode(from)
            .then((res) => reply('https://chat.whatsapp.com/' + res))
            break
            case 'resetlink':
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (!isBotAdmins) return reply(mess.only.Badmin)
            const response = await choco.revokeInvite (from)
            console.log("new group code: " + response.code)
            break
            
            case 'searchmessage':
            case 'searchmsg':
            response = await choco.searchMessages (args[0], null, 25, 1) // search in all chats
            reply (`got ${response.messages.length} messages in search`)
            if (args.length > 1) {
            response2 = await choco.searchMessages (args[0], args[1]+'@c.us', 25, 1) // search in given chat
            reply (`got ${response2.messages.length} messages in search`)
            }
            break
			case 'towajid':
			case 'tojid':
		    id = senderNumber ? senderNumber : args[0]
            exists = await choco.isOnWhatsApp (id)
            if (exists) reply (`${exists.jid}`)
			break
			case 'q': 
            if (!m.quoted) return reply('reply pesan!')
            let qse = choco.serializeM(await m.getQuotedObj())
            if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
            await qse.quoted.copyNForward(m.chat, true)
            break
            case 'spam':
            tes = body.slice(5)
            argze = tes.split("|")
            for (let i = 0; i < argze[1]; i++) {
            	choco.sendMessage(from, argze[0], text)
            }
            break
            case 'hidetag':
            mem = []
            for (let no of groupMembers) {
	              mem.push(no.jid)
            }
            mentions(body.slice(8), mem, false)
            break
            
            case 'sendimage':
            reply(mess.wait)
            buff = await getBuffer(q)
            choco.sendMessage(from, buff, image, { quoted: mek })
            break
            case 'sendvideo':
            reply(mess.wait)
            buff = await getBuffer(q)
            choco.sendMessage(from, buff, video, { quoted: mek })
            break
		
		default:
		if (budy.startsWith('>')){
        if (!isOwner && !mek.key.fromMe) return 
        ras = budy.slice(1)
        function _(rem) {
        ren = JSON.stringify(rem,null,2)
        pes = util.format(ren)
        reply(pes)
        }
        try{
        reply(require('util').format(eval(`(async () => { ${ras} })()`)))
        } catch(err) {
        e = String(err)
        reply(e)
        }
        }
		if (budy.startsWith('x')) {
		if (!isOwner && !mek.key.fromMe) return
        try {
        return choco.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'), MessageType.text, {quoted: mek})
        } catch(err) {
        e = String(err)
        reply(e)
        }
        }   
		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("this.isZero is not a function") && !e.includes("jid")) {
	console.log(color(e, 'red'))
	//choco.sendMessage(mek.key.remoteJid, e, MessageType.text)
        }
	}
}

/*       
Thanks To

• Adiwajshing
• Dappa Uhuy
• Xcoders Api
• Dehan Api
• Choco

*/
