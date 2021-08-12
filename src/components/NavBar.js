import { Grid, AppBar, useTheme, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import HeaderImage from "../img/Header.png";

import Header from "./Header";

const NavBar = ({ width, setSideStatus }) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        elevation={0}
        style={{
          zIndex: theme.zIndex.appBar - 3,
          backgroundColor: "white",
          width: width > 1280 ? `calc(100% - ${300}px)` : "100%",
          marginLeft: width > 1280 ? `calc(100% - ${300}px)` : "0",
        }}
      >
        <Grid item xs={12} container>
          <img
            src={HeaderImage}
            alt=""
            style={{
              objectFit: "cover",
              flexGrow: "1",
              height: "15vh",
            }}
          />
          {width < 1280 ? (
            <IconButton
              style={{ position: "absolute", color: "white" }}
              onClick={() => setSideStatus(true)}
            >
              <Menu />
            </IconButton>
          ) : null}
        </Grid>

        <Header />
      </AppBar>
    </>
  );
};
const mapStateToProps = (props) => {
  const { width } = props;
  return { width };
};

export default connect(mapStateToProps)(NavBar);
