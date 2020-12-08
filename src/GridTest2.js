import React, { Component } from "react";
import "./GridTest2.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Gird from "@material-ui/core/Grid";
const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    background: "#eeeeee",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
});

class GridTest2 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Gird container spacing={3}>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">
              <a href="https://weather.naver.com">날씨</a>

              <div class="weather_area">
                <strong class="current">
                  <span class="blind">현재 온도</span>-1
                  <span class="degree">°</span>
                </strong>
                <p class="summary">
                  어제보다 1 ° 높아요<span class="weather">맑음</span>
                </p>
                <dl class="summary_list">
                  <dt class="term">강수확률</dt>
                  <dd class="desc">0%</dd>
                  <dt class="term">습도</dt>
                  <dd class="desc">50%</dd>
                  <dt class="term">바람(서풍)</dt>
                  <dd class="desc">1m/s</dd>
                </dl>
              </div>
            </Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">
              증권
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">
              뉴스
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">영화 (순위)</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">웹툰</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">velog</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">쇼핑(카카오메이커스)</Paper>
          </Gird>
          <Gird item lg={3} md={4} sm={6} xs={12}>
            <Paper className="{classes.paper}">Content 8</Paper>
          </Gird>
        </Gird>
      </div>
    );
  }
}
export default withStyles(styles)(GridTest2);
