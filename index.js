//This is now your main file! Make sure to call in "index.js"!

const discord = require('discord.js')
const client = new discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} is now online!`)
    client.user.setActivity("With Nutella!")
})

client.on('message', message => {
    if(message.content === "Test"){
        message.channel.send("I'm working!")
    }
    if(message.content === "Hello"){
        let embed = new discord.MessageEmbed()
            .setTitle("This is a title!")
            .setDescription("This is a description!")
            .setColor('RED') // hER YOU GIVE COLOR!
            .setTimestamp() // This says the time!
            .setFooter('This a footer :))')
            .setAuthor("THis is an author!")
            message.channel.send(embed)
    }// By clicking here Kill terminal, you put ur bot offline, this takes some time! (E.g 5 minutes)
    //lets make stats command!
    if(message.content === "stats"){
        let statsembed = new discord.MessageEmbed()
            .setTitle('Stats!')
            .addField('This bot is in:', `${client.guilds.cache.size} guilds!`)
            .addField('This bot is listening to', `${client.users.cache.size} users!`)
            .addField("Thats my stats!", client.user.username)
            .setColor('GREEN')
            .setTimestamp()
            .setFooter('Stats')
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(statsembed)
    } // Lets give the embed a bit more color!
    // Now we're gonna make a whois / userinfo command!
    if(message.content === "whois"){
        let userinfoembed = new discord.MessageEmbed()
        .setTitle('WHOIS!')
        .setThumbnail(message.author.displayAvatarURL())
        .addField('Name:', message.author.username)
        .addField('Discriminator:', `#${message.author.discriminator}`)
        .addField('ID:', message.author.id)
        .addField('Avatar URL', `[Click Here](${message.author.displayAvatarURL()})`)
        .setColor('GREEN')
        // Well lets dm the author! Lets make it shows ID!
        message.author.send(userinfoembed)
    

    }
    if(message.content === "help"){
        let embedhelp = new discord.MessageEmbed()
            .setTitle('HELP!')
            .setDescription(`Discord Open source bot! A simple bot with the following commands: \n\`whois\` Gives info about your account! \n\`stats\`Gives stats of the bot! \n\`Hello\` Sends a embed! \n \`Test\`Sends a message! `)
            .setColor('GREEN')
            .setImage(message.author.displayAvatarURL())
            .setFooter("help!")
            .setTimestamp()
            message.channel.send(`${message.author.tag} Check your DM's for help!`)
            message.author.send(embedhelp)
    }
})

client.login("NzU2MTE3OTUxMzk2MTg0MTA1.X2NLtw.kjZMsyTB4AUimMFm9YqdH8eQRGU")

//Explanation!

// Copy ur token, 

//Now open console.log and type "node ."

//Make sure to save this file before doing that!

// Its online! Lets type: "Test"

//You can make many things with only this! Lets go further and make a embed!