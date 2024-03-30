import './App.css';
import { Route, Routes } from 'react-router-dom';
import Finance from './pages/finance/index';
import Login from './pages/login';

function App () {
  return (
    <Routes>
      {/* <Route exact path="/" /> */}
      <Route exact path="/" Component={ Login } />
      <Route exact path="/finance" Component={ Finance } />
    </Routes>
  );
}

export default App;
