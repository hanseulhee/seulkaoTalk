import './styles/App.css';
import Navbar from"./components/Navbar";
import Sidebar from"./components/Sidebar";
import Main from"./Main";

function App() {
  return (
    
    <div className="App">
     <Sidebar />
     <Navbar />
     <Main />
    </div>
  );
}

export default App;
