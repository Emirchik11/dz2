import './App.css';
import Title from './components/title/Title'
import About from './components/about/About'
import MainPage from "./pages/mainpage/MainPage";

function App() {
  return (
    <div className="App">
      <About/>
      <Title/>
      <MainPage/>
    </div>
  );
}

export default App;
