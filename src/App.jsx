import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import MusicPlayer from "./components/MusicPlayer"; // import ini

function App() {
  return (
    <main className="app transition-all ease-in">
      <MusicPlayer /> {/* Tambahkan di atas agar selalu hidup */}
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
