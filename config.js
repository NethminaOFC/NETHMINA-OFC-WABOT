const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/b91f52e7d0004ec84845a.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓* 

*Hᴇʟʟᴏ....* @name👋
*I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*

@gname @members Number of Members

*⏰ Now time is* @time
*📅 Date :* @date

*🟢 I am online still* @uptime
*🔄 Response Delay :* @ping Ms
*💻 Host :* @host
*🪢 Version :* @version

*☫ Work Mode :* @mode
*☫ Work Type :* @worktype

┌───────────────────────

`CONTACT NO` - https://wa.me/+94776369728?text=Hi

`GROUP LINK` - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8

 🔥  Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs ° 🔥
┌───────────────────────
├ 🍓 *Name :-*  ```BHASHITHA NETHMINA``` 
├ 🍓 *Nick Name :-*  ```NETHMINA OFC```  
├ 🍓 *Age :-*  ```17  YEARS OLD```
├ 🍓 *Live in :-* ```GALLE```
├ 🍓 *Contact :-* 94776369728
└───────────────────────

*🗓 Type [.menu] for my command list.*

*_🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘_*


> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
> ˡᶦᵏᵉ        ᶜᵒᵐᵐᵉⁿᵗ       ˢᵃᵛᵉ      ˢʰᵃʳᵉ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
