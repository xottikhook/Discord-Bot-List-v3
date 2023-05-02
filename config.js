const port = 4777;

module.exports = {
    client: {
        id: '1099079120115204147',
        token: 'MTA5OTA3OTEyMDExNTIwNDE0Nw.GoYkT8.VPzP7nYmjJjwU-OLURGx54TN4vnvxvCuvsoOSU',
        secret: 'nu6NwMSlLUVRpLb8dPVcw73ug2J-aSnE',
        prefix: 'a!',
        owners: ["809157408424722463"],
    },

    serverClient: {
        id: '1099079120115204147',
        prefix: 's!',
        token: 'MTA5OTA3OTEyMDExNTIwNDE0Nw.GoYkT8.VPzP7nYmjJjwU-OLURGx54TN4vnvxvCuvsoOSU',
        invite: 'https://discord.com/oauth2/authorize?client_id=1099079120115204147&scope=bot%20identify&permissions=19473'
    },

    database: {
        url: 'mongodb+srv://rlboostingxottik:System1153.@cluster0.qvgm35h.mongodb.net/?retryWrites=true&w=majority', // Mongo url
    },

    website: {
        port: port,
        url: 'https://xottikhook.github.io', // default url
        callback: 'https://xottikhook.github.io/callback', // default callback url

        // testingURL: 'http://localhost:' + port, // default testing url
        // testingCallback: 'http://localhost:' + port + '/callback', // default testing callback url

        support: 'https://discord.gg/sQQFSnQhdt', // discord support server
        roles: {
            administrator: ["857177733398265876"]
        },
        botTags: [ // Botlist tags
            "Fun",
            "NSFW",
            "Game",
            "24/7",
            "OSU!",
            "Guard",
            "Anime",
            "Music",
            "Memes",
            "Invite",
            "Reddit",
            "Twitch",
            "Crypto",
            "Economy",
            "Logging",
            "Youtube",
            "Utility",
            "General",
            "Leveling",
            "Roleplay",
            "Fortnite",
            "Welcomer",
            "Chat bot",
            "Minecraft",
            "Community",
            "Minigames",
            "Moderation",
            "Protection",
            "Web Dashboard",
            "Reaction Roles",
            "Auto Moderation",
        ],
        serverTags: [
            "Fun",
            "Game",
            "NSFW",
            "Meme",
            "Shop",
            "Media",
            "Emoji",
            "Sound",
            "Stream",
            "Social",
            "Design",
            "Company",
            "Turkish",
            "Protest",
            "E-Sport",
            "Bot List",
            "Chatting",
            "Roleplay",
            "Challange",
            "Community",
            "Technology",
            "Server List",
            "Development",
        ]
    },

    server: {
        // Server ID
        id: '1095074947644280934',

        // Channel IDs
        channels: {
            errors: '1102878239279550565', // Sends errors to this channel
            login: '1102878239279550565', // Sends login logs to this channel (member login)
            botlogs: '1102878239279550565', // Bot Add, Remove, Approve, Deny, Edit
            votes: '1102878239279550565', // Bot votes channel
            serverlogs: '1102878239279550565', // Server Add, Remove, Approve, Deny, Edit
            welcome: '1102878239279550565', // welcome logs channel Member/Bot join & leave logs
            schedules: '1102878239279550565', // New schedule logs channel

            voiceChannelStatistics: '', // Voice channel statistics channel "Website Visitors: 1365"
        },

        // Role IDs
        roles: {
            botReviewer: '822476027824963584', // Bot reviewer role
            botDeveloper: '808682198101262378', // Bot developer role

            verifiedBot: '816650236733685784', // Verified bot role
            unverifiedBot: '816638129225596968', // Unverified bot role
        }
    },

    languages: [{
        flag: 'gr',
        code: 'el',
        name: 'Greek'
    }, {
        flag: 'gb',
        code: 'en',
        name: 'English'
    }, {
        flag: 'tr',
        code: 'tr',
        name: 'Türkçe'
    }, {
        flag: 'de',
        code: 'de',
        name: 'Deutsch'
    }, {
        flag: 'ru',
        code: 'ru',
        name: 'Russian'
    }, {
        flag: 'fr',
        code: 'fr',
        name: 'French'
    }, {
        flag: 'es',
        code: 'es',
        name: 'Spanish'
    }],
}
