import backgroundDark from '../assets/media/evolve2048/background-dark.svg';
import EvolveMark from './EvolveMark';

interface Evolve2048SceneProps {
  variant?: 'card' | 'hero';
}

function Evolve2048Scene({variant = 'hero'}: Evolve2048SceneProps) {
  return (
    <div className={`evolve-scene ${variant === 'card' ? 'evolve-scene-card' : ''}`.trim()}>
      <img className='evolve-scene-bg' src={backgroundDark} alt=''/>
      <EvolveMark/>
    </div>
  );
}

export default Evolve2048Scene;
