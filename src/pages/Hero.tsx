import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import evolve2048Icon from '../assets/media/evolve2048/evolve2048.png';
import tetrisIcon from '../assets/media/tetrisSmiley.png';
import snakeScene from '../assets/media/snakeScene.png';
import {missionEyebrow, missionHeadline, missionSubhead} from '../assets/constants';
import RevealOnScroll from '../components/RevealOnScroll';

const medallions = [
  {src: evolve2048Icon, alt: 'Evolve 2048', slotClass: 'medallion-slot-a'},
  {src: tetrisIcon, alt: 'Tetris', slotClass: 'medallion-slot-b'},
  {src: snakeScene, alt: 'Snake 3D', slotClass: 'medallion-slot-c'},
];

const pillars = [
  {
    icon: <VerifiedOutlinedIcon fontSize='small'/>,
    title: 'Free & fair',
    body: 'Browser games are always free, no ads. Where a mobile app does carry ads, they’re light — and removable with a one-time purchase.',
  },
  {
    icon: <ForumOutlinedIcon fontSize='small'/>,
    title: 'Community-driven',
    body: 'Got an idea for a game? Tell us. Player suggestions shape what we build next.',
  },
  {
    icon: <AutoAwesomeOutlinedIcon fontSize='small'/>,
    title: 'Always evolving',
    body: 'We started in casual games. We’re expanding into new genres as we grow.',
  },
];

function Hero() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    e.currentTarget.style.setProperty('--mx', mx.toFixed(3));
    e.currentTarget.style.setProperty('--my', my.toFixed(3));
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mx', '0');
    e.currentTarget.style.setProperty('--my', '0');
  };

  return (
    <>
    <section className='hero' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='hero-inner'>
        <div className='hero-copy'>
          <Typography component='p' className='hero-eyebrow'>{missionEyebrow}</Typography>
          <Typography component='h1' className='hero-headline'>{missionHeadline}</Typography>
          <Typography component='p' className='hero-subhead'>{missionSubhead}</Typography>
          <a href='#games' className='hero-cta'>See our games ↓</a>
        </div>
        <div className='medallion-stack' aria-hidden='true'>
          {medallions.map(m => (
            <div key={m.alt} className={`medallion-slot ${m.slotClass}`}>
              <div className='medallion'>
                <img src={m.src} alt=''/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pillars'>
        {pillars.map((p, i) => (
          <RevealOnScroll key={p.title} className='pillar' delayMs={i * 100}>
            <span className='pillar-icon'>{p.icon}</span>
            <Typography component='h2' className='pillar-title'>{p.title}</Typography>
            <Typography component='p' className='pillar-body'>{p.body}</Typography>
          </RevealOnScroll>
        ))}
      </div>
    </section>
    <div className='hero-fade' aria-hidden='true'/>
    </>
  );
}

export default Hero;
