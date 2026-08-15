import { ThemeProvider } from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {theme} from './components/Theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tetris from './pages/Tetris';
import Snake from './pages/Snake';
import Evolve2048 from './pages/Evolve2048';
import Home from './pages/Home';
import IdeaPage from './pages/IdeaPage';
import Terms from './pages/Terms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/tetris' element={<Tetris/>} />
          <Route path='/snake' element={<Snake/>} />
          <Route path='/evolve2048' element={<Evolve2048/>} />
          <Route path='/idea' element={<IdeaPage/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/*' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
