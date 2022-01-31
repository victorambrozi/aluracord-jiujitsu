import { Box, TextField } from "@skynexui/components";
import React, { useState } from "react";
import { useRouter } from "next/router";

// local components
import Header from "../src/components/Header/Header";
import MessageList from "../src/components/MessageList/MessageList";
import { ButtonSendSticker } from "../src/components/SendStickers/SendStickers";

// style
import { styleChat } from "../src/styles/Chat";

// Database
import { createClient } from "@supabase/supabase-js";

// BACKEND
const SUPABASE_ANON_PUBLIC =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3MTA0MywiZXhwIjoxOTU4OTQ3MDQzfQ.pi1JnrtQmtfHmQpIP6Ph5Oqf8FORiNGQQqR7TbiWrrI";
const SUPABASE_URL = "https://qlrjlrgsrexldsqfdpwm.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC);

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [messageList, setMessageList] = React.useState([]);

  const router = useRouter();
  const user = router.query.username;

  const getDataBase = () => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false }) // inverte a ordem das mensagens
      .then(({ data }) => {
        setMessageList(data);
      });
  };

  const insertDataBase = (messageObject) => {
    supabaseClient
      .from("mensagens")
      .insert([messageObject]) // inserir um novo objeto com os dados da mensagem no banco de dados
      .then(({ data }) => {
        setMessageList([data[0], ...messageList]);
      });
  };

  React.useEffect(() => {
    // Evita de fazer a requisição, toda vez que uma tecla é acionada no input
    getDataBase();
  }, []); // a renderização é feita somente quando a pagina carrega (1 vez só)

  const NewMessage = (newMessage) => {
    const message = {
      from: user,
      text: newMessage,
    };
    // inserir no bando e dados
    insertDataBase(message);

    setMensagem(""); // limpa input
  };

  const handleChange = ({ target: { value } }) => {
    setMensagem(value);
  };

  const handlekeyPress = (event) => {
    const key = event.key;

    if (key === "Enter") {
      event.preventDefault();
      NewMessage(mensagem);
    }
  };

  return (
    <Box styleSheet={styleChat.bgChat}>
      <Box styleSheet={styleChat.chatContainer}>
        <Header />
        <Box styleSheet={styleChat.chat}>
          <MessageList mensagens={messageList} />
          <Box as="form" styleSheet={styleChat.form}>
            <TextField
              value={mensagem}
              onChange={handleChange}
              onKeyPress={handlekeyPress}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={styleChat.textArea}
            />
            <ButtonSendSticker />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Usuário
// - usuário digita no textarea
// - apertar enter para enviar
// - adicionar o texto na listagem

// Dev
// [x] Campo criado
// [x] Vamos usar o onChange usa o useState (ter um if pra caso seja enter pra limpar a variável) => usar o onCHange dentro do textarea(para monitorar oq o usuário está digitando)
// [] Lista de mensagens => useState => [mensagens, setMensagens] => setMensagens(valor do textarea)
