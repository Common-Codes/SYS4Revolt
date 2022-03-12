import fetch from 'node-fetch';

import { Client } from "revolt.js";
const client = new Client;

import fs from 'fs';

const prefix = '!';
/*
To note: This bot is coded in SYSlang originally, meaning I had no JS to work with; Coded from scratch by an idiot.

Parsed into Revolt by TallerThanShort with permission from V1RU5 and other members of the og bot dev team.
*/
const botVersion = 'v7.4.2 (Alpha)'
const upDate = '12/03/2022 at 17:48 pm'


/* This is apparently how we set bot statuses, but didn't work for me
client.req("PATCH", `/users/@me`, {
	status: { presence: "Busy" }, //  you can also use "Idle", "Busy" or "Invisible" (the latter will make your bot appear offline though)
});*/

client.on("ready", async () => {
    console.log('SYS4Revolt is ready!');
});

// I have absolutely no clue how to make commands 'n shit
client.on('message', message =>{
    if (typeof message.content !== "string") return;
    if (!message.server) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(message.content === '!ping'){
        console.log('message.content');
        message.channel?.sendMessage("Pong!");
    } /*else if(command === 'help'){
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
    }*/
});

client.loginBot(process.env.token);
