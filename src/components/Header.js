import { Grid, Typography, useTheme } from "@material-ui/core";
import person from "../img/person.svg";
import React from "react";

const Header = () => {
  const theme = useTheme();
  return (
    <div>
      <Grid
        xs={12}
        item
        container
        style={{
          position: "relative",
          bottom: "35px",
          zIndex: theme.zIndex.appBar + 3,
        }}
        justifyContent="space-around"
      >
        <Grid
          item
          xs={11}
          md={5}
          container
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img src={person} alt="" />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              Sergio Handerson
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              @sergio587handerson
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={11}
          md={5}
          container
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              Male
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Gender
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              214
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Saved articles
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textPrimary">
              8/7/97
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Birthday
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
