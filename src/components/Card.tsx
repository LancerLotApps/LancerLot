import Typography from '@mui/material/Typography';
import {Card, CardContent} from '@mui/material';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const Card_: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
      <Card sx={{
        borderRadius:5,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        margin: '20px',
        height: {xs:'90vw', sm:'350px', md:'450px'},
        width: {xs:'90vw', sm:'350px', md:'450px'},
        backgroundImage: imageUrl?`url(${imageUrl})`:'linear-gradient(45deg, rgba(33,18,49,0.8), rgba(108,140,10,0.8))',
        backgroundSize: 'cover',
        ':hover': {boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}
      }}>
        <CardContent sx={{background: 'rgba(0, 0, 0, 0.3)', height:150}}>
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
