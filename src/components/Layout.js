import { Toolbar } from "@material-ui/core";
import React from "react";
import { SetWidth } from "../redux/Actions";
import { Store } from "../redux/Store";
import { styles } from "../styles/MainStyles";

import { connect } from "react-redux";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ children, width }) => {
  const [open, setOpen] = React.useState(false);
  const classes = styles();
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      Store.dispatch(SetWidth(window.innerWidth));
    });
    return window.removeEventListener("resize", () => {
      Store.dispatch(SetWidth(window.innerWidth));
    });
  }, [width]);
  return (
    <div className={classes.LayoutRoot}>
      <NavBar setSideStatus={setOpen} />
      <SideBar width={width} sideStatus={open} setSideStatus={setOpen} />
      <div className={classes.LayoutChildren}>
        <Toolbar style={{ height: "300px" }} />
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  const { width } = props;

  return { width };
};
export default connect(mapStateToProps)(Layout);
