
import {darkTheme, defaultTheme, GlobalStyle} from "./utils";

import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import {SignUpModal} from "./components";


function App() {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <button onClick={() => setUseDarkTheme(true)} style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}>Dark Theme</button>
        <button onClick={() => setUseDarkTheme(false)} style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}>Default Theme</button>
        <div style={{
            background: !useDarkTheme ? darkTheme.primaryColor : defaultTheme.primaryColor,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <PrimaryButton >Hello World!</PrimaryButton>
            <SecondaryButton >Hello World!</SecondaryButton>
            <TertiaryButton >Hello World!</TertiaryButton>
            <SignUpModal />

        </div>
    </ThemeProvider>
  );
}

export default App;
