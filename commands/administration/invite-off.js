const {Client, Message, MessageEmbed} = require('discord.js');
const schema = require('../../schemas/anti-invite')


module.exports = {
    name:'invite-off',
    description: 'Turns off anti-invite system',

    async execute(message, args,client){

        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({content:'Perms Denied'})
        const id = message.guild.id;

        schema.findOne({Server: id}, async(err, data) =>{
            if(!data) return message.channel.send({content:'Server never had anti-invite off'})

            data.delete()
            message.channel.send({content:`Anti-Invite has been turned off in ${message.guild.name}`})
        })
        
    }
}