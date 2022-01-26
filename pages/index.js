import React from "react";
import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { useRouter } from "next/router";

import { stylesSkynex } from "../styles/PaginaInicial";
import appConfig from "../config.json";
import Title from "../components/Title/index";

const PaginaInicial = () => {
  const router = useRouter();
  const [username, setUsername] = React.useState("victorambrozi");
  const [dataGithub, setDataGithub] = React.useState({
    location: "",
    linkedin: "",
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    const url = `https://api.github.com/users/${value}`;

    setUsername(value);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        return setDataGithub({
          location: json.location,
          linkedin: json.blog,
        });
      })
      .catch((error) => new Error(error));
  };

  console.log(dataGithub)
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
              href="/chat"
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
            <Text variant="body4" styleSheet={stylesSkynex.photoTextImage}>
              {dataGithub.location}
            </Text>
            <Text variant="body4" styleSheet={stylesSkynex.photoTextImage}>
              {dataGithub.linkedin}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
};

export default PaginaInicial;
