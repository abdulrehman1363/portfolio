import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';

const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
