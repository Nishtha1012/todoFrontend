import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./components/store";
import { BasicRoutes } from "./routes/BasicRoutes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <BasicRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
