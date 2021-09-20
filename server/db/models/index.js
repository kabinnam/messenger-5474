const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Read = require("./read");

// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

Read.belongsTo(Conversation);
Conversation.hasMany(Read);

module.exports = {
  User,
  Conversation,
  Message,
  Read
};
