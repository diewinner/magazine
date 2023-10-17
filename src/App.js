import './App.css';
import {MainPage} from "./desktop/components/pages/mainPage/mainPage";
import {Header} from "./desktop/components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
