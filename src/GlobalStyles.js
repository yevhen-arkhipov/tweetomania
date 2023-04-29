import { createGlobalStyle } from "styled-components";
import "modern-normalize";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Montserrat;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
a,
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
