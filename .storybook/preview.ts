import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/GlobalStyles";
import { theme } from "../src/styles/theme";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme,
        },
        defaultTheme: "light",
        Provider: ThemeProvider,
        GlobalStyles,
    }),
];

export default preview;
