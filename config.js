const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xS8mmBjZ#xkX29zoAk_EE49rFUfFWdndYWXgPyJmubvtFksV0xSo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/b91f52e7d0004ec84845a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*\n\n*Hᴇʟʟᴏ.... ${pushname}👋*\n\n *I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*\n\n┌───────────────────────\n\n`CONTACT NO` - https://wa.me/+94776369728?text=Hi\n\n`GROUP LINK` - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8\n\n*🔥  Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs ° 🔥*\n\n┌───────────────────────\n├ 🍓 *Name :-*  ```BHASHITHA NETHMINA```\n├ 🍓 *Nick Name :-*  ```NETHMINA OFC```\n├ 🍓 *Age :-*  ```17  YEARS OLD```\n├ 🍓 *Live in :-* ```GALLE```\n├ 🍓 *Contact :-* 94776369728\n└───────────────────────\n\n*🗓 Type [.menu] for my command list.*\n\n*_🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘_*\n\n> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲\n> ˡᶦᵏᵉ        ᶜᵒᵐᵐᵉⁿᵗ       ˢᵃᵛᵉ      ˢʰᵃʳᵉ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
