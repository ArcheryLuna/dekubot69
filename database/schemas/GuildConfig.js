const mongoose = require("mongoose");

const GuildConfigSchema = new mongoose.Schema( {
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    prefix: {
        type: mongoose.SchemaTypes.Strings,
        required: true,
        default: "$",
    },
    defaultRole: {
        type: mongoose.SchemaTypes.Strings,
        required: false,
    },
    memberLogChannel: {
        type: mongoose.SchemaTypes.Strings,
        required: false,
    },
})
module.exports = mongoose.model('GuildConfig',  GuildConfigSchema);