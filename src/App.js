// import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/navbar'
import Content from './components/content'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Content />
      </Switch>
    </div>
  );
}

export default App;