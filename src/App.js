import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Hero from "./components/Hero"
import "./assets/style.css"

function App() {
  return (
    <div className="App">
      <Header />
      
      <Hero />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
