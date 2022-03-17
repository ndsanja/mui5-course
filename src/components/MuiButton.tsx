import { Stack, Button, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

const MuiButton = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("onClick primary")}
        >
          Contained
        </Button>
        <Button
          variant="outlined"
          color="success"
          href="https://google.com"
          target="_blank"
        >
          Outlined
        </Button>
        <Button variant="text" color="warning">
          Text
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={2}>
        <Button size="small" variant="contained" disabled>
          Small
        </Button>
        <Button size="medium" variant="contained" disableElevation>
          Medium
        </Button>
        <Button size="large" variant="contained" disableRipple>
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<Send />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>
        <IconButton aria-label="send icon button" color="primary">
          <Send />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
