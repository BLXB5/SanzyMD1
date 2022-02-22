const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
zeroyt7: 'Blom jadi banh',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'blom jadi',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'owner - BLZXB5'
global.owner = ['6283117436733']
global.packname = 'DVT'
global.author = 'Syah DVT'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: '𝑮𝒓𝒐𝒖𝒑 𝑨𝒅𝒎𝒊𝒏 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔!',
botAdmin: '𝑩𝒐𝒕 𝑺𝒉𝒐𝒖𝒍𝒅 𝑩𝒆 𝑨𝒏 𝑨𝒅𝒎𝒊𝒏 𝑭𝒊𝒓𝒔𝒕!',
owner: '𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔!',
group: '𝑭𝒆𝒂𝒕𝒖𝒓𝒆 𝑼𝒔𝒆𝒅 𝑭𝒐𝒓 𝑮𝒓𝒐𝒖𝒑 𝑶𝒏𝒍𝒚!',
private: '𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔 𝑼𝒔𝒆𝒅 𝑶𝒏𝒍𝒚 𝑭𝒐𝒓 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕!',
bot: '𝑩𝒐𝒕 𝑵𝒖𝒎𝒃𝒆𝒓 𝑺𝒑𝒆𝒄𝒊𝒂𝒍 𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔!',
wait: '𝑳𝒐𝒂𝒅𝒊𝒏𝒈...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
