// AppProviders.jsx
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import  store  from "./redux/store"; // ajusta tu ruta

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export const AppProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ReduxProvider>
  );
};
