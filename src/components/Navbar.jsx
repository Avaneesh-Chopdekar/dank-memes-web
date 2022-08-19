import AppBar from "@suid/material/AppBar";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1" flexGrow={1} textAlign="center">
          Dank Memes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
