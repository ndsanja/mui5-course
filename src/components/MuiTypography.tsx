import { Stack, Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        h2 Heading
      </Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="button">Button</Typography>
      <Typography variant="inherit">Inherit</Typography>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae
        quo cupiditate at velit a illum! Repellat omnis quae eius sed quisquam
        modi quaerat necessitatibus porro eligendi sapiente, provident at.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae
        quo cupiditate at velit a illum! Repellat omnis quae eius sed quisquam
        modi quaerat necessitatibus porro eligendi sapiente, provident at.
      </Typography>
    </Stack>
  );
};

export default MuiTypography;
