class Messenger {
  constructor(client, msg) {
    this.client = client;
    this.msg = msg;
    
    if (msg.content.match("!yuumi")) {
      msg.channel.send({files: ["https://media.discordapp.net/attachments/1216922975903944815/1277442710239711343/cachedImage.png?ex=66cd2ebb&is=66cbdd3b&hm=a90b7d2348aa6ef1d5e8ecf724b4fb9d2df2efcb67376586e85255b209dc394b&=&format=webp&quality=lossless&width=748&height=1084"]});
    }
  }
}

module.exports = Messenger;
