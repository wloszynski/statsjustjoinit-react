import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";

import StatisticsItems from "../../components/StatisticsItems/StatisticsItems";
import StatisticsGraph from "../../components/StatisticsGraph/StatisticsGraph";

import classes from "./Statistics.module.css";
class Statistics extends Component {
  state = {
    link: "all",
    items: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname === this.props.location.pathname)
      return false;

    axios
      .get(
        `https://statsjustjoinit-default-rtdb.firebaseio.com/skills${this.props.location.pathname}.json`
      )
      .then((res) => {
        const items = res.data;
        this.setState({ items: items });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    axios
      .get(
        `https://statsjustjoinit-default-rtdb.firebaseio.com/skills${this.props.location.pathname}.json`
      )
      .then((res) => {
        const items = res.data;
        this.setState({ items: items });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let items = <h1>ERROR HAS OCCURRED</h1>;
    if (this.state.items) {
      items = (
        <Fragment>
          <StatisticsItems items={this.state.items} />

          <StatisticsGraph image={this.props.location.pathname} />
        </Fragment>
      );
    }

    return (
      <div className={classes.Statistics}>
        <div className={classes.Options}>
          <div className={classes.Appearances}>
            <span>appearances </span>
            <span className={classes.Info}>
              <i className="fas fa-info"></i>
              <div className={classes.Info__desc}>
                Appearances represent the skill name and number of appearances
                in given category. Data is scraped from justjoin.it website.
              </div>
            </span>
          </div>
        </div>
        <div className={classes.Items}>{items}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cat: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics, axios);
