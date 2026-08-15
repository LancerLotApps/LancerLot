import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '../components/Card';
import RevealOnScroll from '../components/RevealOnScroll';
import Evolve2048Scene from '../components/Evolve2048Scene';
import tetrisIcon from '../assets/media/tetrisSmiley.png'
import snakeScene from '../assets/media/snakeScene.png'

const cardContent = [
  {
    title: 'Evolve 2048',
    content: 'Merge tiles across hex and square boards. Power-ups, rewards, no limits.',
    imageUrl: '',
    mediaContent: <Evolve2048Scene variant='card'/>,
    path: '/evolve2048'
  },
  {
    title: 'Tetris',
    content: 'Control the falling pieces to free the rows, falling speed gradually increases.',
    imageUrl: tetrisIcon,
    path: '/tetris'
  },
  {
    title: 'Snake 3d',
    content: 'Coming Soon',
    imageUrl: snakeScene,
    path: '/snake'
  },
  {
    title: 'Your Suggestion',
    content: 'Make us a suggestion most demanded games will be our priority',
    imageUrl: '',
    path: '/idea'
  },
]

function AppsPage() {
  return (
    <Grid container spacing={2} direction='row' justifyContent={'center'}>
      {
        cardContent.map((item, i) =>
          <RevealOnScroll key={item.title} delayMs={i * 80}>
            <Link to={item.path} style={{textDecoration:'none'}}>
              <Card {...item}/>
            </Link>
          </RevealOnScroll>
        )
      }
    </Grid>
  );
}

export default AppsPage;
