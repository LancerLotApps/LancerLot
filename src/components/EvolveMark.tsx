import {ReactComponent as LogoDark} from '../assets/media/evolve2048/logo-dark.svg';

interface EvolveMarkProps {
  className?: string;
}

function EvolveMark({className}: EvolveMarkProps) {
  return <LogoDark className={`evolve-mark ${className ?? ''}`.trim()} aria-hidden='true'/>;
}

export default EvolveMark;
