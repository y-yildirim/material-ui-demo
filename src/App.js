import { Fragment } from "react";
import { Container, Grid, Typography } from "@mui/material";

import TourCard from "./components/TourCard";
import cities from "./data.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        {cities.map((city) => (
          <Fragment key={city.id}>
            <Typography
              variant="h4"
              component={"h2"}
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={1}>
              {city.tours.map((tour, index) => (
                <TourCard key={index} tour={tour} />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </div>
  );
}

export default App;
