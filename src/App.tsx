import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {theme} from './components/Theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tetris from './pages/Tetris';
import Snake from './pages/Snake';
import Home from './pages/Home';
import IdeaPage from './pages/IdeaPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/tetris' element={<Tetris/>} />
          <Route path='/snake' element={<Snake/>} />
          <Route path='/idea' element={<IdeaPage/>}/>
          <Route path='/*' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
