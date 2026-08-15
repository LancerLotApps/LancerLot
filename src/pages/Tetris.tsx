import TetrisPromo from '../assets/media/TetrisPromo.mp4'
import {tetrisPrivacyPolicyURL} from '../assets/constants';
import GameHero from '../components/GameHero';

const actions = (
  <>
    <a href='https://play.google.com/store/apps/details?id=org.godotengine.tetron&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
       target='_blank' rel='noopener noreferrer'
    >
      <img alt='Get it on Google Play'
           src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
      />
    </a>
    <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
      <img src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
    </a>
    <a href={tetrisPrivacyPolicyURL} target='_blank' rel='noopener noreferrer' className='game-hero-privacy-link'>
      Privacy Policy
    </a>
  </>
);

function Tetris() {
  return (
    <GameHero
      title='Tetris'
      description={<>A nostalgic game which will take you back to childhood drowning you in nostalgia. Control the falling pieces to free the rows, falling speed gradually increases.<br/>More updates on Social Media.</>}
      media={{type: 'video', src: TetrisPromo}}
      actions={actions}
    />
  );
}

export default Tetris;
