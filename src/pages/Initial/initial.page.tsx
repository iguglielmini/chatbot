import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const Initial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>Pagina Inicial</S.Title>
      <div>
        <S.ButtonSend onClick={() => navigate("/chatbot")}>
          <S.ButtonText>R2-D2</S.ButtonText>
        </S.ButtonSend>

        <S.ButtonSend onClick={() => navigate("/chatbot")}>
          <S.ButtonText>Chatbot</S.ButtonText>
        </S.ButtonSend>
      </div>
    </S.Container>
  );
};

export default Initial;
