import { Grid } from "@material-ui/core";

import React from "react";

import InfoGraphics from "./InfoGraphics";
import SavedVideos from "./SavedVideos";

const ProfileSummery = () => {
  return (
    <Grid item container justifyContent="center" xs={12} style={{}}>
      <Grid item container xs={12} md={11} spacing={4} style={{}}>
        <Grid item xs={12}>
          <InfoGraphics />
        </Grid>
        <Grid item xs={12}>
          <SavedVideos />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileSummery;
