import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import React from "react";
import { styles } from "../styles/MainStyles";
import Logo from "../img/logo.png";
import BACKGROUND from "../img/Side.png";
import {
  Home,
  PeopleAlt,
  Person,
  Receipt,
  Settings,
  SettingsPhone,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const SideBar = ({ sideStatus, width, setSideStatus }) => {
  const classes = styles();
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();

  return (
    <Drawer
      open={sideStatus}
      variant={width > 1280 ? "permanent" : "temporary"}
      anchor="left"
      className={classes.Drawer}
      classes={{ paper: classes.Drawer }}
      onClose={() => {
        setSideStatus(false);
      }}
    >
      <Grid item container xs={12} alignItems="flex-start">
        <Grid item xs={12} style={{ paddingLeft: "10%", paddingTop: "5%" }}>
          <img src={Logo} alt="" />
        </Grid>
        <Grid item xs={12} style={{}} container alignItems="flex-start">
          {ProfileListItem.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                key={index}
                style={{
                  borderLeft:
                    location.pathname === `/${item.route}`
                      ? `4px solid ${theme.palette.primary.main} `
                      : null,
                  paddingLeft: "10%",
                }}
              >
                <List>
                  <ListItem
                    style={{
                      padding: "0",
                      paddingBottom: index === 3 ? "20px" : "0",
                    }}
                  >
                    <ListItemIcon>
                      <IconButton
                        onClick={() => {
                          history.push(`${item.route}`);
                        }}
                        size="small"
                        color={
                          location.pathname === `/${item.route}`
                            ? "primary"
                            : "default"
                        }
                      >
                        {item.icon}
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="subtitle1"
                        color={
                          location.pathname === `/${item.route}`
                            ? "primary"
                            : "textSecondary"
                        }
                      >
                        {item.title}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            );
          })}
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            className={classes.SideBarImage}
          >
            <img src={BACKGROUND} alt="" style={{ width: "80%" }} />
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SideBar;

const ProfileListItem = [
  { title: "Dashboard", icon: <Home />, route: "dashboard" },
  { title: "Profile Summery", icon: <Person />, route: "profile-summery" },
  { title: "Community", icon: <PeopleAlt />, route: "cummunity" },
  { title: "Resources", icon: <Receipt />, route: "resources" },

  { title: "Support", icon: <SettingsPhone />, route: "support" },
  { title: "Settings", icon: <Settings />, route: "settings" },
];
