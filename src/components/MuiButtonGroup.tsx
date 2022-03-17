import { Stack, Button, ButtonGroup } from "@mui/material";

const MuiButtonGroup = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <ButtonGroup
          variant="outlined"
          size="small"
          orientation="vertical"
          color="secondary"
          aria-label="vertical outlined primary button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => alert("left")}>Left</Button>
          <Button onClick={() => alert("center")}>Center</Button>
          <Button onClick={() => alert("right")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtonGroup;
