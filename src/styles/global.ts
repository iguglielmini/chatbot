import { createGlobalStyle } from "styled-components";
import 'react-chat-elements/dist/main.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

li {
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;
