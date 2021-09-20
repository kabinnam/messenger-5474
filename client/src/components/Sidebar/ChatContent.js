import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unread: {
    alignSelf: "center",
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, messages, reads } = conversation;

  const numUnread =
    reads[0].lastReadIndex !== null
      ? messages.length - 1 - reads[0].lastReadIndex
      : messages.length;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {numUnread > 0 && (
        <Chip
          className={classes.unread}
          color="primary"
          size="small"
          label={numUnread}
        />
      )}
    </Box>
  );
};

export default ChatContent;
