const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1174905255205556224')
    .setType('PLAYING')
  //  .setURL('') //Must be a youtube video link 
    .setState('')
    .setName('')
    .setDetails(``)
    .setStartTimestamp(Date.now())
   // .setAssetsLargeImage('') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('') //Text when you hover the Large image
  //  .setAssetsSmallImage('https://media.discordapp.net/attachments/926014564322148372/1224191844309798952/1200px-Termux.') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('') //Text when you hover the Small image
   // .addButton('Button 1', 'Button URL')
    //.addButton('Button 2', 'Button URL');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ``;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
