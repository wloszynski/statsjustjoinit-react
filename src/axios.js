import axios from "axios";

const instance = axios.create({
  baseURL: "https://statsjustjoinit-default-rtdb.firebaseio.com/",
});

export default instance;
