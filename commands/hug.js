const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'hug',
  description: 'A big friendly hug',
  usage: '.hug',

    execute(message, args){
      // implement JSON container of .gif links
     var hugs = JSON.parse(containor.JSON);
     let member = message.mentions.members.first();
     // send message with randomized link
     message.channel.send(message.author + ' hugs ' + member + '!', {
         file: hugs[Math.floor(Math.random() * hugs.length)]
    });
  }
}
  /* execute(message, args) {
    const hugs = [
      'https://i.imgur.com/1v4kbO0.gifv',
      'https://i.imgur.com/uKDi1zI.gif',
      'https://i.imgur.com/1Xeveoe.gif',
      'https://i.imgur.com/jHQwLGV.gif',
      'https://i.imgur.com/LocheIg.gif'
    ]
      let member = message.mentions.members.first();

      message.channel.send(message.author + ' hugs ' + member + '!', {
      file: hugs[Math.floor(Math.random() * hugs.length)]
    });

      }

*/
