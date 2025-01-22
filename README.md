[![Generic badge](https://img.shields.io/badge/version-stable-green.svg)](https://shields.io/)
[![Maintenance](https://img.shields.io/badge/maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
# Discord.js V14 Template Bot

<p align="left">
 <strong>This is a Template of a Discord Bot in JavaScript using the Djs.V14</strong>
</p>

# ATTENTION

<p align="left">
 <strong>For this Bot work, you need to create a `.env` file and put some things.</strong>
</p>

```dotenv
TOKEN=(YOUR TOKEN HERE)
CLIEN_ID=(YOUR CLIENT ID HERE)
```
# FEATURES

* Automatically recognizes new commands.
* Automatically recoginizes new events and handlers.
  
* Uses the new way of Ephemeral

```javascript
// Instead of

await interaction.reply({ content: '...', ephemeral: true });

// The new way is
const { Client, MessageFlags } = require('discord.js');

await interaction.reply({ content: '...', flags: MessageFlags.Ephemeral });

```
<p align="left">
 <strong>
  This bot uses only:
 </strong>
</p>

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)

## Contact

<p align="left">
  <strong>📧 My contact ⤵️</strong>
</p>

<p align="left">
  <a href="mailto:leal.andriuss@gmail.com" title="Gmail">
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-GMAIL" alt="Gmail"/></a>
  <a href="https://www.instagram.com/faylenk/" title="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=LINK-DO-SEU-INSTAGRAM" alt="Instagram"/></a>
</p>

<p align="left">
 <strong>Thanks for using my Template! Have a nice day. 👋</strong>
</p>
