import { useRoutes } from "react-router-dom";
import routes from "@/routes";
import "./App.css";
import { LoadingErrorProvider } from "./context/LoadingErrorContext";
import { message } from "antd";
import { useLoadingError } from "./context/useLoadingError";
import { ReactNode, useEffect } from "react";
import { MessageInstance } from "antd/es/message/interface";

const App = () => {
  const element = useRoutes(routes);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <LoadingErrorProvider>
      {contextHolder}
      <InnerApp element={element} messageApi={messageApi} />
    </LoadingErrorProvider>
  );
};

export default App;

interface InnerAppProps {
  element: ReactNode;
  messageApi: MessageInstance;
}

const InnerApp: React.FC<InnerAppProps> = ({ element, messageApi }) => {
  const { error } = useLoadingError();
  useEffect(() => {
    if (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }, [error, messageApi]);

  return <div className="App">{element}</div>;
};
