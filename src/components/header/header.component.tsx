import React from 'react';

import * as S from './styles';

interface IHeaderProps{
    title: string;
    goBackTitle: string;
    goback?: () => void;
}

const HeaderComponent: React.FC<IHeaderProps> = ({
    title, goback, goBackTitle
}) => {
  return (
    <S.Header>
      <S.Back onClick={goback}>{goBackTitle}</S.Back>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
}

export default HeaderComponent;