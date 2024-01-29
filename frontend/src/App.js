import './App.css';
import { Route, Routes } from 'react-router-dom';
import Finance from './pages/finance/finance';

function App () {
  return (
    <Routes>
      {/* <Route exact path="/" /> */}
      <Route exact path="/" Component={ Finance } />
    </Routes>
  );
}

export default App;
