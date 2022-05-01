import { AppBar, Typography, InputBase, Badge, Avatar } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Mail, Notifications } from '@mui/icons-material';
import { StyledToolbar, IconsContainer, Search, UserContainer } from '../styled/Navbar';

const Navbar = () => {
  //my own styles

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
          <Avatar alt='myavatar' src='' sx={{ width: '30px', height: '30px' }} />
        </IconsContainer>
        <UserContainer>
          <Avatar alt='myavatar' src='' sx={{ width: '30px', height: '30px' }} />
          <Typography variant='span'>Marsiya</Typography>
        </UserContainer>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
