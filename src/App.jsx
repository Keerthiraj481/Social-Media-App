import "./App.css";
import Pages from "./components/Pages/pages";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </h1>
  );
}

export default App;