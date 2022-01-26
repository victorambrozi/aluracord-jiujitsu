import React from "react";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router";

import appConfig from "../config.json";
import Title from "../components/Title";

import { stylesSkynex } from "../styles/PaginaInicial";

const PaginaInicial = () => {
  const [username, setUsername] = React.useState("victorambrozi");
  const router = useRouter();

  const changeHandler = (event) => {
    const value = event.target.value;

    setUsername(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    router.push("/chat"); // encaminha para uma nova página sem necessidade de recarregamento
  };
  return (
    <>
      <Box styleSheet={stylesSkynex.bgContainer}>
        <Box styleSheet={stylesSkynex.container}>
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={stylesSkynex.form}
            onSubmit={submitHandler}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text variant="body3" styleSheet={stylesSkynex.formText}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={stylesSkynex.formInput}
              onChange={changeHandler}
              value={username}
            />
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
