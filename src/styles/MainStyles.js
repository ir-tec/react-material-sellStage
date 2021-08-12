import { makeStyles } from "@material-ui/core";

const drawerWidth = 300;
export const styles = makeStyles((theme) => ({
  Drawer: {
    width: drawerWidth,
  },
  LayoutRoot: {
    display: "flex",

    minHeight: "100vh",
  },
  LayoutChildren: {
    width: "100%",
  },
}));
