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
  previewText: (props) => ({
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: props.conversation.numUnread > 0 && "bold",
    color: (props.conversation.numUnread > 0 && "black") || "#9CADC8",
  }),
  unreadCount: {
    alignSelf: "center",
  },
}));

const ChatContent = (props) => {
  const classes = useStyles(props);

  const { conversation } = props;
  const { latestMessageText, otherUser, numUnread } = conversation;

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
          className={classes.unreadCount}
          color="primary"
          size="small"
          label={numUnread}
        />
      )}
    </Box>
  );
};

export default ChatContent;
