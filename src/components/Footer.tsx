import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ShareButtons from './SocialShare';
import {hashTags, message} from "../assets/constants";

function Footer() {
  return (
    <Box sx={{backgroundColor:'primary.dark', position:'fixed', bottom:0, width:'100vw'}} >
      <Container>
        <ShareButtons
          url={window.location.href}
          text={message}
          hashTag={hashTags}
        />
      </Container>
    </Box>
  );
}

export default Footer;
