import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SnakePromo from '../assets/media/SnakePromo1080p.mp4'

function Snake() {
  return (
    <div>
      <div className='promo-video-container'>
        <video autoPlay muted loop id='myVideo'>
          <source src={SnakePromo} type='video/mp4'/>
        </video>
      </div>
      <div className='promo-content'>
        <Typography variant='h4' noWrap color='secondary.light' fontFamily='cursive' padding='10px'>
          Snake 3d
        </Typography>
        <Typography variant='body1' color='secondary' letterSpacing='.05rem' fontStyle='italic'>
          Coming Soon. Snake game in 3d.
          <br/>More updates on Social Media.
        </Typography>
      </div>
      <Grid className='bottom' container direction='row' justifyContent='center'>
        <Grid item justifyContent='center' alignContent='center' xs={6} sm={6} lg={4} xl={2}>
          <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
            <img className='badge' src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Snake;
