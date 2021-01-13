import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const updateItems = (orderData) => {
  return (dispatch) => {
    dispatch(updateItems());
    axios
      .get(`https://api.jsonbin.io/b/5fff1cb668f9f835a3dec1a1`)
      .then((res) => {
        const items = res.data.js;
        this.setState({ item: items });
      });
  };
};
