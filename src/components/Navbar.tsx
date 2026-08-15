import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Favorite, Instagram, Facebook, Twitter, YouTube, GitHub} from '@mui/icons-material';
import {Tooltip} from '@mui/material';
import Logo from './Logo';
import {fbURL, githubURL, instagramURL, twitterURL, youtubeURL} from "../assets/constants";
import {useScrollEdge} from '../hooks/useScrollEdge';

const pages = [
  {
    name: 'Instagram',
    icon: <Instagram/>,
    link: instagramURL,
  },
  {
    name: 'Facebook',
    icon: <Facebook/>,
    link: fbURL,
  },
  {
    name: 'Twitter',
    icon: <Twitter/>,
    link: twitterURL,
  },
  {
    name: 'YouTube',
    icon: <YouTube/>,
    link: youtubeURL,
  },
  {
    name: 'Github & Download',
    icon: <GitHub/>,
    link: githubURL,
  }
];

function ResponsiveAppBar() {
  const {atTop} = useScrollEdge();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <AppBar position='sticky' color='primary' className={`site-header ${atTop ? '' : 'nav-hidden'}`.trim()}>
      <Container sx={{width:"100vw"}}>
        <Toolbar disableGutters>
          <Logo/>
          <Box alignItems={'left'} sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>  {/*xs: flex*/}
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={()=>{handleCloseNavMenu();handleClick(page.link);}}>
                  <Tooltip title={`Follow on ${page.name}`}>
                    {page.icon}
                  </Tooltip>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}> {/*xs: none*/}
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>{handleCloseNavMenu();handleClick(page.link);}}
                sx={{ my: 2, color:'white', display: 'block' }}
              >
                <Tooltip title={`Follow on ${page.name}`}>
                  {page.icon}
                </Tooltip>
              </Button>
            ))}
          </Box>
          <Box alignItems={'flex-end'}>
            <Tooltip title={'Support Us / Donate'}>
              <a href='https://www.buymeacoffee.com/lancerlot' target='_blank' rel='noopener noreferrer'>
                <Favorite className={'bounce'} fontSize={'large'} color={'secondary'}/>
              </a>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;