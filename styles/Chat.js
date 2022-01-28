import appConfig from "../config.json";

export const styleChat = {
  bgChat: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appConfig.theme.colors.primary[500],
    backgroundImage: `url(https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    color: appConfig.theme.colors.neutrals["000"],
  },
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
    borderRadius: "5px",
    backgroundColor: appConfig.theme.colors.neutrals[700],
    height: "100%",
    maxWidth: "95%",
    maxHeight: "95vh",
    padding: "32px",
  },
  chat: {
    position: "relative",
    display: "flex",
    flex: 1,
    height: "80%",
    backgroundColor: appConfig.theme.colors.neutrals[600],
    flexDirection: "column",
    borderRadius: "5px",
    padding: "16px",
  },
  textArea: {
    width: "100%",
    border: "0",
    resize: "none",
    borderRadius: "5px",
    padding: "6px 8px",
    backgroundColor: appConfig.theme.colors.neutrals[800],
    marginRight: "12px",
    color: appConfig.theme.colors.neutrals[200],
  },

  form: {
    display: "flex",
    alignItems: "center",
  }
};
