//
// This is the code for The Just-Chat Bot
//
//
// Made By Zyphon_22
//
//
// Open Source
//
//
// Created for Just Chat by Ya Boy 864#0734 <https://discord.gg/bdcCMZxZ>
//
// You can re-use this code for your own discord bot
//
const discord = require('discord.js');
const client = new discord.Client();


client.on('ready', () => {
    console.log('Connected to the bot');
});


// this is all the messages that trigger a response from the bot
client.on('message', msg => {
    if (msg.content == '*hi') {
        msg.reply('Hi how are you!?');
    }

    if (msg.content == '@Just Chat Bot') {
        msg.reply('Hi, what do you need?');
    }

    if (msg.content == '*help') {
        msg.reply('Hi I can do many things');
        msg.reply('I can give roles like Member Server Vote Ping ETC');
        msg.reply('To give me a cmd just put *<text>');
        msg.reply('also if the cmd is bigger then one word just put *text/text');
    }

    if (msg.content == '*meme') {
        msg.reply('What kind of meme do you want?');
        if (msg.content == '*darkhumour') {
            msg.reply('The neighbours children challenger me to a water fight, im checking discord while the kettle boils :)');
        if (msg.content == '*deep') {
            msg.reply(' Proof cats do not always land on their feet (picture of Mufasa)');
        }
        }
    }
    if (msg.content == '*Alfreds gay') {
        msg.reply('I smell cap...just kidding');
    }

    if (msg.content == '*invite/link') {
        msg.reply('https://discord.gg/bdcCMZxZ');
    }

    if (msg.content == '*pp') {
        msg.reply('Alfred loves pp');
    }

    if (msg.content == 'Who is Alfred') {
        msg.reply('Alfred is a bellend');
    }



    if (msg.content == '*weirdfact') {
        msg.reply('Do you know ducks have a 12 inch slong');
    }

    if (msg.content == '*caps lock') {
        msg.reply('CAPS LOCK');
    }

    if (msg.content == '*ooga booga') {
        msg.reply('@Ya Boy 864 : YOO ITS ASHTON');
    }

    if (msg.content == '*papi chulo') {
        msg.reply('Sweet as a chulo she call me papi chulo');
    }

    if (msg.content == '*lifetips') {
        msg.reply('Here are some tips');
        msg.reply('Do not google rule 34 for anything');
        msg.reply('Do not delete system 32 or system 62');
    }

    if (msg.content == '*UwU') {
        msg.reply('Oh no not the UwU clan god help us')
    }

    });


client.login('ODQzNTE1NzQxNzY3OTkxMzI3.YKE_QA.zZuJ4Mt-eVjgzNYUc3bJ8R3wIj4');