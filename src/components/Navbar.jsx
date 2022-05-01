import { Box, AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Mail, Notifications } from '@mui/icons-material';
const Navbar = () => {
  //my own styles
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  //when on desktop screen and up display flex when on mobile screen and down display none
  const IconsContainer = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));
  const Search = styled(Toolbar)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    //default them borderRadius
    borderRadius: theme.shape.borderRadius,
    width: '40vw',
    minHeight: '15px !important',
  }));

  //with styled component we cld use props with SearchCon
  //this is how to use breakpoint in css
  //when on mobile screen and up display none display flex when on mobile screen and down
  const UserContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));
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
