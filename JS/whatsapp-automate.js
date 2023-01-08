const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
    console.log(message.body);
    if (message.body === 'good') {
        // for (i = 1; i <= 10; i++) {
        //     message.reply('yes say i am listening');
        // }
        const media = MessageMedia.fromFilePath('./gtr.jpg');
        chat.sendMessage(media);
    }
});

client.initialize();
