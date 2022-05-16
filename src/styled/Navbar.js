import { Box, Toolbar, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

//when on desktop screen and up display flex when on mobile screen and down display none
export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const Search = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  //default them borderRadius
  borderRadius: theme.shape.borderRadius,
  width: "40vw",
  minHeight: "15px !important",
}));

//with styled component we could use props with SearchCon
//this is how to use breakpoint in css
//when on mobile screen and up display none display flex when on mobile screen and down
export const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
