import appConfig from "../../config.json";

export const styleMessageList = {
  container: {
    overflow: "scroll",
    display: "flex",
    flexDirection: "column-reverse",
    flex: 1,
    color: appConfig.theme.colors.neutrals["000"],
    marginBottom: "16px",
  },
  username: {
    marginBottom: "8px",
  },
  avatar: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
  },
  textContainer: {
    borderRadius: "5px",
    padding: "6px",
    marginBottom: "12px",
    hover: {
      backgroundColor: appConfig.theme.colors.neutrals[700],
    },
  },
  text: {
    fontSize: "10px",
    marginLeft: "8px",
    color: appConfig.theme.colors.neutrals[300],
  },
};
