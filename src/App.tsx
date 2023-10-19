import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatBot, Initial } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Routes>
  );
};

export default App;
