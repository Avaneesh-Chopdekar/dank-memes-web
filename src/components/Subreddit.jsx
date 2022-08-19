import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";

const Subreddit = ({ subreddit }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography variant="h6">From r/{subreddit()}</Typography>
    </Stack>
  );
};

export default Subreddit;
