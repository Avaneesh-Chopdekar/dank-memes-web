import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";

import { createEffect, createSignal } from "solid-js";

import Navbar from "./components/Navbar";
import Subreddit from "./components/Subreddit";
import Meme from "./components/Meme";
import Controls from "./components/Controls";

import { createTheme, ThemeProvider } from "@suid/material/styles";

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
        <Navbar />
        <Stack mt={3} gap={2} alignItems="center">
          <Subreddit subreddit={subreddit} />
          <Meme image={image} loaded={loaded} setLoaded={setLoaded} />
          <Controls image={image} fetchData={fetchData} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
