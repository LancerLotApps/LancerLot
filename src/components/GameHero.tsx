import * as React from 'react';

interface GameHeroProps {
  title: string;
  hideTitle?: boolean;
  description: React.ReactNode;
  media: {type: 'video'; src: string} | {type: 'image'; src: string} | {type: 'custom'; content: React.ReactNode};
  actions?: React.ReactNode;
}

function GameHero({title, hideTitle = false, description, media, actions}: GameHeroProps) {
  return (
    <section className='game-hero'>
      <div className='game-hero-media'>
        {media.type === 'video' ? (
          <video autoPlay muted loop playsInline>
            <source src={media.src} type='video/mp4'/>
          </video>
        ) : media.type === 'image' ? (
          <img src={media.src} alt=''/>
        ) : (
          media.content
        )}
      </div>
      <div className='game-hero-scrim' aria-hidden='true'/>
      <div className='game-hero-top'>
        <h1 className={`game-hero-title ${hideTitle ? 'sr-only' : ''}`.trim()}>
          {title}
        </h1>
        <p className='game-hero-description'>
          {description}
        </p>
      </div>
      <div className='game-hero-panel'>
        {actions && <div className='game-hero-actions'>{actions}</div>}
      </div>
    </section>
  );
}

export default GameHero;
