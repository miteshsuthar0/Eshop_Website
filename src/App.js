import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./Pages/Home/index"

function App() {
  return <>
    <BrowserRouter>
      <Header/> 
      <Home/>
    </BrowserRouter>
  </>;
}

export default App;
