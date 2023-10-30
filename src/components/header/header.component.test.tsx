import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderComponent from './header.component';


describe('HeaderComponent', () => {
    test('deve renderizar o título', () => {
      render(<HeaderComponent title="Título" goBackTitle="Voltar" />);
      expect(screen.getByText('Título')).toBeInTheDocument();
    });
  
    test('deve renderizar o texto do botão de voltar', () => {
      render(<HeaderComponent title="Título" goBackTitle="Voltar" />);
      expect(screen.getByText('Voltar')).toBeInTheDocument();
    });
  
    test('deve chamar a função goback quando o botão de voltar é clicado', () => {
      const gobackMock = jest.fn();
      render(<HeaderComponent title="Título" goBackTitle="Voltar" goback={gobackMock} />);
      fireEvent.click(screen.getByText('Voltar'));
      expect(gobackMock).toHaveBeenCalled();
    });
  });