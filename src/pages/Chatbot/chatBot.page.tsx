import React, { useState } from "react";
import { MessageBox } from "react-chat-elements";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const ChatBot: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<any[]>([]);

  const handleSendMessage = (text: string) => {
    // Adiciona a mensagem enviada pelo usuário
    const userMessage = {
      position: "right",
      type: "text",
      text,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simula a resposta do bot
    const botMessage = {
      position: "left",
      type: "text",
      text: "Resposta do bot",
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={() => navigate("/")}>Voltar</S.Back>
        <S.Title>R2-D2</S.Title>
      </S.Header>
      <div>
        <div>
          {messages.map((msg, index) => (
            <MessageBox
              key={index}
              position={msg.position}
              type={msg.type}
              text={msg.text}
            />
          ))}
        </div>
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // @ts-ignore
              handleSendMessage(e.target.value);
              // @ts-ignore
              e.target.value = "";
            }
          }}
        />
      </div>
    </S.Container>
  );
};

export default ChatBot;
