// axios
import axios from "axios";

const domain = "https://39c81456-e28f-4ca1-9487-d60ca5d9ef47.mock.pstmn.io/";

export default axios.create({
  baseURL: domain
});
