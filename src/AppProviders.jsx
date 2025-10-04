// AppProviders.jsx
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store"; // ajusta tu ruta
import { ConfigProvider, theme } from "antd";

export const AppProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.lightAlgorithm,
          token: {
            colorPrimary: "#05434c",
            borderRadius: 12,
            fontFamily: "Roboto, sans-serif",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ReduxProvider>
  );
};
