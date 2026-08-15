import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const EDGE_THRESHOLD = 48;

export function useScrollEdge() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      const full = document.documentElement.scrollHeight;
      setAtTop(scrollY < EDGE_THRESHOLD);
      setAtBottom(scrollY + viewport >= full - EDGE_THRESHOLD);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, [pathname]);

  return {atTop, atBottom};
}
