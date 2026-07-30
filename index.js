const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const azkarList = [
    "سبحان الله وبحمده، سبحان الله العظيم 🤍",
    "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير 🌟",
    "اللهم صلِّ وسلم على نبينا محمد 🌿",
    "أستغفر الله العظيم وأتوب إليه 🤲",
    "لا حول ولا قوة إلا بالله العلي العظيم ✨",
    "الحمد لله حمداً كثيراً طيباً مباركاً فيه 🌸"
];

client.on('ready', () => {
    console.log(`✅ البوت جاهز ويعمل باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!ذكر' || message.content === '!azkar') {
        const randomZikr = azkarList[Math.floor(Math.random() * azkarList.length)];
        
        const embed = new EmbedBuilder()
            .setColor('#2b2d31')
            .setTitle('📖 ذكر اليوم')
            .setDescription(`**${randomZikr}**`)
            .setFooter({ text: 'لا تنسَ ذكر الله' });

        message.channel.send({ embeds: [embed] });
    }
});

// تسجيل الدخول لقراءة التوكن من متغيّرات البيئة بأمان
client.login(process.env.TOKEN);
