import { Box, Tooltip, Fab, Modal, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, VideoCameraBack, Image, PersonAdd } from '@mui/icons-material';
import { useState } from 'react';

const MyModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const UserContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
}));
//my custom Modal by default it is closed ie setOpen to false
//on click of the tooltip btn it's set open to true

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title='Delete' sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }} onClick={() => setOpen(true)}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>

      <MyModal open={open} onClose={() => setOpen(false)} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box width={300} height={300} p={3} borderRadius={3} bgcolor={'background.default'} text={'text.primary'}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>
          <UserContainer onClick={() => setOpen(true)}>
            <Avatar alt='myavatar' src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647815673/MERN%20Ecommerce/winter_red_jacket.webp' sx={{ width: '30px', height: '30px' }} />
            <Typography variant='span'>Marsiya Issah</Typography>
          </UserContainer>
          <TextField sx={{ width: '100%' }} id='standard-multiline-static' multiline rows={3} placeholder='What is on your mind?' variant='standard' />
          <Stack direction='row' gap={1} mt={2} mb={4}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  );
};

export default Add;
