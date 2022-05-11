import { Typography, Switch } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Allsocials() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    typography: {
      h1: { fontFamily: "Poppins" },
      body1: { fontFamily: "Cutive Mono" },
    },
    palette: {
      mode: mode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ height: "full" }} elevation={0}>
        <Grid container justifyContent="center">
          <Box
            sx={{
              textAlign: "center",
              padding: "5rem",
              gap: 5,
              display: "grid",
              gridTemplateColumns: { md: " 1fr" },
            }}
          >
            <Typography variant="h1" component="p" fontSize="4rem">
              Mesocials
              <Switch
                onClick={() => setMode(!mode)}
                defaultChecked
                color="default"
              />
            </Typography>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link href="https://www.facebook.com/Gyaaannn" underline="none">
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  width="100%"
                  color="black"
                >
                  Facebook
                </Typography>
              </Link>
            </Paper>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link
                href="https://www.linkedin.com/in/jian-godito-472345211/"
                underline="none"
              >
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  width="100%"
                  color="black"
                >
                  LinkedIn
                </Typography>
              </Link>
            </Paper>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link href="https://www.instagram.com/jianzxcc" underline="none">
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  color="black"
                >
                  Instagram
                </Typography>
              </Link>
            </Paper>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link href="https://github.com/JnGdt" underline="none">
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  color="black"
                >
                  Github
                </Typography>
              </Link>
            </Paper>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link href="https://twitter.com/Jianzxcc" underline="none">
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  color="black"
                >
                  Twitter
                </Typography>
              </Link>
            </Paper>
            <Paper sx={{ padding: "1rem" }} elevation={24}>
              <Link href="#" underline="none">
                <Typography
                  variant="body1"
                  components="p"
                  fontSize="2em"
                  padding=".5rem"
                  textAlign={"center"}
                  color="black"
                >
                  MyWebsite
                </Typography>
              </Link>
            </Paper>
          </Box>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Allsocials;
