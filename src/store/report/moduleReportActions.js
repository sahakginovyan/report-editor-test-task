import axios from "../../http/axios/index.js";

export default {
  fetchReports({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/v2/reports/")
        .then(response => {
          commit("SET_REPORTS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  addReport({ commit }, report) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/reports/" + report.type, { report })
        .then(response => {
          commit("ADD_REPORT", report);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateReport({ commit }, report) {
    commit("UPDATE_REPORT", report);
  }
};
