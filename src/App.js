import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from './Pages/Index';
import New from './Pages/New';
import Single from './Pages/Single';
import Watch from './Pages/Watch';
import CateFilm from './Pages/CateFilm';
import CateFilm2 from './Pages/CateFilm2';
import Search from './Pages/Search';
function App() {
  return (
    <BrowserRouter>
     <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/vu-tru-phim/phim-moi' element={<New />} />
          <Route path='/vu-tru-phim/:id' element={<Single />} />
          <Route path='/vu-tru-phim/loai-phim/:id' element={<CateFilm />} />
          <Route path='/vu-tru-phim/tim-kiem/:id' element={<Search />} />
          <Route path='/vu-tru-phim/quoc-gia/:id' element={<CateFilm2 />} />
          <Route path="/xem-phim/:slug/:episode" element={<Watch />} />
    </Routes>   
    </BrowserRouter>
   
  );
}

export default App;
