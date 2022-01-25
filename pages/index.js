import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

import GlobalStyle from "../styles/GlobalStyle";
import Title from "../components/Title";

import { stylesSkynex } from "../styles/PaginaInicial";

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
