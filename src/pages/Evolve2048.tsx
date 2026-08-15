import {evolve2048PlayStoreURL, evolve2048PrivacyPolicyURL} from '../assets/constants';
import GameHero from '../components/GameHero';
import Evolve2048Scene from '../components/Evolve2048Scene';

const actions = (
  <>
    <a href={evolve2048PlayStoreURL} target='_blank' rel='noopener noreferrer'>
      <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='Get it on Google Play'/>
    </a>
    <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
      <img src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
    </a>
    <a href={evolve2048PrivacyPolicyURL} target='_blank' rel='noopener noreferrer' className='game-hero-privacy-link'>
      Privacy Policy
    </a>
  </>
);

function Evolve2048() {
  return (
    <GameHero
      title='Evolve 2048'
      description='Merge tiles across hex and square boards. Power-ups, rewards, no limits. Available now on Google Play.'
      media={{type: 'custom', content: <Evolve2048Scene variant='hero'/>}}
      actions={actions}
    />
  );
}

export default Evolve2048;
