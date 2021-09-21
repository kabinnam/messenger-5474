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
  unreadMessage: {
    fontWeight: "bold",
    color: "black",
  },
  unreadCount: {
    alignSelf: "center",
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, numUnread } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={
            classes.previewText + " " + (numUnread > 0 && classes.unreadMessage)
          }
        >
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
