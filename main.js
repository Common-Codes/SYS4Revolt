import fetch from 'node-fetch';

import { Client } from "revolt.js";

import fs from 'fs';

const prefix = '!';
/*
To note: This bot is coded in SYSlang originally, meaning I had no JS to work with; Coded from scratch by an idiot.

Parsed into Revolt by TallerThanShort with permission from V1RU5 and other members of the og bot dev team.
*/
const botVersion = 'v07.15.02 (Alpha)'
const upDate = '04/02/2022 at 17:26 pm'




Client.on("ready", async () => {
    // Below is how I imagine presence is set, doesn't work tho...
    //await Client.user.setPresence({ activity: { name: "My AI Interface", type: "STREAMING", url: "https://www.twitch.tv/syslbot" }, status: 'idle'});
    console.log('SYS4Revolt is ready!');
});

Client.on('message', message =>{
    //if (!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    //let channel = message.channel;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        Client.commands.get('ping').execute(message, args, Discord);
    } else if(command === 'help'){
        Client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'info'){
        Client.commands.get('info').execute(message, args, Discord, Client, botVersion, upDate);
    } else if(command === 'p'){
        message.channel.send('parcel');
    } else if(command === 'lol'){
        Client.commands.get('lols').execute(message, args);
    } else if(command === 'clear'){
        Client.commands.get('clear').execute(message, args);
    } else if(command === 'ched'){
        Client.commands.get('ched').execute(message, args, Discord);
    } else if(command === 'warn'){
        Client.commands.get('warn').execute(message, args);
    } else if(command === 'avatar'){
        message.channel.send(message.author.avatarURL())
    } else if(command === 'explain'){
        Client.commands.get('explain').execute(message, args, Client);
    } else if(command === 'ban'){
        Client.commands.get('ban').execute(message, args);
    } else if(command === 'kick'){
        Client.commands.get('kick').execute(message, args);
    }
});

Client.loginBot(process.env.token);
