const GetId = (obj) => obj.id || obj;
module.exports = {
    User: (user) => `/users/${GetId(user)}`,
    Server: (server) => `/guilds/${GetId(server)}`,
    Channel: (channel) => `/channels/${GetId(channel)}`,
    Invite: (invite) => `/invite/${invite}`,
    Webhook: (webhook, token) => `/webhooks/${GetId(webhook)}/${token}`,
    Member: (server, member) => `${this.Server(server)}/members/${GetId(member)}`,
    Role: (server, member, role) => `${this.Member(server, member)}/roles/${GetId(role)}`,
    Emoji: (server, emoji) => `${this.Server(server)}/emojis/${GetId(emoji)}`,
    Message: (channel, message) => `${this.Channel(channel)}/messages/${GetId(message)}`,
    Reaction: (channel, message, emoji) => `${this.Message(channel, message)}/reactions/${GetId(emoji)}`,
    Pin: (channel, message) => `${this.Channel(channel)}/pins/${GetId(message)}`,
    Recipient: (channel, user) => `${this.Channel(channel)}/recipients/${GetId(user)}`,
    Relationship: (fromUser, toUser) => `${this.User(fromUser)}/relationships/${GetId(toUser)}`,
    Note: (user, note) => `${this.User(user)}/notes/${note}`,
    Application: (application) => `/applications/${GetId(application)}`,
    Command: (command) => `/commands/${GetId(command)}`,
    ApplicationCommand: (application, command) => this.Application(application) + this.Command(command),
    ApplicationServerCommand: (application, server, command) => this.Application(application) + this.Server(server) + this.Command(command),
    Interaction: (interaction, token) => `/interactions/${GetId(interaction)}/${token}`,
};