import "./App.css";
import Pages from "./components/Pages/pages";
import { BrowserRouter } from "react-router-dom";
import Context from "./components/context/context";


function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <Context>
          <Pages />
        </Context>
      </BrowserRouter>
    </h1>
  );
}

export default App;