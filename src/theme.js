import { extendTheme } from "@chakra-ui/theme-utils";

const colors = {
  brand: {
    50: "#e6f7f1",
    100: "#c8ebdc",
    200: "#a9dec7",
    300: "#7bccab",
    400: "#4dba8f",
    500: "#28a745", // verde principal
    600: "#1f8a38",
    700: "#176c2b",
    800: "#0f4f1e",
    900: "#072f12",
  },
  accent: {
    50: "#e6f2fa",
    100: "#c6def4",
    200: "#a6cbed",
    300: "#7ab1e5",
    400: "#4e97dd",
    500: "#007bff", // azul principal
    600: "#0066cc",
    700: "#004d99",
    800: "#003366",
    900: "#001a33",
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
      },
    }),
  },
});

export default theme;
