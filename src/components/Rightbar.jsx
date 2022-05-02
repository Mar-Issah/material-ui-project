import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem, List, ListItem, Divider, ListItemAvatar, ListItemText } from '@mui/material';
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box style={{ position: 'fixed' }}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt='Remy Sharp' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647993021/MERN%20Ecommerce/pexels-photo-291762_gqw0zd.webp' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar alt='Cindy Baker' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647823847/MERN%20Ecommerce/swimsuit.jpg' />
          <Avatar alt='Agnes Walker' src='' />
          <Avatar alt='Trevor Henderson' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647823568/MERN%20Ecommerce/jackets.jpg' />
          <Avatar alt='Cindy Baker' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647816014/MERN%20Ecommerce/beach_wear.jpg' />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        {/* we can map over an array to achieve this */}
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647816014/MERN%20Ecommerce/beach_wear.jpg' alt='' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647815995/MERN%20Ecommerce/summer_wear.webp' alt='' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647815673/MERN%20Ecommerce/winter_red_jacket.webp' alt='' loading='lazy' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647815673/MERN%20Ecommerce/winter_red_jacket.webp' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
