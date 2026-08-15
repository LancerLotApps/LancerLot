import SnakePromo from '../assets/media/SnakePromo1080p.mp4'
import GameHero from '../components/GameHero';

const actions = (
  <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
    <img src='https://cdn.buymeacoffee.com/buttons/v2/default-green.png' alt='Buy Me A Coffee'/>
  </a>
);

function Snake() {
  return (
    <GameHero
      title='Snake 3d'
      description={<>Coming Soon. Snake game in 3d.<br/>More updates on Social Media.</>}
      media={{type: 'video', src: SnakePromo}}
      actions={actions}
    />
  );
}

export default Snake;
