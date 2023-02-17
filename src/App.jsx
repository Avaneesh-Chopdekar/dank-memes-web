import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";

import { createEffect, createSignal } from "solid-js";

import Navbar from "./components/Navbar";
import Subreddit from "./components/Subreddit";
import Meme from "./components/Meme";
import Controls from "./components/Controls";

import useMediaQuery from "@suid/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@suid/material/styles";

const [image, setImage] = createSignal("");
const [preview, setPreview] = createSignal([]);
const [subreddit, setSubreddit] = createSignal("");
const [loaded, setLoaded] = createSignal(false);

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode() ? "dark" : "light",
      primary: {
        main: "#FF4500",
      },
    },
  });

  function fetchData() {
    setLoaded(false);
    fetch("https://meme-api.com/gimme")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        setSubreddit(data.subreddit);
        setPreview(data.preview);
      });
  }

  createEffect(() => fetchData());

  return (
    <ThemeProvider theme={theme}>
      <Box
        flexGrow={1}
        bgcolor={"background.default"}
        color={"text.primary"}
        minHeight="100vh"
      >
        <Navbar />
        <Stack mt={3} gap={2} alignItems="center">
          <Subreddit subreddit={subreddit} />
          <Meme
            image={image}
            loaded={loaded}
            setLoaded={setLoaded}
            preview={preview}
          />
          <Controls image={image} fetchData={fetchData} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
