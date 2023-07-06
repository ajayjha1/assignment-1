import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Button }  from 'react-bootstrap';
import { AllCategories } from './Components/AllCategories';
import { PopupBox } from './Components/PopupBox';

function App() {
  return (
    <div className="App">
      <Header />
      <AllCategories />
    </div>
  );
}

export default App;
