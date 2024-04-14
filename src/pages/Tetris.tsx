import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TetrisPromo from '../assets/media/TetrisPromo.mp4'

const playBadge = (
  <a href='https://play.google.com/store/apps/details?id=org.godotengine.tetron&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
     target='_blank' rel='noopener noreferrer'
  >
    <img className='badge' alt='Get it on Google Play'
         src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
    />
  </a>
);
const buyMeACoffeeBadge = (
  <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
    <img className='badge' src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
  </a>
);
const githubBadge = (
  <div></div>
);

function Tetris() {
  return (
    <div>
      <div className='promo-video-container'>
        <video autoPlay muted loop id='myVideo'>
          <source src={TetrisPromo} type='video/mp4'/>
        </video>
      </div>
      <div className='promo-content'>
        <Typography variant='h4' noWrap color='secondary.light' fontFamily='cursive' padding='10px'>
          Tetris
        </Typography>
        <Typography variant='body1' color='secondary' letterSpacing='.05rem' fontStyle={'italic'}>
          A nostalgic game which will take you back to childhood drowning you in nostalgia.
          Control the falling pieces to free the rows, falling speed gradually increases.
          <br/> More updates on Social Media.
        </Typography>
      </div>
      <Grid className='bottom' container direction='row' justifyContent='center'>
        <Grid item justifyContent='center' alignContent='center'  xs={6} sm={6} lg={4} xl={3}>
          {playBadge}
        </Grid>
        <Grid item sm={0} lg={4}/>
        <Grid item justifyContent='center' alignContent='center' xs={6} sm={6} lg={4} xl={3}>
          {buyMeACoffeeBadge}
        </Grid>
        <Grid item xs={12}>
          {githubBadge}
        </Grid>
      </Grid>
    </div>
  );
}

export default Tetris;
