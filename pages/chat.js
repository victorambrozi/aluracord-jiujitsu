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
  const router = useRouter();
  const user = router.query.username;

  const [mensagem, setMensagem] = useState("");
  const [messageList, setMessageList] = React.useState([]);

  const handleNewMessage = (newMessage) => {
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
      handleNewMessage(mensagem);
    }
  };

  const renderStick = (sticker) => handleNewMessage(`:sticker: ${sticker}`);

  const listenerMessageRealTime = (addMessage) => {
    return supabaseClient
      .from("mensagens")
      .on("INSERT", ({ new: recentMessage }) => {
        addMessage(recentMessage);
      })
      .subscribe();
  };

  const getDataBase = async () => {
    return await supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false }) // inverte a ordem das mensagens
      .then(({ data }) => {
        setMessageList(data);
      });
  };

  const insertDataBase = async (messageObject) => {
    return await supabaseClient
      .from("mensagens")
      .insert([messageObject]) // inserir um novo objeto com os dados da mensagem no banco de dados
      .then(({ data }) => {
        console.log(data)
        // setMessageList([data[0], ...messageList]);
      });
  };

  React.useEffect(() => {
    // Evita de fazer a requisi????o, toda vez que uma tecla ?? acionada no input
    getDataBase();
    listenerMessageRealTime((newMessage) => {
      setMessageList([newMessage, ...messageList]);
    });
  }, []); // a renderiza????o ?? feita somente quando a pagina carrega (1 vez s??)

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
            <ButtonSendSticker onStickerClick={renderStick} />{" "}
            {/*propriedade passada como callback do componente */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Usu??rio
// - usu??rio digita no textarea
// - apertar enter para enviar
// - adicionar o texto na listagem

// Dev
// [x] Campo criado
// [x] Vamos usar o onChange usa o useState (ter um if pra caso seja enter pra limpar a vari??vel) => usar o onCHange dentro do textarea(para monitorar oq o usu??rio est?? digitando)
// [] Lista de mensagens => useState => [mensagens, setMensagens] => setMensagens(valor do textarea)
