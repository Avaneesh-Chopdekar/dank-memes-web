import Box from "@suid/material/Box";
import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";
import Stack from "@suid/material/Stack";
import Button from "@suid/material/Button";

import ArrowForward from "@suid/icons-material/ArrowForward";
import Send from "@suid/icons-material/Send";

import { createEffect, createSignal, Show, Suspense } from "solid-js";

import { createTheme, ThemeProvider } from "@suid/material/styles";
import CircularProgress from "@suid/material/CircularProgress";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4500",
    },
  },
});

const [image, setImage] = createSignal("");
const [subreddit, setSubreddit] = createSignal("");
const [loaded, setLoaded] = createSignal(false);

function App() {
  function fetchData() {
    setLoaded(false);
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        setSubreddit(data.subreddit);
      });
  }

  createEffect(() => fetchData());

  return (
    <ThemeProvider theme={theme}>
      <Box flexGrow={1}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="h1"
              flexGrow={1}
              textAlign="center"
            >
              Dank Memes
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack mt={3} gap={2} alignItems="center">
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">From r/{subreddit()}</Typography>
          </Stack>
          {loaded() ? null : (
            <div className="progress-indicator-height">
              <CircularProgress />
            </div>
          )}
          <img
            src={image()}
            alt="meme"
            onLoad={() => setLoaded(true)}
            style={loaded() ? {} : { display: "none" }}
          />
          <Stack
            m={2}
            gap={2}
            direction="row"
            flexGrow={1}
            justifyContent="center"
          >
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
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
