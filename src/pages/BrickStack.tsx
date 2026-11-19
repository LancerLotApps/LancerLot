import brickStackImage from '../assets/media/brickStack.png'
import {brickStackPlayStoreURL, brickStackPrivacyPolicyURL} from '../assets/constants';
import GameHero from '../components/GameHero';

const actions = (
  <>
    <a href={brickStackPlayStoreURL}
       target='_blank' rel='noopener noreferrer'
    >
      <img alt='Get it on Google Play'
           src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
      />
    </a>
    <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
      <img src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
    </a>
    <a href={brickStackPrivacyPolicyURL} target='_blank' rel='noopener noreferrer' className='game-hero-privacy-link'>
      Privacy Policy
    </a>
  </>
);

function BrickStack() {
  return (
    <GameHero
      title='Brick Stack'
      description={<>A nostalgic game which will take you back to childhood drowning you in nostalgia. Control the falling pieces to free the rows, falling speed gradually increases.<br/>More updates on Social Media.</>}
      media={{type: 'image', src: brickStackImage}}
      actions={actions}
    />
  );
}

export default BrickStack;
