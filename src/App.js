import logo from './logo.png';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <img src={logo} alt="Pokemon logo" height="100px" />
      <MainPage />
    </div>  
  );
}

export default App;
