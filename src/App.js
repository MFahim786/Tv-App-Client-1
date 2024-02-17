import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';
import Dashboard from './dashboard';
import Navigation from './AppNavigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
  </BrowserRouter>
  );
}

export default App;
 