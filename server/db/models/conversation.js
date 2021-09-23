const { Op, where, fn, col } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given user Ids

Conversation.findConversation = async function (...users) {
  const conversation = await Conversation.findOne({
    through: {
      group: ["conversationId"],
      where: {
        [Op.and]: {
          userId: {
            [Op.in]: [...users],
          },
        },
      },
      having: where(fn("COUNT", col("userId"), "=", users.length)),
    },
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
