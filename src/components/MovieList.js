import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import MovieListItem from "./MovieListItem";

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  }
});

const MovieList = props => {
  const { classes, genres, loading } = props;

  return (
    <React.Fragment>
      {loading && <p style={{ textAlign: "center" }}>Loading Please Wait</p>}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {genres &&
            genres.map(genre => (
              <Grid item key={genre.id} xs={6} sm={6} md={3}>
                <Link to="/sample" style={{ textDecoration: "none" }}>
                  <MovieListItem genre={genre} />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MovieList);
