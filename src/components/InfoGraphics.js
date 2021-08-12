import { Grid, IconButton, Typography, useTheme } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import info1 from "../img/info.png";
import info2 from "../img/Rectangle 47 (1).png";
import info3 from "../img/Rectangle 47 (2).png";
import info4 from "../img/info.png";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { connect } from "react-redux";

const InfoGraphics = ({ width }) => {
  const slideRef = React.createRef();
  const theme = useTheme();
  const goToNext = () => {
    slideRef.current.slickNext();
  };

  const goToPrev = () => {
    slideRef.current.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow:
      width > theme.breakpoints.values.lg
        ? 4
        : width < theme.breakpoints.values.sm
        ? 1
        : 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <Grid item container xs={12} justifyContent="center">
        <Grid
          item
          container
          xs={12}
          md={10}
          lg={11}
          xl={12}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h6">Infographics</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={goToPrev}>
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton onClick={goToNext}>
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <div className="container" style={{}}>
          <Slider {...settings} ref={slideRef}>
            {infoGroups.map((item, i) => (
              <div className="px-5" key={i}>
                <img src={item.img} alt="" className="card-img-top" />
                <Typography variant="body1">{item.title}</Typography>
              </div>
            ))}
          </Slider>
        </div>
      </Grid>
    </>
  );
};
const mapStateToProps = (props) => {
  const { width } = props;

  return { width };
};
export default connect(mapStateToProps)(InfoGraphics);
const infoGroups = [
  {
    title: "the Front-end developments trands you should see in 2021",
    img: info3,
  },
  {
    title: "the Front-end developments trands you should see in 2021",
    img: info1,
  },
  { title: "how muck do french developer yearn per year?", img: info2 },
  {
    title: "the Front-end developments trands you should see in 2021",
    img: info3,
  },
  {
    title: "the Front-end developments trands you should see in 2021",
    img: info4,
  },
  {
    title: "the Front-end developments trands you should see in 2021",
    img: info3,
  },
];
