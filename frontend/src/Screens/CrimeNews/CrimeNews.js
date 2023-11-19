import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#DC004E",
    },
  },
});

const cardStyle = {
  marginBottom: "20px", // Add a margin to create a gap between cards
};

export default function CrimeNews() {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=crime&apiKey=dc2e8f5a4b244cc89c8730a5e48f5210"
      )
      .then((response) => {
        if (response.status === 200) {
          setContactData(response.data);
          setLoading(false);
          console.log(response.data);
        }
      });
  }, []);

  // Check if contactData.articles is available before calculating totalPages
  const articlesPerPage = 10;
  const totalPages = contactData.articles
    ? Math.ceil(contactData.articles.length / articlesPerPage)
    : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = page * articlesPerPage;
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" align="center" gutterBottom>
          Latest Crime News
        </Typography>
        {loading ? ( // Show loader while data is loading
          <h1>
            <CircularProgress style={{color:"#ef476fff"}}/>
          </h1>
        ) : (
          <div>
            <Card>
              <CardContent>
                <ul>
                  {contactData.articles &&
                    contactData.articles
                      .slice(startIndex, endIndex)
                      .map((data, index) => (
                        <div key={index}>
                          <Card variant="outlined" style={cardStyle}>
                            <CardContent>
                              <Typography variant="h6">{data.title}</Typography>
                              <Typography
                                variant="subtitle1"
                                color="textSecondary"
                              >
                                Source: {data.source.name}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                color="textSecondary"
                              >
                                Time: {formatDate(data.publishedAt)}
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                </ul>
              </CardContent>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px",
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        )}
      </ThemeProvider>
    </Container>
  );
}
