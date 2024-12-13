import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { theme } from "./styles/theme.ts";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
