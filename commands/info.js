module.exports = {
    name: 'info',
    description: "this is a BOT DEV INFO command",
    execute(message, args, Discord, client, botVersion, upDate){
        const sus0 = 'Make sure to check our website to know when the bot is down!'
        const sus1 = 'Make sure to check our website to know when the bot is under maintenence!'
        const sus2 = 'SYSbot has a localhost website!'
        const sus3 = 'R.I.P. Chawi. You will be missed.'
        const sus4 = 'Cheesecake!'  
        const sus5 = 'Where is my ban hammer?'
        const sus6 = 'My new website is cool!'
        var stus = [sus1, sus0, sus2, sus3, sus4, sus5, sus6]
        var status = stus[Math.floor(Math.random()*stus.length)];
        const chedEmbed = new Discord.MessageEmbed()
            .setColor('#AE7BDD')
            .setTitle('Dev Info')
            .setURL('https://ckstudios2018.github.io/syslbot/')
            .setAuthor('The CKS Dev Team & V1RU5', 'https://raw.githubusercontent.com/CKStudios2018/friendly-garbage/main/CKS%20Logo.png', 'https://ckstudios2018.github.io/syslbot/')
            .setDescription('More info about the Devs of SYSbot')
            .addFields(
                {name: 'SYSlang developers', value: 'The CKS Dev Team'},
                {name: 'SYSbot Developers', value: "Developed by the CKS Dev Team in SYSlang using V1RU5's SYSl-JS translator"},
                {name: 'Version', value: "SYSbot version " + botVersion +"; last updated "+ upDate + " CET"},
                {name: 'Website Updated!', value: 'SYSbot has has a [new website](https://ckstudios2018.github.io/syslbot/)!'},
                {name: 'Notice', value: 'If you paid for this bot, ask for a refund immediately. You can get this bot freely on [top.gg](https://top.gg/bot/765901892114579476)'}
                )
            .setFooter(status)

        message.channel.send(chedEmbed)
    }
}
