const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "Get command list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu= {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `$(config.PREFIX)${commands[i].pattern}\n`;
 }
}

let madeMenu = `*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*

*Hᴇʟʟᴏ.... ${pushname}👋*
*I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*

╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 - ${runtime(process.uptime())}
╰──────────●●►
╭──────────●●►
│ *📜 MAIN COMMANDS*
│   ───────
│► .tempmail2
│► .bingen
│► .dictionary
│► .readmore
│► .device
│► .tempmail
│► .newgroup
│► .delgroup
│► .save
│► .block
│► .unblock
│► .help
│► .id
│► .settings
│► .apply
│► .defaultimg
│► .defaultsudo
│► .news
│► .logo
│► .script
│► .alive
│► .jid
│► .system
│► .restart
│► .join
│► .ping
│► .list
│► .menu
│► .requestpair
╰───────────●●►
╭───────────●●►
│ *⬇️ DOWNLOAD COMMANDS*
│   ───────
│► .downurl
│► .movie
│► .soundcloud
│► .download
│► .threads
│► .twitter
│► .pinterest
│► .sisub
│► .fb2
│► .capcut
│► .gitclone
│► .tiktok
│► .fb
│► .ig
│► .apk
│► .fmmod
│► .gdrive
│► .mediafire
│► .ss
│► .video
│► .song
│► .spotify
│► .img
│► .xvdl
╰───────────●●►
╭───────────●●►
│ *🔱 GROUP COMMANDS*
│   ───────
│► .gdp
│► .automute
│► .autounmute
│► .ban
│► .unban
│► .invite
│► .mute
│► .unmute
│► .promote
│► .demote
│► .kick
│► .hidetag
│► .add
│► .gdesc
│► .gname
│► .left
│► .antispam
│► .del
╰───────────●●►
╭───────────●●►
│ *👨‍💻 OWNER COMMANDS*
│   ───────
│► .removesticker
│► .resetsticker
│► .getsticker
│► .addsticker
│► .addbad
│► .resetbad
│► .getbad
│► .resetvoice
│► .removevoice
│► .getvoice
│► .addvoice
│► .replacereply
│► .removereply
│► .getreply
│► .resetreply
│► .addreply
│► .eval
│► .enc
│► .dec
│► .boom
│► .vv
│► .tovv
│► .dp
│► .sendaudio
│► .sendtag
│► .sendmsg
│► .remove
│► .repostatus
│► .report
│► .quote
│► .alljid
│► .about
│► .name
│► .send
╰───────────●●►
╭───────────●●►
│ *🔗 CONVERT COMMANDS*
│   ───────
│► .mp3tourl
│► .dark
│► .emoji
│► .blur
│► .toaudio
│► .toptt
│► .remini
│► .img2qr
│► .removebg
│► .toqr
│► .surl
│► .tts
│► .wame
│► .img2url
│► .fancy
│► .trt
│► .toimg
│► .pdf
│► .edit
│► .emomix
╰───────────●●►
╭───────────●●►
│ *🤖 AI COMMANDS*
│   ───────
│► .gemini
│► .imagine
│► .dalle
│► .getimg
│► .gpt
╰───────────●●►
╭───────────●●►
│ *🫧 MATH COMMANDS*
│   ───────
│► .mathstep
│► .math
│► .cal
╰───────────●●►
╭───────────●●►
│ *🔍SEARCH COMMANDS*
│   ───────
│► .findtiktok
│► .findapk
│► .sporty
│► .mobilenews
│► .unsplash
│► .ip
│► .cric
│► .find
│► .yts
│► .npm
│► .wabeta
│► .movieinfo
│► .weather
│► .lyrics
│► .cmd
│► .git
╰───────────●●►

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||
`
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/c937db53255955323ea7a.jpg"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
