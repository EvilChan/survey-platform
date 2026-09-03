import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider locale={zhCN}>
        <div>
          <h1>Hello World</h1>
        </div>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
