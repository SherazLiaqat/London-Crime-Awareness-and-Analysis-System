import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./Contact.css";

const theme = createTheme();

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="s"
        style={{ backgroundColor: "#fafafa", paddingTop: "25px" }}
        id="Contact"
      >
        <Box
          sx={{
            marginTop: 8,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <h6
              style={{
                color: "#ef476fff",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              HAVE ANY QUERY?
            </h6>
            <h3 style={{ color: "black" }}>Contact Us</h3>
            <p style={{ color: "black", fontSize: "13px", marginTop: "15px" }}>
              Do you have any questions Requests Ideas Or maybe you simply want
              to chat with us to get to know us better
              <br /> Whatever the reason, everything you need to contact us
            </p>
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="Email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Subject"
                  label="Subject"
                  name="Subject"
                  autoComplete="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Message"
                  label="Message"
                  id="Message"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <button className="Button-home3">Contact Us</button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
