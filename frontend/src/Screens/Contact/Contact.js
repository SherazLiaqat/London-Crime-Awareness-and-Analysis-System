import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./Contact.css";

const theme = createTheme();

export default function Contact() {
  // Define the function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Create an object from the form data
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      // Send a POST request with axios
      const response = await axios.post(
        "http://localhost:8000/api/contact/",
        formDataObject
      );

      if (response.status === 201) {
        toast.success("Your Request sent successfully", {
          position: "top-right",
          autoClose: 3000, // Close the notification after 3 seconds
        });

        event.target.reset();
      } else {
        console.error("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              Do you have any questions, requests, ideas, or maybe you simply
              want to chat with us to get to know us better.
              <br /> Whatever the reason, everything you need to contact us is
              here.
            </p>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <button type="submit" className="Button-home3">
              Contact Us
            </button>
          </form>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
