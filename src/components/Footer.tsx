import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Link as RouterLink} from 'react-router-dom';
import ShareButtons from './SocialShare';
import {hashTags, message} from "../assets/constants";
import {useScrollEdge} from '../hooks/useScrollEdge';

function Footer() {
  const {atBottom} = useScrollEdge();
  return (
    <Box
      className={`site-footer ${atBottom ? '' : 'footer-hidden'}`.trim()}
      sx={{backgroundColor:'primary.dark', position:'fixed', bottom:0, width:'100vw'}}
    >
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <ShareButtons
          url={window.location.href}
          text={message}
          hashTag={hashTags}
        />
        <RouterLink to='/terms' style={{color: 'inherit', fontSize: '0.75rem', opacity: 0.7}}>
          Terms & Privacy
        </RouterLink>
      </Container>
    </Box>
  );
}

export default Footer;
