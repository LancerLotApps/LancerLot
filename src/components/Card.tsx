import type {ReactNode} from 'react';
import Typography from '@mui/material/Typography';
import {Card, CardContent} from '@mui/material';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  mediaContent?: ReactNode;
}

const Card_: React.FC<CardProps> = ({ title, content, imageUrl, mediaContent }) => {
  return (
      <Card sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius:5,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        margin: '20px',
        height: {xs:'90vw', sm:'350px', md:'450px'},
        width: {xs:'90vw', sm:'350px', md:'450px'},
        backgroundImage: mediaContent ? undefined : (imageUrl?`url(${imageUrl})`:'linear-gradient(45deg, rgba(75,46,30,0.85), rgba(121,183,64,0.85))'),
        backgroundSize: 'cover',
        ':hover': {boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}
      }}>
        {mediaContent}
        <CardContent sx={{position: 'relative', background: 'rgba(0, 0, 0, 0.3)', height:150}}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: 2,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'lightgrey',
              marginBottom: 5
            }}
          >
            {title}
          </Typography>
          <Typography gutterBottom variant='body1' component='div' color='lightyellow'>
            {content}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default Card_;
