import axios from "axios";

const letsPlayFetch = (toFetch, type) => {
  return axios.get(
    `https://res.cloudinary.com/dqimeuotl/image/upload/v1671398623/shoes-ecom-site/${toFetch}.${type}`
  );
};

export default letsPlayFetch;
