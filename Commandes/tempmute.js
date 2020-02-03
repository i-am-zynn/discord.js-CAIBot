const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Veuillez mentionner un utilisateur !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission !");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: 0xbeb7b7,
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Veuillez spécifier un temps !");

  await(tomute.addRole(muterole.id));
  message.reply(` <@${tomute.id}> est mute pendant ${ms(ms(mutetime))} !`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> n'est plus mute !`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}