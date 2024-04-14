import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import logo from '../assets/media/logo.png';
import {Tooltip} from "@mui/material";

function Logo() {
  return (
    <>
      <Tooltip title='Home' placement={'bottom'}>
        <Link to={'/'}>
            <img style={{height:100}} src={logo} className='App-logo' alt='logo'/>
        </Link>
      </Tooltip>
      <Typography
        variant='h6'
        noWrap
        component='a'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'flex' },
          fontFamily: 'cursive',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LancerLot
      </Typography>
    </>
  );
}

export default Logo;
