const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/b91f52e7d0004ec84845a.jpg' },
    { key: 'ALIVE_MSG', value: '*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*\n\n*Hᴇʟʟᴏ.... 👋* *I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*\n\n┌───────────────────────\n\n`CONTACT NO` - https://wa.me/+94776369728?text=Hi\n\n`GROUP LINK` - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8\n\n*🔥  Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs ° 🔥*\n\n┌───────────────────────\n├ 🍓 *Name :-*  ```BHASHITHA NETHMINA```\n├ 🍓 *Nick Name :-*  ```NETHMINA OFC```\n├ 🍓 *Age :-*  ```17  YEARS OLD```\n├ 🍓 *Live in :-* ```GALLE```\n├ 🍓 *Contact :-* 94776369728\n└───────────────────────\n\n*🗓 Type [.menu] for my command list.*\n\n*_🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘_*\n\n> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲\n> ˡᶦᵏᵉ        ᶜᵒᵐᵐᵉⁿᵗ       ˢᵃᵛᵉ      ˢʰᵃʳᵉ' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
