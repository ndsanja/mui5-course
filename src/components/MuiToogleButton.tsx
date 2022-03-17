import { Stack, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

const MuiToogleButton = () => {
  const [format, setFormat] = useState<string[]>([]);
  const [selectOne, setSelectOne] = useState<string | null>(null);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormat(updatedFormat);
  };
  const handleSelectOne = (
    _event: React.MouseEvent<HTMLElement>,
    updatedSelect: string | null
  ) => {
    setSelectOne(updatedSelect);
  };

  console.log("format", format);
  console.log("Select One", selectOne);

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Stack direction="column" alignItems="center" spacing={2}>
        <ToggleButtonGroup
          aria-label="formating text"
          value={format}
          onChange={handleChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction="column" alignItems="center" spacing={2}>
        <ToggleButtonGroup
          aria-label="select one"
          value={selectOne}
          onChange={handleSelectOne}
          exclusive
          color="success"
          orientation="vertical"
          size="small"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiToogleButton;
