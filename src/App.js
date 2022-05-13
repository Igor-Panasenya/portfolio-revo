import Header from "./components/header/Header";
import Build from "./components/build/Build";
import Favorite from "./components/favorite/Favorite";
import Gift from "./components/gift/Gift";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Build />
        <Favorite />
        <Gift />
        <Footer />
    </div>
  );
}

export default App;
