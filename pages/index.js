import React from "react";
import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import { useRouter } from "next/router";

import { styleHomePage } from "../styles/PaginaInicial";
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

    // Utilizar useEffect na requisição
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return setDataGithub({
          location: json.location,
          linkedin: json.blog,
        });
      })
      .catch((error) => new Error(error));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    router.push("/chat"); // encaminha para uma nova página sem necessidade de recarregamento
  };
  return (
    <>
      <Box styleSheet={styleHomePage.bgContainer}>
        <Box styleSheet={styleHomePage.container}>
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={styleHomePage.form}
            onSubmit={submitHandler}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text variant="body3" styleSheet={styleHomePage.formText}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={styleHomePage.formInput}
              onChange={changeHandler}
              value={username}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={styleHomePage.formButton}
              href="/chat"
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box styleSheet={styleHomePage.photoArea}>
            <Image
              styleSheet={styleHomePage.photoImage}
              src={`https://github.com/${username}.png`}
            />
            <Text variant="body4" styleSheet={styleHomePage.photoTextImage}>
              {username}
            </Text>
            <Text variant="body4" styleSheet={styleHomePage.photoTextImage}>
              {dataGithub.location}
            </Text>
            <Text variant="body4" styleSheet={styleHomePage.photoTextImage}>
              <a href={dataGithub.linkedin}> Linkedin</a> 
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
};

export default PaginaInicial;
