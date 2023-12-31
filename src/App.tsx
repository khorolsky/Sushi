import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import './scss/app.scss'
import Home from './pages/Home';
import NotFoundBlock from './components/NotFoundBlock';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
