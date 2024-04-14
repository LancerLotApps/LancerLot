import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '../components/Card';
import tetrisIcon from '../assets/media/tetrisSmiley.png'
import snakeScene from '../assets/media/snakeScene.png'

const cardContent = [
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
        cardContent.map(item =>
          <Link key={item.title} to={item.path} style={{textDecoration:'none'}}>
            <Card key={item.title} {...item}/>
          </Link>
        )
      }
    </Grid>
  );
}

export default AppsPage;
