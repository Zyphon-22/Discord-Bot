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
require('dotenv').config()
const config = require('../config.json')
const discord = require('discord.js');
const { TOKEN } = process.env
const { prefix, name } = config


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
        msg.send('Hi, what do you need?');
    }

    if (msg.content == '*help') {
        msg.send('You can tell me to do alot of things like make me do memes maths (up to a certain level),');
        msg.send('And hell i even have little easter eggs/ refrences (If you can find them)');
        msg.send('Here is a list of commands');
        msg.send('------------------------------------------------------------------------');


        msg.send('*hi');
        msg.send('*help');
        msg.send('*meme');
        msg.send('*weirdfact');
        msg.send('*invite/link');
        msg.send('*lifetips');
    }

    if (msg.content == '*meme') {
        msg.reply('ME: I want to travel, MY BANK ACCOUNT: Where to work?'); or; msg.reply('CALL OF DUTY Microtransaction Warfare'); or; msg.reply('')
        }
        
    
    if (msg.content == '*Alfreds gay') {
        msg.reply('I smell cap...just kidding');
    }

    if (msg.content == '*invite/link') {
        msg.send('https://discord.gg/bdcCMZxZ');
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
        msg.send('Do not google rule 34 for anything');
        msg.send('Do not delete system 32 or system 62');
    }

    if (msg.content == '*UwU') {
        msg.reply('Oh no not the UwU clan god help us');
    }

    if (msg.content == '*play') {
        msg.reply('YOO calm down thats not me');
    }

    if (msg.content == '*1+1') {
        msg.reply('That equals 2 :)');
    }

    });


client.login(''); // Due to privacy this is not filled out
