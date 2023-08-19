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

function TourCard({ tour }) {
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
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={1}>
          <img className="card-image" src={tour.image} alt="" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component={"h1"}>
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component={"p"} marginLeft={0.5}>
                {tour.duration} Hours
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
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              ></Rating>
              <Typography variant="body2" component={"p"} marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body2" component={"p"} marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" component={"h3"}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
