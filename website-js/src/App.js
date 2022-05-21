import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Footer />
    </>
  );
}

export default App;
