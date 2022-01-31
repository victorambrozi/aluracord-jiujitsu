import React from "react";
import { Box, Button, Text, Image } from "@skynexui/components";
import appConfig from "../../../config.json";
import { styleButtonSendStickers } from "./send-stikers-style";

export function ButtonSendSticker({ onStickerClick }) {
  const [isOpen, setOpenState] = React.useState("");

  const stickers = appConfig.stickers;

  return (
    <Box
      styleSheet={styleButtonSendStickers.container}
    >
      <Button
        styleSheet={styleButtonSendStickers.button}
        label="😋"
        onClick={() => setOpenState(!isOpen)}
      />
      {isOpen && (
        <Box
          styleSheet={styleButtonSendStickers.containerListStickers}
          onClick={() => setOpenState(false)}
        >
          <Text
            styleSheet={styleButtonSendStickers.title}
          >
            Stickers
          </Text>
          <Box
            tag="ul"
            styleSheet={styleButtonSendStickers.listStickers}
          >
            {stickers.map((sticker) => (
              <Text
                onClick={() => {
                  // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                  if (Boolean(onStickerClick)) {
                    onStickerClick(sticker);
                  }
                }}
                tag="li"
                key={sticker}
                styleSheet={styleButtonSendStickers.stickers}
              >
                <Image src={sticker} />
              </Text>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
