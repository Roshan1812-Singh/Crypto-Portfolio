import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Routing from './Router/Routing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
