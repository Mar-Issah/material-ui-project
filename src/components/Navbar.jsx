import { AppBar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Mail, Notifications } from '@mui/icons-material';
import { StyledToolbar, IconsContainer, Search, UserContainer } from '../styled/Navbar';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          S I Y A.
        </Typography>
        <LocalFloristIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          {' '}
          <InputBase placeholder='Search...' />
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar alt='myavatar' src='' sx={{ width: '30px', height: '30px' }} onClick={() => setOpen(true)} />
        </IconsContainer>
        <UserContainer onClick={() => setOpen(true)}>
          <Avatar alt='myavatar' src='' sx={{ width: '30px', height: '30px' }} />
          <Typography variant='span'>Marsiya</Typography>
        </UserContainer>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
