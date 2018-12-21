const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token} = require('./config.json');

const client = new Discord.Client();

//intialize commands folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//set new item in command collection, key: name, exported module: value
for(const file of commandFiles){
  const command = require('./commands/' + file);
  client.commands.set(command.name, command);
}
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

//create command variable based on user input. If no command is given, returns.
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try{
      command.execute(message, args);
      }
    catch(error){
      console.error(error);
      message.reply('There was an error trying to execute that command. Please alert IzumiiSena!')
      }
  }
);

client.login(token);
