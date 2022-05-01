const Discord = require("discord.js");
const config = require("./config.json");
const prefix = "!";

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const guild = client.guilds.cache.get("YOUR_GUILD_ID");

q = [];

client.on("messageCreate", function(message) { 
 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    

    if (command === "ping") {
      
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);

    }                        

    if (command === "poo") {
      
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Poop`);

    }
  

    console.log(q);

 username = message.member.user.tag


 if (command == "q" && q.includes(username) == true) {

    message.channel.send("You are already in the Q.")
    console.log("work3")

 } else if (command == "q") {
      
        
        message.channel.send("Creating queue...");
        
       

        console.log(message.member.user.tag)

    
        q.push(username);

        message.channel.send("@"+username + " has joined the q. Current q is: " + q);
    
        // console.log(q.includes(username) === true);
         
         console.log(command == "q" && q.includes(username) == true);

        
        

    };

    if (command == "status") { 

        if (q == []) {

            message.channel.send("Current queue is empty...");

        } else {

           message.channel.send("Current q is: " + q);

        }

    };

    if (q.length == 1) {

        message.channel.send("Q has filled.")
        message.channel.send("Current Q: "+ q + " join VC.")

        guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
        .then(console.log)
        .catch(console.error);

    };

});                                      

client.login(config.BOT_TOKEN);