import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  //we can pass in title, image, text etc in the post as props
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
