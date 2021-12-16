const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '!';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;

    if (msg.content.startsWith(`${prefix}nitro`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}generate_nitro`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

        }, 2000);

    }

});

client.on('ready', async () => {
    console.log('free Discord nitro activity')

    let statuses = [
        `serg krytoj`,
        `ok`,
        `${client.users.cache.size} nitro`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "generate"
        })
    }, 4000)
})

client.login('токен вашего бота')
