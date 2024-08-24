const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xS8mmBjZ#xkX29zoAk_EE49rFUfFWdndYWXgPyJmubvtFksV0xSo",
MONGODB: process.env.MONGODB || "enter mongodb here",
};
