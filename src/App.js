import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProfileSummery from "./components/Profile_summery";
import { Store } from "./redux/Store";
const App = () => {
  return (
    <Router>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Route exact path="/profile-summery">
              <ProfileSummery />
            </Route>
          </Layout>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
