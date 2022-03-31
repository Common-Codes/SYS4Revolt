import fetch from 'node-fetch';

import { Client } from "revolt.js";
let client = new Client();

import fs from 'fs';

const prefix = '!';
/*
To note: This bot is coded in SYSlang originally, meaning I had no JS to work with; Coded from scratch by an idiot.

Parsed into Discord.js then Revolt.js by TallerThanShort with permission from V1RU5 and other members of the og bot dev team.
*/
const botVersion = 'v7.4.9 (Alpha)'
const upDate = '31/03/2022 at 18:54 pm'


/* This is apparently how we set bot statuses, but didn't work for me
client.req("PATCH", `/users/@me`, {
	status: { presence: "Busy" }, //  you can also use "Idle", "Busy" or "Invisible" (the latter will make your bot appear offline though)
});*/

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.username}!`);
});

// I have absolutely no clue how to make commands 'n shit
client.on("message", async (message) =>{
    if (typeof message.content !== "string") return;
    // this works in reverse? if (message.server) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    // used for debugging - only returns command invocations console.log(message.content);
    let ogTimestamp = ''
    let msgTimestamp = ''

    if(command === 'ping'){
        ogTimestamp = Date.now();
        message.channel?.sendMessage('Pong!').then(msg => {
            msgTimestamp = Date.now()
            console.log(ogTimestamp)
            const ping =  msgTimestamp - ogTimestamp;
            message.channel?.sendMessage(`Pong! ${ping}ms`);
            console.log(`Pong! ${ping}ms`)
        })
    } else if(command === 'help'){
        message.channel?.sendMessage(`Commands: \nPing \nHelp \nInfo \np \navatar`);
    } else if(command === 'info'){
        message.channel?.sendMessage("Bot Version " + botVersion + `\n Last updated: ` + upDate);
    } else if(command === 'p'){
        message.channel?.sendMessage('parcel');
    } else if(command === 'avatar'){
        message.channel?.sendMessage(message.author.username)
    }
});

client.loginBot(process.env.token);
