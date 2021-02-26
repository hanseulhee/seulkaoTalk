import './styles/App.css';
import Navbar from"./components/Navbar";
import Sidebar from"./components/Sidebar";
import Main from"./Main";
import Footer from"./components/Footer";

function App() {
  return (
    
    <div className="App">
     <Sidebar />
     <Navbar />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
