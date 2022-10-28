import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./assets/styles.css";
import Main from "./components/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Logs from "./pages/Logs";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div>
        <Main />
      </div>

      <div className="content">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path='/Logs' element={<Logs />}></Route>
            <Route
              path="*"
              element={<h1>Nothing to see here! Turn back and try again!</h1>}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
