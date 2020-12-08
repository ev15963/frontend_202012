import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    background: "#eeeeee",
  },
  paper: {
    padding: theme.spacing(3),
    testAlign: "center",
    color: theme.palette.text.primary,
  },
});

class GridTest extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="{classes.root}">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Content 1
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Content 2
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Content 3
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Content 4
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper}>
              Content 5
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              Content 6
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper}>
              Content 7
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
                link="https://velog.io/@hyounglee/wdconf2020"
              />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Content 8
              <img
                className="img"
                src="https://media.vlpt.us/images/hyounglee/post/cc374d2f-0f4e-472f-9d07-4d1f7e8727ca/til7.png"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GridTest);
