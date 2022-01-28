import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useState } from "react";

import Header from "../components/Header/Header";
import MessageList from "../components/MessageList/MessageList";
import { styleChat } from "../styles/Chat";

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [messageList, setMessageList] = React.useState([]);

  const handleNewMessage = (newMessage) => {
    const message = {
      id: messageList.length + 1,
      from: "victorambrozi",
      text: newMessage,
    };
    setMessageList([message, ...messageList]);
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
