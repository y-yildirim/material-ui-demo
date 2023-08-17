import { ThemeProvider } from "@emotion/react";
import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Rating,
  Typography,
  createTheme,
} from "@mui/material";

function TourCard() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });

  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={1}>
          <img
            className="card-image"
            src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
            alt=""
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component={"h1"}>
              Immerse into the Falls
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component={"p"} marginLeft={0.5}>
                5 Hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="stars"
                value={4.6}
                readOnly
                precision={0.5}
                size="small"
              ></Rating>
              <Typography variant="body2" component={"p"} marginLeft={0.5}>
                4.6
              </Typography>
              <Typography variant="body2" component={"p"} marginLeft={1.5}>
                (543 reviews)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" component={"h3"}>
                From C $465
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
