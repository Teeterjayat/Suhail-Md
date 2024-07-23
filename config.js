const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349030547659";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 22
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWZJUHdGNUszdklKS0ZIUFgwOGRvVW96dDVMYXkrYjh2UnhzRGhLOUsrST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMwNTQ3NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNDIxN0I1NTU3OEQyOUNBNDM1RkMyQUM1QzRCQkE0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2ODg3MTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMwNTQ3NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMzhDQUYyQ0ZGNjk4MjZGN0MzRkUzNTk0NzE3Q0QxNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2ODg3MTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmlFV3hNM3hUX3FPMDZxM3ByUzJKUVwiLFxuICBcInBob25lSWRcIjogXCI4OWUwYjAwNC1hZDMzLTQ0MWMtOWE0Ny1kYmEzY2E4Mzc2NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICA0MSxcbiAgICAgIDE5MCxcbiAgICAgIDc2LFxuICAgICAgNzEsXG4gICAgICAxMDAsXG4gICAgICAzMyxcbiAgICAgIDEzOSxcbiAgICAgIDIzLFxuICAgICAgMzEsXG4gICAgICAxOTgsXG4gICAgICAxMzMsXG4gICAgICAxNDIsXG4gICAgICA1MixcbiAgICAgIDM0LFxuICAgICAgNDcsXG4gICAgICAyMDQsXG4gICAgICAyMzksXG4gICAgICAxMzYsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICA4NCxcbiAgICAgIDkzLFxuICAgICAgMTk0LFxuICAgICAgMjQ1LFxuICAgICAgMTY1LFxuICAgICAgMTc1LFxuICAgICAgMTc1LFxuICAgICAgNSxcbiAgICAgIDE1OSxcbiAgICAgIDIwNCxcbiAgICAgIDksXG4gICAgICAyMjYsXG4gICAgICAyMTksXG4gICAgICA3NixcbiAgICAgIDIwMyxcbiAgICAgIDM4LFxuICAgICAgODAsXG4gICAgICAyNTEsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFkxNUFINlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzA1NDc2NTk6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDQ3OTYyMDc5MjY1OjMxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk63wnZO+8J2TvfCdk6zwnZOx8J2TrfCdk7TwnZOy8J2Tt/Cdk7Dwn5GR8J+RkfCfkZFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM2VyYTRHRVA3RSs3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImE3a1NhdHJlQi9KODdOSDVBN0VBWlNGK2hYSFY1NnplT1FyT1dQMGdJaTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazVUNnBzbThvVE9NbGs2eW4wTDJMMnYydW5aS1Q0bmNLWEdBM2NhYWtDZnlOSTFuOUw4THQ4OTB2Y2hZdGhlM09nalI1NlhrWGxJcTN0WjRMcDRXQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVXMxdEtXSlExeXhDNFo0UzU1bVNnaU84UWc1TnBiMTBiM1pSRGl2U2czSlNHUFpTUU1LWUZSLzZiVXFpOG1iSjNqS3JuZHJUUkkvZnV0dm9YaWFsZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMDU0NzY1OTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2ODg3MDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIVXFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhVcS5qc29uIjogIntcImtleURhdGFcIjpcIjZDaG16U1Y1djNoRHByMUcwVkI1OURWZk55S3Eyb2VQVkI5NjUxUEVCYWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwNzgzMTE0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjg4NzEwNzIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "dutchdking-MD",
  ownername:process.env.OWNER_NAME|| "dutchdking",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
