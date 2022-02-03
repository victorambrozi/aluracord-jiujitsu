import { Box, Text, Image } from "@skynexui/components";
import { styleMessageList } from "./message-list-style";

const MessageList = ({ mensagens }) => {
  return (
    <Box tag="ul" styleSheet={styleMessageList.container}>
      {mensagens.map((mensagem) => (
        <Text
          key={mensagem.id}
          tag="li"
          styleSheet={styleMessageList.textContainer}
        >
          <Box styleSheet={styleMessageList.username}>
            <Image
              styleSheet={styleMessageList.avatar}
              src={`https://github.com/${mensagem.from}.png`}
            />
            <Text tag="strong">{mensagem.from}</Text>
            <Text styleSheet={styleMessageList.text} tag="span">
              {new Date().toLocaleDateString()}
            </Text>
          </Box>
          {mensagem.text.startsWith(":sticker:") ? (
            <Image src={mensagem.text.replace(":sticker:", "")} />
          ) : (
            mensagem.text
          )}
        </Text>
      ))}
    </Box>
  );
};

export default MessageList;
