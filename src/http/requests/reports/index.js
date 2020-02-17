import axios from "../../axios/index.js";

export default {
  getReports() {
    return axios.get("/api/v2/reports/");
  },
  createReport(type, data) {
    return axios.post("/api/reports/" + type, data);
  }
};
