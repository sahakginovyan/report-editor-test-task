import Vue from "vue";

export default {
  SET_REPORTS(state, reports) {
    state.reports = reports;
  },

  ADD_REPORT(state, report) {
    report.id = state.reports.length + 1;
    state.reports.unshift({ report: report });
  },

  UPDATE_REPORT(state, report) {
    const reportIndex = state.reports.findIndex(r => r.report.id == report.id);
    Vue.set(state.reports, reportIndex, { report: report });
  }
};
