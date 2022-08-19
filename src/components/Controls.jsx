import Stack from "@suid/material/Stack";
import Button from "@suid/material/Button";

import ArrowForward from "@suid/icons-material/ArrowForward";
import Send from "@suid/icons-material/Send";

const Controls = ({ fetchData, image }) => {
  return (
    <Stack m={2} gap={2} direction="row" flexGrow={1} justifyContent="center">
      <Button
        variant="contained"
        endIcon={<ArrowForward />}
        onClick={fetchData}
      >
        Next
      </Button>
      <a href={image()} target="_blank">
        <Button variant="contained" endIcon={<Send />}>
          Share
        </Button>
      </a>
    </Stack>
  );
};

export default Controls;
