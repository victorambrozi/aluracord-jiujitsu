import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import GlobalStyle from "../styles/GlobalStyle";
import Title from "../components/Title";

const stylesSkynex = {
  bgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appConfig.theme.colors.primary[800],
    backgroundImage:
      "url(https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    gap: "10px",
    width: "100%",
    maxWidth: "650px",
    borderRadius: "5px",
    padding: "32px",
    margin: "16px",
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
    backgroundColor: appConfig.theme.colors.neutrals[700],
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "100%", sm: "50%" },
    textAlign: "center",
    marginBottom: "32px",
  },

  formText: {
    marginBottom: "32px",
    color: appConfig.theme.colors.neutrals[300],
  },

  formInput: {
    neutral: {
      textColor: appConfig.theme.colors.neutrals[200],
      mainColor: appConfig.theme.colors.neutrals[900],
      mainColorHighlight: appConfig.theme.colors.primary[500],
      backgroundColor: appConfig.theme.colors.neutrals[800],
    },
  },

  formButton: {
    contrastColor: appConfig.theme.colors.neutrals["000"],
    mainColor: appConfig.theme.colors.primary[900],
    mainColorLight: appConfig.theme.colors.primary[400],
    mainColorStrong: appConfig.theme.colors.primary[600],
  },

  photoArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "200px",
    padding: "16px",
    backgroundColor: appConfig.theme.colors.neutrals[800],
    border: "1px solid",
    borderColor: appConfig.theme.colors.neutrals[999],
    borderRadius: "10px",
    flex: 1,
    minHeight: "240px",
  },

  photoImage: {
    borderRadius: "50%",
    marginBottom: "16px",
  },

  photoTextImage: {
    color: appConfig.theme.colors.neutrals[200],
    backgroundColor: appConfig.theme.colors.neutrals[900],
    padding: "3px 10px",
    borderRadius: "1000px",
  },
};

const PaginaInicial = () => {
  const username = "victorambrozi";

  return (
    <>
      <GlobalStyle />
      <Box styleSheet={stylesSkynex.bgContainer}>
        <Box styleSheet={stylesSkynex.container}>
          {/* Formulário */}
          <Box as="form" styleSheet={stylesSkynex.form}>
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text variant="body3" styleSheet={stylesSkynex.formText}>
              {appConfig.name}
            </Text>

            <TextField fullWidth textFieldColors={stylesSkynex.formInput} />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={stylesSkynex.formButton}
              />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box styleSheet={stylesSkynex.photoArea}>
            <Image
              styleSheet={stylesSkynex.photoImage}
              src={`https://github.com/${username}.png`}
              />
            <Text variant="body4" styleSheet={stylesSkynex.photoTextImage}>
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
};

export default PaginaInicial;